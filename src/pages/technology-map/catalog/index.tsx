'use client';

import { BaseLayout } from '@/components/common/BaseLayout';
import { Breadcrumbs, breadcrumbsItemStyle } from '@/components/common/Breadcrumbs';
import { TechnologyMapCatalogList } from '@/components/technology-map/catalog/list';
import { TechnologyMapNews } from '@/components/technology-map/news';
import { TechnologyMapReference } from '@/components/technology-map/reference';
import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';

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
            <a className={breadcrumbsItemStyle} href={canonicalPath(`/technology-map`)} key="technology-map">
              テクノロジーマップ・技術カタログに関する取組
            </a>,
            `技術カタログの整備`,
          ]}
        />
        <h1>技術カタログの整備</h1>
        <p>本ページは試行版です。今後機能拡充を予定しております。</p>
        <h2>概要</h2>
        <p>
          技術保有機関からの応募により、アナログ規制の見直しに活用可能性がある製品・サービス情報を整理した技術カタログを提供しています。
        </p>

        <TechnologyMapNews />

        <h2>各製品・サービス一覧</h2>
        <TechnologyMapCatalogList />

        <h2>公募情報</h2>
        <h3>現在公募している案件</h3>
        <p>現在公募している案件はありません。</p>
        <h3>終了案件</h3>
        <ul>
          <li id="offer-07">
            測定・分析のデジタル化を実現する製品・サービスの公募（2024年2月26日募集終了）
            <ul>
              <li>
                <Anchor href={canonicalPath('/pdf/10007_policies_technology-catalog_outline_01_20240126.pdf')}>
                  募集要領（PDF/326KB）
                </Anchor>
              </li>
              <li>
                <Anchor href="https://forms.office.com/r/AJwtfKzCVi">
                  測定・分析のデジタル化を実現する製品・サービスの公募（登録フォーム）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/10007_policies_technology-catalog_outline_02_20240126.pdf')}>
                  （参考資料）応募フォームにおける質問事項一覧（PDF/940KB）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/20240126_policies_technology-catalog_outline_03.pdf')}>
                  （参考資料）測定・分析のデジタル化後の業務と求められる機能（PDF/450KB）
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li id="offer-06">
            目視等による施工・経年劣化・安全措置対策状況等確認のデジタル化を実現する製品・サービスの公募（2024年1月29日募集終了）
            <ul>
              <li>
                <Anchor href={canonicalPath('/pdf/10006_policies_technology-catalog_outline_06_20231225.pdf')}>
                  募集要領（PDF/324KB）
                </Anchor>
              </li>
              <li>
                <Anchor href="https://forms.office.com/r/kLgWkCdBsX">
                  目視等による施工・経年劣化・安全措置対策状況等確認のデジタル化を実現する製品・サービスの公募（登録フォーム）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/10006_policies_technology-catalog_outline_07_20231225.pdf')}>
                  （参考資料）応募フォームにおける質問事項一覧（PDF/1,059KB）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/20231225_policies_technology-catalog_outline_08.pdf')}>
                  （参考資料）目視等による施工・経年劣化・安全措置対策状況等確認のデジタル化後の業務と求められる機能（PDF/479KB）
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li id="offer-05">
            侵入痕跡・状況異変を検知する見張りのデジタル化を実現する製品・サービスの公募（2024年1月29日募集終了）
            <ul>
              <li>
                <Anchor href={canonicalPath('/pdf/10005_policies_technology-catalog_outline_09_20231225.pdf')}>
                  募集要領（PDF/310KB）
                </Anchor>
              </li>
              <li>
                <Anchor href="https://forms.office.com/r/XFtHgNARmv">
                  侵入痕跡・状況異変を検知する見張りのデジタル化を実現する製品・サービスの公募（登録フォーム）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/10005_policies_technology-catalog_outline_10_20231225.pdf')}>
                  （参考資料）応募フォームにおける質問事項一覧（PDF/1,064KB）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/20231225_policies_technology-catalog_outline_11.pdf')}>
                  （参考資料）侵入痕跡・状況異変を検知する見張りのデジタル化後の業務と求められる機能（PDF/461KB）
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li id="offer-04">
            広域な利用状況・被害等の把握のデジタル化を実現する製品・サービスの公募（2023年12月22日募集終了）
            <ul>
              <li>
                <Anchor href={canonicalPath('/pdf/10004_policies_technology-catalog_outline_06_20231117.pdf')}>
                  募集要領（PDF/312KB）
                </Anchor>
              </li>
              <li>
                <Anchor href="https://forms.office.com/r/4Q2mfe9DZe">
                  広域な利用状況・被害等の把握のデジタル化を実現する製品・サービスの公募（登録フォーム）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/10004_policies_technology-catalog_outline_07_20231117.pdf')}>
                  （参考資料）応募フォームにおける質問事項一覧（PDF/996KB）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/20231117_policies_technology-catalog_outline_08.pdf')}>
                  （参考資料）事業場の管理・業務状況等の確認（実地調査）のデジタル化後の業務と求められる機能（PDF/467KB）
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li id="offer-03">
            事業場の管理・業務状況等の確認（実地調査）のデジタル化を実現する製品・サービスの公募（2023年12月22日募集終了）
            <ul>
              <li>
                <Anchor href={canonicalPath('/pdf/10003_policies_technology-catalog_outline_06_20231117.pdf')}>
                  募集要領（PDF/318KB）
                </Anchor>
              </li>
              <li>
                <Anchor href="https://forms.office.com/r/Rr3GB6zwr2">
                  事業場の管理・業務状況等の確認（実地調査）のデジタル化を実現する製品・サービスの公募（登録フォーム）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/10003_policies_technology-catalog_outline_07_20231117.pdf')}>
                  （参考資料）応募フォームにおける質問事項一覧（PDF/984KB）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/10003_policies_technology-catalog_outline_11_20231117.pdf')}>
                  （参考資料）事業場の管理・業務状況等の確認（実地調査）のデジタル化後の業務と求められる機能（PDF/467KB）
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li id="offer-02">
            往訪閲覧・縦覧のデジタル化を実現する製品・サービスの公募（2023年11月6日募集終了）
            <ul>
              <li>
                <Anchor href={canonicalPath('/pdf/10002_policies_technology-catalog_outline_01_20231013.pdf')}>
                  募集要領（PDF/328KB）
                </Anchor>
                （2023年10月13日更新）
              </li>
              <li>
                <Anchor href="https://forms.office.com/r/87SfgDnCGi">
                  往訪閲覧・縦覧のデジタル化を実現するための技術の公募（登録フォーム）
                </Anchor>
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/10002_policies_technology-catalog_outline_03_20240222.pdf')}>
                  （参考資料）応募フォームにおける質問事項⼀覧（PDF/1,176KB）
                </Anchor>
                （2024年2月22日更新）
              </li>
              <li>
                <Anchor href={canonicalPath('/pdf/20231006_policies_technology-catalog_outline_03.pdf')}>
                  （参考資料）往訪閲覧・縦覧のデジタル化後の業務と求められる機能（PDF/488KB）
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <ul>
          <li id="offer-01">
            講習・試験のデジタル化を実現する製品・サービスの公募（2022年10月22日募集終了）
            <ul>
              <li>
                <Anchor href={canonicalPath('/pdf/10001_policies_technology-catalog_outline_01_20231013.pdf')}>
                  募集要領（PDF/307KB）
                </Anchor>
                （2022年10月7日更新）
              </li>
              <li>
                <Anchor href="https://forms.office.com/r/fJRSavhRyB">
                  講習・試験のデジタル化を実現するための技術の公募（登録フォーム）
                </Anchor>
              </li>
              <li>
                <Anchor
                  href={canonicalPath(
                    '/pdf/10001_policies_digital-extraordinary-administrative-research-committee_list_03_20220930.pdf',
                  )}
                >
                  （参考資料）応募フォームにおける質問事項一覧（PDF/996KB）
                </Anchor>
              </li>
              <li>
                <Anchor
                  href={canonicalPath(
                    '/pdf/20220930_policies_digital-extraordinary-administrative-research-committee_reference_02.pdf',
                  )}
                >
                  （参考資料）講習・試験のデジタル化後の業務と求められる機能（PDF/734KB）
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <h3>各公募における共通資料</h3>
        <ul>
          <li>
            <Anchor href={canonicalPath('/pdf/21_参考資料_要素技術の解説_20240329.pdf')}>
              （参考資料）要素技術の解説（PDF/604KB）
            </Anchor>
          </li>
          <li>
            <Anchor href={canonicalPath('/pdf/20231225_policies_technology-catalog_outline_03.pdf')}>
              テクノロジーマップ及び技術カタログ利用規約（2023年11月17日改訂）（PDF/280KB）
            </Anchor>
          </li>
          <li>
            <Anchor
              href={canonicalPath(
                'https://www.digital.go.jp/policies/digital-extraordinary-administrative-research-committee/privacy-policy/',
              )}
            >
              技術カタログへの登録における個人情報の取扱いについて
            </Anchor>
          </li>
          <li>
            <Anchor href={canonicalPath('/pdf/20240126_policies_technology-catalog_outline_04.pdf')}>
              （参考資料）サイバーセキュリティに関する設問の趣旨と概要（PDF/406KB）
            </Anchor>
          </li>
          <li>
            <Anchor href={canonicalPath('/pdf/20231225_policies_technology-catalog_outline_12_著作権について.pdf')}>
              著作権について（PDF/729KB）
            </Anchor>
          </li>
        </ul>
        <TechnologyMapReference />
      </main>
    </BaseLayout>
  );
};

export default Page;
