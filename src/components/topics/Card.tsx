import { Anchor } from '../ui/Anchor';

type Props = {
  path: string;
  imageUrl: string;
  desc: string;
};

export const Card = (props: Props) => {
  return (
    <Anchor className="group flex flex-col gap-4 rounded-3xl !outline-offset-8" href={props.path} unstyle={true}>
      <img alt="" className="aspect-16/9 w-full rounded-3xl object-cover" src={props.imageUrl} />
      <h3 className="text-topics-card-title text-body">{props.desc}</h3>
    </Anchor>
  );
};
