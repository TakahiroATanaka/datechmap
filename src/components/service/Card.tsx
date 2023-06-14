import { Anchor } from '../ui/Anchor';
import { ExternalLinkIcon } from '../ui/icons/ExternalLinkIcon';

type Props = {
  url: string;
  imageUrl: string;
  title: string;
  alt: string;
};

export const Card = (props: Props) => {
  return (
    <Anchor
      className="flex flex-col justify-between overflow-hidden rounded-3xl border border-divider"
      href={props.url}
      target="_blank"
      unstyle={true}
    >
      <img alt={props.alt} className="h-auto w-full object-cover" src={props.imageUrl} />
      <div className="flex items-center justify-between bg-sumi-100 px-6 py-4">
        <h3 className="line-clamp-1 text-service-card-title text-body">{props.title}</h3>
        <ExternalLinkIcon className="min-w-[14px]" />
      </div>
    </Anchor>
  );
};
