import { TechnologyMapCatalogList } from './list';
import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';

export const TechnologyMapCatalog: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>技術カタログ</h2>
      <p>
        技術保有機関からの応募により、アナログ規制の見直しに活用し得る、具体的な製品・サービス情報を整理した技術カタログを提供しております。コンテンツ利用上の注意をご確認いただいた上で、ご活用をお願いします。
      </p>
      <p>現在整理している具体的な技術カタログは、以下のとおりです。</p>

      <TechnologyMapCatalogList />

      <p>
        技術カタログに関する公募・整備の状況については
        <Anchor href={canonicalPath('/technology-map/catalog')}>技術カタログの整備</Anchor>
        をご確認ください。
      </p>

      <h2 id="commentary">技術解説記事</h2>
      <p>
        デジタル庁では、アナログ規制の見直しを推進するため、アナログ規制に活用可能性のある技術に関する情報を幅広く提供しています。
      </p>
      <ul>
        <li>
          <Anchor
            href={canonicalPath('/pdf/20240329_meeting_technology_based_regulatory_reform_outline_01.pdf')}
            target="_blank"
          >
            テクノロジーマップと技術解説記事の体系図（PDF/572KB）
          </Anchor>
        </li>
        <li>
          <Anchor href={canonicalPath('/pdf/20230209_meeting_technology_based_regulatory_reform_outline_04.pdf')}>
            デジタル技術解説記事のサンプル記事執筆結果について（オンライン受験システム（CBT）技術の検証と評価方法）（テクノロジーベースの規制改革推進委員会構成員
            登 大遊氏）（PDF/2,175KB）
          </Anchor>
        </li>
        <li>
          <Anchor href="https://digital-gov.note.jp/n/na55e821ad7e4" target="_blank">
            技術検証事業に関する取り組み①：ドローン、3D点群データ等を活用した構造物等の検査の実証
          </Anchor>
        </li>
        <li>
          <Anchor href="https://digital-gov.note.jp/n/nd01a99581b4a" target="_blank">
            技術検証事業に関する取り組み②：カメラ・センサー技術によるDXと将来像
          </Anchor>
        </li>
        <li>
          <Anchor href="https://digital-gov.note.jp/n/na05192a2e4a1" target="_blank">
            技術検証事業に関する取り組み③：文章認識・不正利用防止技術の実証
          </Anchor>
        </li>
        <li>
          <Anchor href="https://digital-gov.note.jp/n/n8fcdbe2b5fff" target="_blank">
            技術検証事業に関する取り組み④：モニタリング技術の実証
          </Anchor>
        </li>
      </ul>
      <h2>技術検証事業に関する取組</h2>
      <p>
      デジタル庁では、デジタル原則を踏まえたアナログ規制の見直しに関して、安全性や実効性の観点からの技術検証について、規制所管府省庁や地方公共団体とも連携の上、実施しています。
      </p>
      <ul>
        <li>
          <Anchor href="https://www.digital.go.jp/policies/digital-extraordinary-administrative-research-committee/technology-verification">
            技術検証事業に関する取組
          </Anchor>
        </li>
      </ul>
    </section>
  );
};
