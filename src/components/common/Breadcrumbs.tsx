import { ReactNode } from 'react';

export const breadcrumbsItemStyle = `text-pc-r-link text-link underline hover:bg-blue-50 hover:rounded-[4px] active:text-blue-1200 focus:outline-2 focus:outline-focused text-pc-s`;

export type BreadcrumbsProps = {
  items: ReactNode[];
  ariaLabel?: string;
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  return (
    <section className="flex flex-col gap-12">
      <nav aria-label={`${props.ariaLabel ?? 'パンくずリスト'}`} className="">
        <ol className="rounded-full bg-neutral-100 px-4 py-2">
          {props.items.map((item, index) => {
            if (props.items.length - 1 !== index) {
              return (
                <li className="inline break-all" key={`breadcrumbs-item-${index}`}>
                  {item}
                  <svg
                    aria-hidden={true}
                    className="mx-2 inline"
                    fill="none"
                    height="12"
                    viewBox="0 0 12 12"
                    width="12"
                  >
                    <path
                      d="M4.50078 1.2998L3.80078 1.9998L7.80078 5.9998L3.80078 9.9998L4.50078 10.6998L9.20078 5.9998L4.50078 1.2998Z"
                      fill="#1A1A1C"
                    />
                  </svg>
                </li>
              );
            } else {
              return (
                <li aria-current="page" className={`inline break-all text-pc-s`} key={`breadcrumbs-item-${index}`}>
                  {item}
                </li>
              );
            }
          })}
        </ol>
      </nav>
    </section>
  );
};
