import { Card } from './Card';
import { News } from '@/types';

type Props = {
  news: News[];
};

export const List = (props: Props) => {
  return (
    <div className="grid auto-rows-fr grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {props.news.map((news) => {
        return (
          <Card category={news.category} key={news.title} path={news.path} publishedAt={news.date} title={news.title} />
        );
      })}
    </div>
  );
};
