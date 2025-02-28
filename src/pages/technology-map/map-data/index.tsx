'use client';

import { Breadcrumbs, breadcrumbsItemStyle } from '@/components/common/Breadcrumbs';
import { Gradient } from '@/components/common/Gradient';
import { Menu } from '@/components/common/Menu';
import { Footer } from '@/components/common/footer/Footer';
import { Header } from '@/components/common/header/Header';
import { TechnologyMap } from '@/components/technology-map/map';
import { TosAlert } from '@/components/technology-map/tos/alert';
import { MenuContext } from '@/features/context';
import { canonicalPath } from '@/libs/path';
import { technologyMapDataFetcher, technologyMapCategoriesFetcher } from '@/libs/technology-map-fetcher';
import { notoSansJp } from '@/styles/fonts';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import useSWR from 'swr';

const Page = () => {
  const pattern = parseInt(useSearchParams().get('pattern') ?? '');
  const { data: technologyMap } = useSWR(
    canonicalPath(`/data/technology-map-${pattern}.json`),
    technologyMapDataFetcher,
  );
  const { data: technologyMapCategories } = useSWR(
    canonicalPath(`/data/technology-map-categories.json`),
    technologyMapCategoriesFetcher,
  );

  const { isOpen } = useContext(MenuContext);

  const title = `テクノロジーマップ パターン${pattern}（α版） | デジタル庁`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={`${notoSansJp.variable} bg-primary ${isOpen ? 'h-screen overflow-y-scroll' : ''}`} id="top">
        <a className="sr-only" href="#main">
          本文へ移動
        </a>

        {!isOpen && <Header />}

        {isOpen && <Menu />}

        <div className={`mb-36 w-full px-6 ${isOpen ? 'mt-[112px]' : 'mt-14'}`}>
          <div className={`mx-auto grid max-w-container grid-cols-1 gap-8 pb-4 sm:grid-cols-12`}>
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
                  `テクノロジーマップ パターン${pattern}`,
                ]}
              />
            </main>
          </div>
          <TechnologyMap
            data={technologyMap === undefined ? [] : technologyMap}
            categories={technologyMapCategories === undefined ? [] : technologyMapCategories}
            id={pattern.toString()}
          />
        </div>

        <TosAlert />

        <Footer />

        <Gradient />
      </div>
    </>
  );
};

export default Page;
