import { TechnologyMap } from '@/components/technology-map/map';
import { Anchor } from '@/components/ui/Anchor';
import { canonicalPath } from '@/libs/path';
import { technologyMapDataFetcher, technologyMapCategoriesFetcher } from '@/libs/technology-map-fetcher';
import useSWR from 'swr';

export const TechnologyMapContainer: React.FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <h2>テクノロジーマップ</h2>
      <p>
        規制の見直しに活用しうる技術を把握できるよう、規制を類型化し、規制の類型と技術の対応関係を整理したテクノロジーマップを提供しています。規制の判断・対応内容（例：適格性判断）に着目したパターン1、規制に基づき実施する業務内容（例：点検業務）に着目したパターン2の2種類を用意しています。
      </p>
      <p>テクノロジーマップをご覧いただく場合は、以下の画像をクリックして下さい。</p>
      <ul>
        <li>
          テクノロジーマップ パターン1（規制の判断・対応内容に着目）
          <br />
          <Anchor href={canonicalPath('/technology-map/map-data?pattern=1')}>
            <img src={canonicalPath('/technology-map/technology-map-1.png')} />
          </Anchor>
        </li>
      </ul>
      <ul>
        <li>
          テクノロジーマップ パターン2（規制に基づき実施する業務内容に着目）
          <br />
          <Anchor href={canonicalPath('/technology-map/map-data?pattern=2')}>
            <img src={canonicalPath('/technology-map/technology-map-2.png')} />
          </Anchor>
        </li>
      </ul>
      <p>
        横軸は、データをどのように取得し（Input）、取得データをどのように解析・判断し（Process）、どのように対応するのか（Output）、データフローに沿ったIPO（Input-Process-Output）モデルに基づき整理しています（2パターン共通）。
      </p>
      <p>
        縦軸は、規制の目的を達成するために必要な機能に基づき整理しています。
        規制の判断・対応内容（例：適格性判断）に着目したパターン1、規制に基づき実施する業務内容（例：点検業務）に着目したパターン2の2種類で整理しています。目的やご関心の規制の内容に応じて使い分けていただくことができます。
      </p>
    </section>
  );
};

const TechnologyMapSummary: React.FC = () => {
  const { data: technologyMap3 } = useSWR(canonicalPath(`/data/technology-map-3.json`), technologyMapDataFetcher);
  const { data: technologyMap4 } = useSWR(canonicalPath(`/data/technology-map-4.json`), technologyMapDataFetcher);
  const { data: technologyMapCategories } = useSWR(
    canonicalPath(`/data/technology-map-categories.json`),
    technologyMapCategoriesFetcher,
  );

  return (
    <>
      <h3>テクノロジーマップ概要版</h3>
      <ul>
        <li>
          テクノロジーマップ パターン1 概要版（規制の判断・対応内容に着目）
          <br />
          <TechnologyMap
            data={technologyMap3 === undefined ? [] : technologyMap3}
            categories={technologyMapCategories === undefined ? [] : technologyMapCategories}
            id={'3'}
          />
        </li>
      </ul>
      <ul>
        <li>
          テクノロジーマップ パターン2 概要版（規制に基づき実施する業務内容に着目）
          <br />
          <TechnologyMap
            data={technologyMap4 === undefined ? [] : technologyMap4}
            categories={technologyMapCategories === undefined ? [] : technologyMapCategories}
            id={'4'}
          />
        </li>
      </ul>
    </>
  );
};
