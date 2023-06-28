import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { ExternalLinkIcon } from '../ui/icons/ExternalLinkIcon';
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
      <img alt={props.alt} className="object-cover" loading="lazy" src={props.imageUrl} />
      <h3 className="text-pc-r">
        {props.title} <ExternalLinkIcon className="mb-1 ml-1 inline" />
      </h3>
    </UnstyledAnchor>
  );
};
