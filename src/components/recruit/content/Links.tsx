import { LinkButton } from '../LinkButton';
import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';

export const Links = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">業務説明会・イベント</h3>
        <LinkButton path="/recruitment/recruiting-session/">開催情報</LinkButton>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">新卒採用</h3>
        <LinkButton path="/recruitment/newgraduates/">国家公務員採用試験</LinkButton>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">中途採用</h3>
        <LinkButton path="/recruitment/career/">中途採用</LinkButton>
        <LinkButton path="/recruitment/career-government-official/">国家公務員採用試験</LinkButton>
        <LinkButton path="/recruitment/career-selection-chief/">選考採用試験（一般職係長級）</LinkButton>
      </section>

      {/* SP用 */}
      <UnstyledAnchor
        className="h-14 rounded-2xl border border-button-secondary-normal px-10 py-4 text-center text-button leading-[22px] text-button-secondary-normal hover:bg-button-secondary-hover md:hidden"
        href="/recruitment/"
      >
        採用情報の一覧を見る
      </UnstyledAnchor>
    </div>
  );
};
