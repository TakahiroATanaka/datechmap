import { Card } from './Card';
import { prefix } from '@/utils';

export const SubList = () => {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      <Card
        image={{
          path: `${prefix()}/topics/kouzatenken.png`, // png
          width: 352,
          height: 256,
        }}
        path={'https://www.digital.go.jp/news/a5e407c6-4505-44e8-86a9-447da533bb5f/'}
        title={'国民の皆様に安心していただけるよう公金受取口座の総点検を実施してまいります'}
      />

      <Card
        image={{
          path: `${prefix()}/topics/my-number-card-info.png`, // png
          width: 352,
          height: 256,
        }}
        path={'https://www.digital.go.jp/policies/mynumber/faq-insurance-card/'}
        title={'マイナンバーカードの保健証情報の誤りに関する問合せ先についてQAに追加しました'}
      />

      <Card
        image={{
          path: `${prefix()}/topics/tousai.png`, // png
          width: 352,
          height: 256,
        }}
        path={'https://www.digital.go.jp/policies/mynumber/smartphone-certification/'}
        title={'スマホ用電子証明書搭載サービスを開始します'}
      />
    </div>
  );
};
