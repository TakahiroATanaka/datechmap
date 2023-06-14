import { Card } from './Card';

export const AttentionSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <Card
        publishedAt={'2023年5月10日'}
        title={
          <>
            マイナンバーカード関連サービスの誤登録等の事案について、ご自身での確認方法やご質問・ご不安にお答えします。マイナンバー総合フリーダイヤル
            （☎
            <a className="ml-1 underline" href="tel:0120950178">
              0120-95-0178
            </a>
            ） でも受け付けております
          </>
        }
      />
    </section>
  );
};
