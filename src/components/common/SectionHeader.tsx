import { UnstyledAnchor } from '../ui/UnstyledAnchor';

type Props = {
  title: string;
  link?: {
    title: string;
    ariaLabel: string;
    path: string;
  };
};

export const SectionHeader = (props: Props) => {
  return (
    <header className="flex items-center gap-4">
      <h2 className="text-pc-xl">{props.title}</h2>
      {props.link && (
        <UnstyledAnchor
          aria-label={props.link.ariaLabel}
          className="hidden h-8 rounded-md border border-button-secondary-normal px-3 py-1 text-pc-s text-button-secondary-normal hover:bg-button-secondary-hover focus:border-transparent md:block"
          href={props.link.path}
        >
          {props.link.title}
        </UnstyledAnchor>
      )}
    </header>
  );
};
