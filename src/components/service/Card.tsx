import { Anchor } from '../ui/Anchor';

type Props = {
  url: string;
  imageUrl: string;
  alt: string;
};

export const Card = (props: Props) => {
  const { url, imageUrl, alt } = props;

  return (
    <Anchor
      className="flex items-center rounded-2xl border border-divider transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
      href={url}
      target="_blank"
    >
      <img alt={alt} className="h-auto w-full p-4" src={imageUrl} />
    </Anchor>
  );
};
