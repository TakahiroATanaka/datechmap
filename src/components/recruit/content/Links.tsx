import { LinkButton as CommonLinkButton } from '../../common/LinkButton';
import { LinkButton } from '../LinkButton';

export const Links = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">業務説明会・イベント</h3>
        <ul>
          <li>
            <LinkButton className="inline-block w-full" path="/recruitment/recruiting-session/">
              開催情報
            </LinkButton>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">新卒採用</h3>
        <ul>
          <li>
            <LinkButton className="inline-block w-full" path="/recruitment/newgraduates/">
              国家公務員採用試験
            </LinkButton>
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">中途採用</h3>
        <ul className="flex flex-col gap-4">
          <li>
            <LinkButton className="inline-block w-full" path="/recruitment/career/">
              中途採用
            </LinkButton>
          </li>
          <li>
            <LinkButton className="inline-block w-full" path="/recruitment/career-government-official/">
              国家公務員採用試験
            </LinkButton>
          </li>
          <li>
            <LinkButton className="inline-block w-full" path="/recruitment/career-selection-chief/">
              選考採用試験（一般職係長級）
            </LinkButton>
          </li>
        </ul>
      </section>

      <CommonLinkButton className="md:hidden" path="/recruitment/">
        採用情報の一覧を見る
      </CommonLinkButton>
    </div>
  );
};
