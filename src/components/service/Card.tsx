import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { ReactNode } from 'react';

type Props = {
  url: string;
  imageUrl: string;
  title: ReactNode;
  alt: string;
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor className="flex flex-col gap-4 rounded-3xl !outline-offset-[12px]" href={props.url} target="_blank">
      <img alt={props.alt} className="w-full rounded-3xl object-cover" src={props.imageUrl} />
      <h3 className="text-topics-card-title text-body">{props.title}</h3>
    </UnstyledAnchor>
  );
};
