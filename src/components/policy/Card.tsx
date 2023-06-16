import { UnstyledAnchor } from '../ui/UnstyledAnchor';

type Props = {
  title: string;
  desc: string;
  path: string;
  imageUrl: string;
};

export const Card = (props: Props) => {
  return (
    <UnstyledAnchor
      className="flex flex-col content-between justify-between gap-6 rounded-2xl border border-divider p-6 transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
      href={props.path}
    >
      <p className="line-clamp-4 text-card-title">{props.title}</p>
      <p className="line-clamp-4 text-body-lg">{props.desc}</p>
    </UnstyledAnchor>
  );
};
