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
      <h2 className="text-web-md">{props.title}</h2>
      {props.link && (
        <UnstyledAnchor
          aria-label={props.link.ariaLabel}
          className="hidden rounded-md border border-button-secondary-normal px-3 py-2 text-button-secondary-normal text-link transition-all duration-200 hover:bg-button-secondary-hover md:block"
          href={props.link.path}
        >
          {props.link.title}
        </UnstyledAnchor>
      )}
    </header>
  );
};
