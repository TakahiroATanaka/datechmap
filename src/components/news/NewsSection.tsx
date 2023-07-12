import { LinkButton } from '../common/LinkButton';
import { SectionHeader } from '../common/SectionHeader';
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

      <LinkButton className="md:hidden" path="/news/">
        最新のお知らせ一覧を見る
      </LinkButton>
    </section>
  );
};
