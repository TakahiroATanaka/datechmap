import { Card } from './Card';
import { prefix } from '@/utils';

export const SubList = () => {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        desc={
          '安心して公金受取口座の登録を行っていただき、迅速かつ確実な給付が実現できるよう、信頼の確保に引き続き取り組んでまいります。'
        }
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/news/a5e407c6-4505-44e8-86a9-447da533bb5f/'}
      />

      <Card
        desc={'マイナンバーカードの保険証情報の誤りに関する問合せ先についてQAに追加しました。'}
        imageUrl={`${prefix()}/topics/002.png`}
        path={'/policies/mynumber/faq-insurance-card/'}
      />

      <Card
        desc={'令和5年6月16日の河野デジタル大臣の記者会見動画をご覧いただけます。'}
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/speech/minister-230616-01/'}
      />
    </div>
  );
};
