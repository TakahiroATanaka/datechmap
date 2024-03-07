import { Anchor } from '@/components/ui/Anchor';

export const TechnologyMapGuide: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>テクノロジーマップの読み方</h2>
      <p>利用方法等の詳細は、下記の資料をご覧ください。</p>
      <ul>
        <li>
          <Anchor href="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/5b8165e7-1763-4a5f-bf4f-169f48131a1d/c24e47c7/20231006_policies_regtechmap_outline_02.pdf">
            テクノロジーマップ概要（PDF/1,143KB）
          </Anchor>
          <br />
          テクノロジーマップの位置づけ、テクノロジーマップの構成、技術類型のマッピングについて説明しています。
        </li>
      </ul>
      <ul>
        <li>
          <Anchor href="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/5b8165e7-1763-4a5f-bf4f-169f48131a1d/06e55a55/20231006_policies_regtechmap_outline_03.pdf">
            規制所管省庁等向けテクノロジーマップ利用の手引き（PDF/7,663KB）
          </Anchor>
          <br />
          テクノロジーマップ利用の仕方について説明しています。
        </li>
      </ul>
      <p>テクノロジーマップ縦軸項目の解説をご覧いただく場合は、以下の画像をクリックして下さい。</p>
      <ul>
        <li>
          テクノロジーマップ縦軸項目の解説（PDF/700KB） テクノロジーマップ縦軸項目の解説
          <br />
          <Anchor href="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/5b8165e7-1763-4a5f-bf4f-169f48131a1d/4d237ff0/20231006_policies_regtechmap_03.pdf">
            <img src="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_images/5b8165e7-1763-4a5f-bf4f-169f48131a1d/3b79b971/20231006_policies_regtechmap_03.png" />
          </Anchor>
        </li>
      </ul>
      <p>マッピングした要素技術の解説をご覧いただく場合は、以下の画像をクリックして下さい。</p>
      <ul>
        <li>
          マッピングした要素技術の解説（PDF/917KB） マッピングした要素技術の解説
          <br />
          <Anchor href="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_resources/5b8165e7-1763-4a5f-bf4f-169f48131a1d/b64e9dea/20231006_policies_regtechmap_04.pdf">
            <img src="https://www.digital.go.jp/assets/contents/node/basic_page/field_ref_images/5b8165e7-1763-4a5f-bf4f-169f48131a1d/c9072e61/20231006_policies_regtechmap_04.png" />
          </Anchor>
        </li>
      </ul>
    </section>
  );
};
