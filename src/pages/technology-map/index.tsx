import { BaseLayout } from '@/components/common/BaseLayout';
import { Breadcrumbs, breadcrumbsItemStyle } from '@/components/common/Breadcrumbs';
import { AlertTos } from '@/components/technology-map/alert-tos';
import { TechnologyMapCatalog } from '@/components/technology-map/catalog';
import { TechnologyMapNews } from '@/components/technology-map/news';
import { TechnologyMapReference } from '@/components/technology-map/reference';

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

        <h1>テクノロジーマップ・技術カタログに関する取組</h1>

        <h2>概要</h2>
        <p>
          デジタル庁では、規制所管省庁等が技術動向を踏まえて自律的にデジタル実装や規制の見直しを推進していけるよう、規制と技術の対応関係を整理・可視化したテクノロジーマップや、アナログ規制の見直しに活用できる製品・サービス情報を整理した技術カタログ等を整備していきます。技術の進展に応じて、随時更新していきます。
        </p>

        <TechnologyMapNews />
        <TechnologyMapCatalog />
        <TechnologyMapReference />
      </main>
      <AlertTos />
    </BaseLayout>
  );
};

export default Page;
