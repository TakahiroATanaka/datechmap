import { UnstyledAnchor } from '../ui/UnstyledAnchor';

type Props = {
  path: string;
  imageUrl: string;
  desc: string;
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor className="flex flex-col gap-4 rounded-3xl !outline-offset-[16px]" href={props.path}>
      <img alt="" className="aspect-16/9 w-full rounded-3xl object-cover" src={props.imageUrl} />
      <h3 className="text-topics-card-title text-body">{props.desc}</h3>
    </UnstyledAnchor>
  );
};
