import { Anchor } from '@/components/ui/Anchor';
import { nl2br } from '@/libs/nl2br';
import { canonicalPath } from '@/libs/path';
import {
  parseData,
  parseCategories,
  TechnologyMapDataProps,
  TechnologyMapCategoriesProps,
} from '@/libs/technology-map';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

type TechnologyMapProps = {
  data: TechnologyMapDataProps;
  categories: TechnologyMapCategoriesProps;
  id: string;
};

const ElementLink: React.FC<{ value: string; link?: string; categoryId?: number; className?: string }> = (props) => {
  if (props.link == '' || props.link === undefined) {
    return <span className={props.className}>{props.value}</span>;
  }

  return (
    <>
      <Anchor href={canonicalPath(props.link)} className={props.className}>
        {props.value}
      </Anchor>
    </>
  );
};

export const TechnologyMap: React.FC<TechnologyMapProps> = (props) => {
  if (props.data.length <= 0 || props.categories.length <= 0) {
    return <></>;
  }
  const { categories, categoriesByDescription } = parseCategories(props.categories);
  const table = parseData(props.data, categoriesByDescription, props.id);
  if (table === null) {
    return <></>;
  }

  // merge yHeader to data
  const data = [];
  for (let i = 0; i < table.body.length; i++) {
    data.push(table.yHeader[i].concat(table.body[i]));
  }

  return (
    <>
      <style>{`
        /* chrome */
        _:lang(x)::-internal-media-controls-overlay-cast-button,
        .vertical-element {
          writing-mode: vertical-rl;
        }

        /* edge */
        _:lang(x)::-ms-,
        .vertical-element {
          writing-mode: vertical-rl;
        }

        /* firefox */
        _:lang(x)::-moz-placeholder,
        .vertical-element {
          writing-mode: vertical-rl;
        }

        /* safari */
        _::-webkit-full-page-media,
        _:future,
        :root .vertical-element {
          writing-mode: horizontal-tb;
        }
      `}</style>
      <table className="border-separate border-spacing-1 bg-sumi-50 text-dns-14N-2">
        <tbody>
          <tr>
            <td colSpan={table.yHeaderLength} rowSpan={table.xHeaderLength}></td>

            {table.xHeader[0].map((element, i) => {
              return (
                <td
                  colSpan={element.colspan}
                  rowSpan={element.rowspan}
                  key={i}
                  className="border bg-blue-900 text-center font-bold text-white"
                >
                  <span
                    data-tooltip-html={nl2br(element.categoryDescription ?? '')}
                    data-tooltip-id={'tooltip-' + element.categoryId}
                  >
                    <ElementLink
                      value={element.value}
                      link={element.link}
                      categoryId={element.categoryId}
                      className="text-white"
                    />
                  </span>
                </td>
              );
            })}
          </tr>

          {table.xHeader.slice(1).map((row, i) => {
            let linkClassName = '';
            return (
              <tr key={i}>
                {row.map((element, j) => {
                  let className = 'border text-center font-bold ';
                  if (element.level === 1) {
                    className += 'bg-blue-800 text-white';
                    linkClassName = 'text-white';
                  }
                  if (element.level === 2) {
                    className += 'bg-blue-700 text-white';
                    linkClassName = 'text-white';
                  }
                  if (element.level === 3) {
                    className += 'bg-blue-100';
                  }
                  return (
                    <td colSpan={element.colspan} rowSpan={element.rowspan} key={j} className={className}>
                      <span
                        data-tooltip-html={nl2br(element.categoryDescription ?? '')}
                        data-tooltip-id={'tooltip-' + element.categoryId}
                      >
                        <ElementLink
                          value={element.value}
                          link={element.link}
                          categoryId={element.categoryId}
                          className={linkClassName}
                        />
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}

          {data.map((row, i) => {
            return (
              <tr key={i}>
                {row.map((element, j) => {
                  let className = element.value === '' ? '' : 'border text-center ';
                  let linkClassName = '';
                  if (element.type === 'data') {
                    className += element.value === '' ? 'bg-sumi-50' : 'vertical-element bg-white';
                    linkClassName = 'no-underline';
                  }
                  if (element.type === 'yheader') {
                    className += 'font-bold ';
                    if (element.level === 0) {
                      className += 'bg-green-1000 text-white vertical-element';
                      linkClassName = 'text-white';
                    }
                    if (element.level === 1) {
                      className += 'bg-green-950 text-white';
                      linkClassName = 'text-white';
                    }
                    if (element.level === 2) {
                      className += 'bg-green-900 text-white';
                      linkClassName = 'text-white';
                    }
                    if (element.level === 3) {
                      if (element.value === '') {
                        className += 'bg-green-800 text-white';
                        linkClassName = 'text-white';
                      }
                      className += 'bg-green-800';
                      linkClassName = 'text-white';
                    }
                    if (element.level === 4) {
                      className += 'bg-green-100';
                    }
                  }
                  return (
                    <td colSpan={element.colspan} rowSpan={element.rowspan} key={j} className={className}>
                      <span
                        data-tooltip-html={nl2br(element.categoryDescription ?? '')}
                        data-tooltip-id={'tooltip-' + element.categoryId}
                      >
                        <ElementLink
                          value={element.value}
                          link={element.link}
                          categoryId={element.categoryId}
                          className={linkClassName}
                        />
                      </span>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      {table.xHeader.map((row, i) => {
        return row.map((element, j) => {
          return (
            <Tooltip
              key={element.categoryId}
              id={'tooltip-' + element.categoryId}
              style={{ backgroundColor: 'rgb(0, 255, 30)', color: '#222' }}
            />
          );
        });
      })}

      {data.map((row, i) => {
        return row.map((element, j) => {
          return (
            <Tooltip
              key={element.categoryId}
              id={'tooltip-' + element.categoryId}
              style={{ backgroundColor: '#e5e5e5', color: '#0f0f0f' }}
            />
          );
        });
      })}
    </>
  );
};
