import { Card } from './Card';
import { prefix } from '@/utils';

export const List = () => {
  return (
    <div className="grid grid-cols-1 content-stretch gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        desc="マイナンバー制度・マイナンバーカードのご質問・ご不安にお答えします。"
        imageUrl={`${prefix()}/activities/myna.png`}
        path="#"
        title="マイナンバーカード"
      />
      <Card
        desc="データに基づいたオープンな政策立案・実施を目指す取り組みの一環として実施しています。"
        imageUrl={`${prefix()}/activities/dashboard.png`}
        path="#"
        title="政策データダッシュボード"
      />
      <Card
        desc="マイナンバーカードなしで、様々なサービスの利用や申し込みができるようになります。"
        imageUrl={`${prefix()}/activities/sp-jpki.png`}
        path="#"
        title="スマホ用電子証明書搭載サービス"
      />
      <Card
        desc="既存のサイト設計や表現を見直した、実証中のウェブサイトです。ぜひご体験ください。"
        imageUrl={`${prefix()}/activities/myna-alpha.png`}
        path="#"
        title="マイナポータル実証アルファ版"
      />
    </div>
  );
};
