import { Card } from './Card';
import { prefix } from '@/utils';

export const MainList = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
      <Card
        image={{
          path: `${prefix()}/topics/my-number-card.png`, // png
          width: 544,
          height: 374,
        }}
        path={'https://www.digital.go.jp/policies/mynumber/'}
        title={'マイナンバー制度・マイナンバーカードのご質問・ご不安にお答えします'}
      />

      <Card
        image={{
          path: `${prefix()}/topics/my-number-card-dashboard.jpg`, // jpg
          width: 574,
          height: 374,
        }}
        path={'https://www.digital.go.jp/resources/govdashboard/'}
        title={'政策に関するデータを一元的に表示した「政策データダッシュボード（ベータ版）」を公開しています'}
      />
    </div>
  );
};
