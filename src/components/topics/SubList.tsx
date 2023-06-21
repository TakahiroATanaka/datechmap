import { Card } from './Card';
import { prefix } from '@/utils';

export const SubList = () => {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/news/a5e407c6-4505-44e8-86a9-447da533bb5f/'}
        title={'国民の皆様に安心していただけるよう公金受取口座の総点検を実施してまいります'}
      />

      <Card
        imageUrl={`${prefix()}/topics/002.png`}
        path={'/policies/mynumber/faq-insurance-card/'}
        title={'マイナンバーカードの保険証情報の誤りに関する問合せ先についてQAに追加しました'}
      />

      <Card
        imageUrl={`${prefix()}/topics/001.png`}
        path={'/speech/minister-230616-01/'}
        title={'令和5年6月xx日の河野デジタル大臣の記者会見動画を公開しました'}
      />
    </div>
  );
};
