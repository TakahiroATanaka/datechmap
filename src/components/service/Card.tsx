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
      <img
        alt={''}
        className="w-full rounded-3xl bg-white object-cover"
        height={256}
        loading="lazy"
        src={props.imageUrl}
        width={352}
      />
      <h3 className="text-pc-r">
        {props.title} <ExternalLinkIcon className="mb-1 ml-1 inline" />
      </h3>
    </UnstyledAnchor>
  );
};
