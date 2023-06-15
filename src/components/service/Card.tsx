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
    <UnstyledAnchor
      className="flex flex-col justify-stretch overflow-hidden rounded-3xl border border-divider"
      href={props.url}
      target="_blank"
    >
      <img alt={props.alt} className="h-auto w-full object-cover" src={props.imageUrl} />
      <div className="flex h-full items-center justify-between bg-sumi-100 px-6 py-4">
        <h3 className="text-service-card-title text-body">{props.title}</h3>
        <ExternalLinkIcon className="min-w-[14px]" />
      </div>
    </UnstyledAnchor>
  );
};
