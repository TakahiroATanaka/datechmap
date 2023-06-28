import { UnstyledAnchor } from '../ui/UnstyledAnchor';

type Props = {
  path: string;
  title: string;
  image: {
    path: string;
    width: number;
    height: number;
  };
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor className="flex flex-col gap-4 rounded-3xl !outline-offset-[12px]" href={props.path}>
      <img
        alt=""
        className="w-full rounded-3xl object-cover"
        height={props.image.height}
        src={props.image.path}
        width={props.image.width}
      />
      <h3 className="text-pc-r">{props.title}</h3>
    </UnstyledAnchor>
  );
};
