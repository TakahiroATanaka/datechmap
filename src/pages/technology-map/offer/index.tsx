'use client';

import { BaseLayout } from '@/components/common/BaseLayout';
import { Breadcrumbs, breadcrumbsItemStyle } from '@/components/common/Breadcrumbs';
import { TechnologyMapProductTable } from '@/components/technology-map/product-table';
import { TechnologyMapReference } from '@/components/technology-map/reference';
import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath, urlTransform } from '@/libs/path';
import { parseOffers } from '@/libs/technology-map';
import { technologyMapOffersFetcher } from '@/libs/technology-map-fetcher';
import { useSearchParams } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useSWR from 'swr';

const Page = () => {
  const id = parseInt(useSearchParams().get('id') ?? '');
  const { data: offers } = useSWR(canonicalPath(`/data/technology-map-offers.json`), technologyMapOffersFetcher);
  if (offers == undefined) {
    return <></>;
  }
  const parsed = parseOffers(offers);
  if (parsed == undefined || parsed[id] == undefined) {
    return <></>;
  }
  const offer = parsed[id];

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
            <>{offer.title}</>,
          ]}
        />
        <p>本ページは試行版です。今後機能拡充を予定しております。</p>
        <h1>{offer.title}</h1>
        <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
          {offer.overview}
        </ReactMarkdown>
        <h2>製品・サービス一覧</h2>
        <p>
          留意事項（以下<Anchor href="#offer">募集要領</Anchor>より引用）
        </p>
        <blockquote>
          <ul>
            <li>原則として、応募に基づく情報をそのままカタログに掲載します。</li>
            <li>
              技術カタログに掲載する情報は、掲載技術に関する証明、認証その他何ら技術の裏付けを行うものではなく、あくまで技術の活用に当たっての参考情報として取りまとめるものです。そのため、技術カタログ掲載技術について、国（デジタル庁）による技術の裏付けが行われたかのような表示、宣伝等を行うことは禁止しております。
            </li>
            <li>
              また、技術カタログは、応募に基づく情報を掲載するものであり、その内容についてデジタル庁が評価等を行っているものではありません。したがって、カタログ掲載内容や、これに関する苦情等については、デジタル庁は何らの責任を有さず、応募者が責任を負うこととしております。
            </li>
          </ul>
        </blockquote>

        <h3>全一覧</h3>

        <ul>
          <li>
            一覧上の操作説明
            <br />
            「製品・サービス名」をクリック：各製品・サービスに関する詳細情報を参照することができます。 <br />
            右上のアイコンを操作：一覧上での情報検索を行ったり一覧上の表示条件を変更することができます。
          </li>
        </ul>

        <h4>令和５年度デジタル庁技術検証事業にて活用した製品・サービス一覧</h4>
        <TechnologyMapProductTable categoryId={offer.id} qualification={2}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
            {offer.qualifiedDescription}
          </ReactMarkdown>
        </TechnologyMapProductTable>

        <h4>必須事項を備える製品・サービス一覧</h4>
        <TechnologyMapProductTable categoryId={offer.id} qualification={1}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
            {offer.qualifiedDescription}
          </ReactMarkdown>
        </TechnologyMapProductTable>

        <h4>必須事項を備えない製品・サービス一覧</h4>
        <TechnologyMapProductTable categoryId={offer.id} qualification={0}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
            {offer.notQualifiedDescription}
          </ReactMarkdown>
        </TechnologyMapProductTable>

        <h2 id="offer">公募{offer.closed ? '（締切済）' : ''}に関する資料</h2>
        <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
          {offer.offer}
        </ReactMarkdown>
        <TechnologyMapReference />
      </main>
    </BaseLayout>
  );
};

export default Page;
