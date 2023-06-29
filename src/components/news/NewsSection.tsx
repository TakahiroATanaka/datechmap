import { SectionHeader } from '../common/SectionHeader';
import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { List } from './List';
import { News } from '@/types';

type Props = {
  news: News[];
};

export const NewsSection = (props: Props) => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader
        link={{ ariaLabel: '最新のお知らせ一覧を見る', title: '一覧を見る', path: '/news/' }}
        title="最新のお知らせ"
      />
      <List news={props.news} />

      {/* SP用 */}
      <UnstyledAnchor
        className="h-14 rounded-2xl border border-button-secondary-normal px-10 py-4 text-center text-body-lg font-medium leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover md:hidden"
        href="/news/"
      >
        最新のお知らせ一覧を見る
      </UnstyledAnchor>
    </section>
  );
};
