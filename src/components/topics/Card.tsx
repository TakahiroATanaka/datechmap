import { Anchor } from '../ui/Anchor';

type Props = {
  path: string;
  imageUrl: string;
  desc: string;
};

export const Card = (props: Props) => {
  return (
    <Anchor className="group flex flex-col gap-2 rounded-3xl" href={props.path} unstyle={true}>
      <div className="p-0 pb-4 transition-all duration-200 group-focus:p-4">
        <img alt="" className="aspect-16/9 w-full rounded-3xl object-cover" src={props.imageUrl} />
        <h3 className="text-topics-card-title text-body">{props.desc}</h3>
      </div>
    </Anchor>
  );
};
