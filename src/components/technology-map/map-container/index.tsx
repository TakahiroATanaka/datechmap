import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';

export const TechnologyMapContainer: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>テクノロジーマップ</h2>
      <p>
        規制の見直しに活用しうる技術を把握できるよう、規制を類型化し、規制の類型と技術の対応関係を整理したテクノロジーマップを提供しています。規制の判断・対応内容（例：適格性判断）に着目したパターン1、規制に基づき実施する業務内容（例：点検業務）に着目したパターン2の2種類を用意しています。
      </p>
      <p>テクノロジーマップをご覧いただく場合は、以下の画像をクリックして下さい。</p>
      <ul>
        <li>
          テクノロジーマップ パターン1（規制の判断・対応内容に着目）
          <br />
          <Anchor href={canonicalPath('/technology-map/map-data?pattern=1')}>
            <img src="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_images/5b8165e7-1763-4a5f-bf4f-169f48131a1d/fba7ede2/20240222_policies_regtechmap_01.png" />
          </Anchor>
        </li>
      </ul>
      <ul>
        <li>
          テクノロジーマップ パターン2（規制に基づき実施する業務内容に着目）
          <br />
          <Anchor href={canonicalPath('/technology-map/map-data?pattern=2')}>
            <img src="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_images/5b8165e7-1763-4a5f-bf4f-169f48131a1d/f0603fd6/20240222_policies_regtechmap_02.png" />
          </Anchor>
        </li>
      </ul>
      <h3>テクノロジーマップ概要版</h3>
      <p>テクノロジーマップ概要版をご覧いただく場合は、以下をクリックして下さい。</p>
      <ul>
        <li>
          テクノロジーマップ パターン1 概要版（規制の判断・対応内容に着目）（PDF/407KB）
          <br />
          <Anchor href="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/5b8165e7-1763-4a5f-bf4f-169f48131a1d/5239c064/20231006_policies_regtechmap_detail_01.pdf">
            <img src="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_images/5b8165e7-1763-4a5f-bf4f-169f48131a1d/9488672a/20231006_policies_regtechmap_detail_01.png" />
          </Anchor>
        </li>
      </ul>
      <ul>
        <li>
          テクノロジーマップ パターン2 概要版（規制に基づき実施する業務内容に着目）（PDF/402KB）
          <br />
          <Anchor href="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/5b8165e7-1763-4a5f-bf4f-169f48131a1d/5f8343f2/20231006_policies_regtechmap_detail_02.pdf">
            <img src="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_images/5b8165e7-1763-4a5f-bf4f-169f48131a1d/53825a1e/20231006_policies_regtechmap_detail_02.png" />
          </Anchor>
        </li>
      </ul>
      <p>
        横軸は、データをどのように取得し（Input）、取得データをどのように解析・判断し（Process）、どのように対応するのか（Output）、データフローに沿ったIPO（Input-Process-Output）モデルに基づき整理しています（2パターン共通）。
      </p>
      <p>
        縦軸は、規制の目的を達成するために必要な機能に基づき整理しています。
        規制の判断・対応内容（例：適格性判断）に着目したパターン1、規制に基づき実施する業務内容（例：点検業務）に着目したパターン2の2種類で整理しています。目的やご関心の規制の内容に応じて使い分けていただくことができます。
      </p>
    </section>
  );
};
