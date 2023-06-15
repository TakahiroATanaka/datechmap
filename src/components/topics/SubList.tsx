import { Card } from './Card';
import { prefix } from '@/utils';

export const SubList = () => {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        desc={
          '安心して公金受取口座の登録を行っていただき、迅速かつ確実な給付が実現できるよう、信頼の確保に引き続き取り組んでまいります。'
        }
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/#'}
      />

      <Card
        desc={'マイナンバー制度・マイナンバーカードのご質問・ご不安にお答えします'}
        imageUrl={`${prefix()}/topics/002.png`}
        path={'/#'}
      />

      <Card
        desc={'令和5年6月13日の大臣等会見の動画をご覧いただけます。'}
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/#'}
      />
    </div>
  );
};
