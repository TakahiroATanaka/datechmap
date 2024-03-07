import { AlertTos } from '@/components/alert-tos';
import { BaseLayout } from '@/components/common/BaseLayout';
import { Breadcrumbs, breadcrumbsItemStyle } from '@/components/common/Breadcrumbs';

type Props = {};

const Page = (props: Props) => {
  return (
    <BaseLayout>
      <main className="col-span-full flex flex-col gap-4" id="main">
        <Breadcrumbs
          items={[
            <a className={breadcrumbsItemStyle} href="/">
              ホーム
            </a>,
            <a className={breadcrumbsItemStyle} href="/policies">
              政策
            </a>,
            <a
              className={breadcrumbsItemStyle}
              href="/policies/digital-extraordinary-administrative-research-committee"
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
      </main>
      <AlertTos />
    </BaseLayout>
  );
};

export default Page;
