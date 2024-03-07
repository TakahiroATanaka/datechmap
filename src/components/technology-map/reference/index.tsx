import { Anchor } from '@/components/ui/Anchor';

export const TechnologyMapReference: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>関連情報</h2>
      <ul>
        <li>
          <Anchor href="https://www.digital.go.jp/councils/digital-system-reform-technology-based-regulatory-reform">
            デジタル関係制度改革検討会 テクノロジーベースの規制改革推進委員会
          </Anchor>
        </li>
        <li>
          <Anchor href="https://www.digital.go.jp/policies/digital-extraordinary-administrative-research-committee/">
            アナログ規制見直しの取組
          </Anchor>
        </li>
        <li>
          <Anchor href="https://www.digital.go.jp/councils/administrative-research-wg-technology_based_regulatory_reform/">
            デジタル臨時行政調査会作業部会テクノロジーベースの規制改革推進委員会（廃止）
          </Anchor>
        </li>
        <li>
          <Anchor href="https://www.digital.go.jp/laws/2567b640-d579-488c-a512-57f51e70ed3f/">
            デジタル社会の形成を図るための規制改革を推進するためのデジタル社会形成基本法等の一部を改正する法律案
          </Anchor>
        </li>
      </ul>
      <h2>参考資料</h2>
      <ul>
        <li>
          <Anchor href="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/34a225ed-03be-4408-b00d-f9b88a5a2543/176e6731/20230821_policies_digital-extraordinary-administrative-research-committee_outline_01.pdf">
            テクノロジーベースの規制改革の検討経緯（2023年8月）（PDF／4,810KB）
          </Anchor>
        </li>
      </ul>
    </section>
  );
};
