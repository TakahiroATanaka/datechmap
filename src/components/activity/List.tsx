import { Card } from './Card';
import { prefix } from '@/utils';

export const List = () => {
  return (
    <div className="grid grid-cols-1 content-stretch gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        desc="マイナンバーカードなしで、スマートフォンだけで、様々なサービスの利用や申し込みができるようになります。"
        imageUrl={`${prefix()}/activities/tousai.png`}
        path="/policies/mynumber/smartphone-certification"
        title="スマホ用電子証明書搭載サービスを開始します"
      />
      <Card
        desc="マイナポータル実証ベータ版をリリースしました。スマートフォンにてぜひご体験ください。"
        imageUrl={`${prefix()}/activities/myna.jpg`}
        path="/policies/myna_portal/validation/"
        title="新しいマイナポータルを体験できます"
      />
    </div>
  );
};
