import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { formatDate } from '@/utils';
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
      <time className="text-pc-s text-description" dateTime={formatDate(props.publishedAt)}>
        {props.publishedAt}
      </time>
    </UnstyledAnchor>
  );
};
