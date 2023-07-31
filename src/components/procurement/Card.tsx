import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { formatDate } from '@/utils';

type Props = {
  path: string;
  category: string;
  title: string;
  publishedAt: string;
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor
      className="flex flex-col content-between justify-between gap-6 rounded-2xl border border-divider p-6 hover:bg-sumi-50 active:bg-sumi-50"
      href={props.path}
    >
      <h3 className="text-pc-r">{props.title}</h3>

      <div className="flex justify-between">
        <span className="text-pc-s">{props.category}</span>
        <time className="text-pc-s text-description" dateTime={formatDate(props.publishedAt)}>
          {props.publishedAt}
        </time>
      </div>
    </UnstyledAnchor>
  );
};
