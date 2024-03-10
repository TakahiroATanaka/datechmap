'use client';

import { BaseLayout } from '@/components/common/BaseLayout';
import { Breadcrumbs, breadcrumbsItemStyle } from '@/components/common/Breadcrumbs';
import { TechnologyMapProductTable } from '@/components/technology-map/product-table';
import { TechnologyMapReference } from '@/components/technology-map/reference';
import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';
import { parseOffers, parseProduct } from '@/libs/technology-map';
import { technologyMapProductFetcher, technologyMapOffersFetcher } from '@/libs/technology-map-fetcher';
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useSWR from 'swr';

const Page = () => {
  const id = parseInt(useSearchParams().get('id') ?? '');

  const { data: productData } = useSWR(
    canonicalPath(`/data/technology-map-product-${id}.json`),
    technologyMapProductFetcher,
  );
  const { data: offersData } = useSWR(canonicalPath(`/data/technology-map-offers.json`), technologyMapOffersFetcher);
  if (productData === undefined || offersData === undefined) return <></>;
  const product = parseProduct(productData);
  const offers = parseOffers(offersData);
  const offer = offers[product.mainCategory];

  return (
    <BaseLayout>
      <main className="col-span-full flex flex-col gap-6" id="main">
        <Breadcrumbs
          items={[
            <a className={breadcrumbsItemStyle} href="/" key="home">
              ホーム
            </a>,
            <a className={breadcrumbsItemStyle} href="/policies" key="policies">
              政策
            </a>,
            <a
              className={breadcrumbsItemStyle}
              href="/policies/digital-extraordinary-administrative-research-committee"
              key="digital-extraordinary-administrative-research-committee"
            >
              アナログ規制見直しの取組
            </a>,
            <a className={breadcrumbsItemStyle} href={canonicalPath(`/technology-map`)} key="technology-map">
              テクノロジーマップ・技術カタログに関する取組
            </a>,
            <a
              className={breadcrumbsItemStyle}
              href={canonicalPath(`/technology-map/offer/?id=${offer.id}`)}
              key="technology-map"
            >
              {offer.title}
            </a>,
            <>{product.title}</>,
          ]}
        />

        <div className="max-w-6xl">
          <h1>
            {offer.title}:{product.title}
          </h1>
          <h2>留意事項（公募要領より）</h2>
          <ul>
            <li>原則として、応募に基づく情報をそのままカタログに掲載しております。</li>
            <li>
              技術カタログに掲載する情報は、掲載技術に関する証明、認証その他何ら技術の裏付けを行うものではなく、あくまで技術の活用に当たっての参考情報として取りまとめるものです。そのため、技術カタログ掲載技術について、国（デジタル庁）による技術の裏付けが行われたかのような表示、宣伝等を行うことは禁止しております。
            </li>
            <li>
              また、技術カタログは、応募に基づく情報を掲載するものであり、その内容についてデジタル庁が評価等を行っているものではありません。したがって、カタログ掲載内容や、これに関する苦情等については、デジタル庁は何らの責任を有さず、応募者が責任を負うこととしております。{' '}
            </li>
          </ul>

          {product.body.map((element1, index1) => {
            for (const key1 of Object.keys(element1)) {
              if (Array.isArray(element1[key1]) === false) {
                return (
                  <div key={index1}>
                    <h2 className="pt-20">{key1}</h2>
                    <div>
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{element1[key1]}</ReactMarkdown>
                    </div>
                  </div>
                );
              }

              return (
                <div key={index1}>
                  <h2 className="pt-20">{key1}</h2>
                  <div>
                    {element1[key1].map((element2: any, index2: any) => {
                      for (const key2 of Object.keys(element2)) {
                        return (
                          <div key={index2}>
                            <h3 className="pt-8">{key2}</h3>
                            <div>
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>{element2[key2]}</ReactMarkdown>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              );
            }

            return <></>;
          })}
        </div>
      </main>
    </BaseLayout>
  );
};

export default Page;
