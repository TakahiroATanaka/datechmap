import { UnstyledAnchor } from '../ui/UnstyledAnchor';

type Props = {
  title: string;
  desc: string;
  path: string;
  imageUrl: string;
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor className="flex flex-col gap-4 rounded-3xl !outline-offset-[12px]" href={props.path}>
      <img alt="" className="min-h-[160px] rounded-3xl bg-wood-50 object-cover" src={props.imageUrl} />
      <div className="">
        <h3 className="text-body-lg font-extrabold leading-xl text-body">{props.title}</h3>
        <p className="text-body-lg leading-xl text-body">{props.desc}</p>
      </div>
    </UnstyledAnchor>
  );
};
