import { Card } from './Card';
import { prefix } from '@/utils';

export const MainList = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2">
      <Card
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/policies/priority-policy-program/'}
        title={'「デジタル社会の実現に向けた重点計画」が閣議決定されました'}
      />

      <Card
        imageUrl={`${prefix()}/topics/002.png`}
        path={'/#'}
        title={'マイナポータルハッカソン実施レポートを公開しました'}
      />
    </div>
  );
};
