'use client';

import { BaseLayout } from '@/components/common/BaseLayout';
import { Breadcrumbs, breadcrumbsItemStyle } from '@/components/common/Breadcrumbs';
import { TechnologyMapCatalog } from '@/components/technology-map/catalog';
import { TechnologyMapGuide } from '@/components/technology-map/guide';
import { TechnologyMapContainer } from '@/components/technology-map/map-container';
import { TechnologyMapNews } from '@/components/technology-map/news';
import { TechnologyMapReference } from '@/components/technology-map/reference';
import { TosContent } from '@/components/technology-map/tos/content';

const Page = () => {
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
            'テクノロジーマップ・技術カタログに関する取組',
          ]}
        />

        <h1>アナログ規制見直しに活用できるテクノロジーマップ・技術カタログに関する取組</h1>

        <h2>概要</h2>
        <p>
          デジタル庁では、規制所管省庁等が技術動向を踏まえて自律的にデジタル実装や規制の見直しを推進していけるよう、規制と技術の対応関係を整理・可視化したテクノロジーマップや、アナログ規制の見直しに活用できる製品・サービス情報を整理した技術カタログ等を整備していきます。技術の進展に応じて、随時更新していきます。
        </p>

        <h2 id="tos">コンテンツ利用上の注意</h2>
        <TosContent />

        <TechnologyMapNews />

        <TechnologyMapContainer />
        <TechnologyMapGuide />
        <TechnologyMapCatalog />
        <TechnologyMapReference />
      </main>
    </BaseLayout>
  );
};

export default Page;
