import { SectionHeader } from '../common/SectionHeader';
import { Card } from './Card';

export const AttentionSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader title="重要なお知らせ" />

      <Card
        publishedAt={'2023年6月30日'}
        title={<>公金受取口座にご本人名義の預貯金口座を登録されていない可能性がある方へ、お手紙を郵送しています</>}
        url={'https://www.digital.go.jp/news/96316a9a-8726-40d5-982a-e35282f4382c'}
      />

      <Card
        publishedAt={'2023年05月27日'}
        title={
          <>
            マイナンバーカード関連サービスの誤登録等の事案について、ご自身での確認方法やご質問・ご不安にお答えします。マイナンバー総合フリーダイヤル
            （☎ 0120-95-0178） でも受け付けております
          </>
        }
        url={'https://digital.go.jp/policies/mynumber/related-services-issue/'}
      />
    </section>
  );
};
