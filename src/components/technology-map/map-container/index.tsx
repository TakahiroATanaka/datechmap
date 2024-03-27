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
        テクノロジーマップは、デジタル庁が整備・公表する、デジタル技術の進展等を踏まえた自律的・継続的な規制の見直しを支援するためのツールです。アナログ規制の見直しに活用しうる技術を把握できるよう、規制を類型化し、規制の類型と技術の対応関係を整理したテクノロジーマップを提供しています。規制の判断・対応内容（例：適格性判断）に着目したパターン1、規制に基づき実施する業務内容（例：点検業務）に着目したパターン2の2種類を用意しています。
      </p>
      <p>テクノロジーマップをご覧いただく場合は、以下のURLをクリックして下さい。ウェブページが起動します。</p>
      <ul>
        <li>
          <Anchor href={canonicalPath('/technology-map/map-data?pattern=1')} target="_blank">
            テクノロジーマップ パターン１（規制の判断・対応内容に着目）
          </Anchor>
        </li>
        <li>
          <Anchor href={canonicalPath('/technology-map/map-data?pattern=2')} target="_blank">
            テクノロジーマップ パターン2（規制に基づき実施する業務内容に着目）
          </Anchor>
        </li>
      </ul>
    </section>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
            categories={technologyMapCategories === undefined ? [] : technologyMapCategories}
            data={technologyMap3 === undefined ? [] : technologyMap3}
            id={'3'}
          />
        </li>
      </ul>
      <ul>
        <li>
          テクノロジーマップ パターン2 概要版（規制に基づき実施する業務内容に着目）
          <br />
          <TechnologyMap
            categories={technologyMapCategories === undefined ? [] : technologyMapCategories}
            data={technologyMap4 === undefined ? [] : technologyMap4}
            id={'4'}
          />
        </li>
      </ul>
    </>
  );
};
