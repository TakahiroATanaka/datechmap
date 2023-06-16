import { ReactNode } from 'react';

type Props = {
  title: string | ReactNode;
  publishedAt: string;
};

export const Card = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 border-2 border-sumi-900 px-8 py-6">
      <p className="text-body-lg text-body">{props.title}</p>
      <time
        className="text-card-datetime text-sumi-600"
        dateTime={props.publishedAt.replace(/(年|月)/g, '-').replace('日', '')}
      >
        {props.publishedAt}
      </time>
    </div>
  );
};
