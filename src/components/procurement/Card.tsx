import { UnstyledAnchor } from '../ui/UnstyledAnchor';

type Props = {
  path: string;
  category: string;
  title: string;
  publishedAt: string;
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor
      className="flex flex-col content-between justify-between gap-6 rounded-2xl border border-divider p-6 transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
      href={props.path}
    >
      <p className="line-clamp-4 text-card-title text-body">{props.title}</p>

      <div className="flex justify-between">
        <span className="text-card-category text-body">{props.category}</span>
        <time
          className="text-card-datetime text-sumi-600"
          dateTime={props.publishedAt.replace(/(年|月)/g, '-').replace('日', '')}
        >
          {props.publishedAt}
        </time>
      </div>
    </UnstyledAnchor>
  );
};
