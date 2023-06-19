import { Card } from './Card';
import { prefix } from '@/utils';

export const MainList = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
      <Card
        desc={
          '2023年6月9日「デジタル社会の実現に向けた重点計画」が閣議決定されました。閣議決定された重点計画の資料をご覧ください。'
        }
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/policies/priority-policy-program/'}
      />

      <Card
        desc={'6月8日（木）から12日（月）まで実施されたマイナポータルハッカソンの実施レポートを紹介します。'}
        imageUrl={`${prefix()}/topics/002.png`}
        path={'/#'}
      />
    </div>
  );
};
