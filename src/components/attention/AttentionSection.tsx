import { SectionHeader } from '../common/SectionHeader';
import { Card } from './Card';

export const AttentionSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader title="重要なお知らせ" />

      <Card
        publishedAt={'2023年05月27日'}
        title={
          <>
            マイナンバーカード関連サービスの誤登録等の事案について、ご自身での確認方法やご質問・ご不安にお答えします。マイナンバー総合フリーダイヤル
            （☎ 0120-95-0178） でも受け付けております
          </>
        }
      />
    </section>
  );
};
