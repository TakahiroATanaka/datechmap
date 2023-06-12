import { Anchor } from '../ui/Anchor';
import { P } from '../ui/P';

type Props = {
  title: string;
  desc: string;
  path: string;
  imageUrl: string;
};

/*
export const Card = (props: Props) => {
  return (
    <Anchor
      className="flex flex-col gap-4 rounded-3xl border border-divider transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
      href={props.path}
      unstyle={true}
    >
      <img alt="" className="aspect-16/10 rounded-2xl bg-wood-50 object-cover" src={props.imageUrl} />

      <div className="px-4 pb-4">
        <h3 className="font-bold text-body">{props.title}</h3>
        <P>{props.desc}</P>
      </div>
    </Anchor>
  );
};
*/

export const Card = (props: Props) => {
  return (
    <Anchor
      className="flex flex-col content-between justify-between gap-6 rounded-2xl border border-divider p-6 transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
      href={props.path}
      unstyle={true}
    >
      <p className="line-clamp-4 text-card-title text-body">{props.title}</p>
      <P className="line-clamp-4">{props.desc}</P>
    </Anchor>
  );
};
