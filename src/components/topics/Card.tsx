import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import Image from 'next/image';

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
      <Image
        alt=""
        className="w-full rounded-3xl object-cover"
        decoding="auto"
        height={props.image.height}
        loading="eager"
        src={props.image.path}
        width={props.image.width}
      />
      <h3 className="text-pc-r">{props.title}</h3>
    </UnstyledAnchor>
  );
};
