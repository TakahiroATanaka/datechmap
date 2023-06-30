import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { ReactNode } from 'react';

type Props = {
  title: string | ReactNode;
  publishedAt: string;
  url: string;
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor
      className="flex flex-col gap-4 border-2 border-sumi-900 px-8 py-6 outline-offset-2 outline-border-focused focus:outline focus:outline-2"
      href={props.url}
    >
      <p className="text-pc-r">{props.title}</p>
      <time
        className="text-pc-s text-description"
        dateTime={props.publishedAt.replace(/(年|月)/g, '-').replace('日', '')}
      >
        {props.publishedAt}
      </time>
    </UnstyledAnchor>
  );
};
