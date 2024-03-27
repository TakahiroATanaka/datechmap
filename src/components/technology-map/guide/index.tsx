import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';

export const TechnologyMapGuide: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>テクノロジーマップの読み方</h2>
      <p>利用方法等の詳細は、下記の資料をご覧ください。</p>
      <ul>
        <li>
          <Anchor href={canonicalPath('/pdf/20231006_policies_regtechmap_outline_02.pdf')}>
            テクノロジーマップ概要（PDF/1,143KB）
          </Anchor>
          <br />
          テクノロジーマップの位置づけ、テクノロジーマップの構成、技術類型のマッピングについて説明しています。
        </li>
      </ul>
      <ul>
        <li>
          <Anchor href={canonicalPath('/pdf/20231006_policies_regtechmap_outline_03.pdf')}>
            規制所管省庁等向けテクノロジーマップ利用の手引き（PDF/7,663KB）
          </Anchor>
          <br />
          テクノロジーマップ利用の仕方について説明しています。
        </li>
      </ul>
      <p>
        テクノロジーマップの縦軸項目には、規制目的（規制により達成したい目的は何か）、機能（規制の目的を達成するために必要となる機能は何か）等を記載しています。
      </p>
    </section>
  );
};
