import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';

export const Links = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">業務説明会・イベント</h3>
        <UnstyledAnchor
          className="rounded-2xl border border-divider px-6 py-4 text-pc-r leading-[22px] transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/recruiting-session/"
        >
          人事院主催 本府省合同業務説明会
        </UnstyledAnchor>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">新卒採用</h3>
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-divider px-6 py-4 text-pc-r leading-[22px] transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/newgraduates/"
        >
          国家公務員採用試験
        </UnstyledAnchor>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-pc-m">中途採用</h3>
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-divider px-6 py-4 text-pc-r leading-[22px] transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/career/"
        >
          中途採用
        </UnstyledAnchor>
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-divider px-6 py-4 text-pc-r leading-[22px] transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/career-government-official/"
        >
          国家公務員採用試験
        </UnstyledAnchor>
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-divider px-6 py-4 text-pc-r leading-[22px] transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/career-selection-chief/"
        >
          選考採用試験（一般職係長級）
        </UnstyledAnchor>
      </section>

      {/* SP用 */}
      <UnstyledAnchor
        className="h-14 rounded-2xl border border-button-secondary-normal px-10 py-4 text-center text-button leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover md:hidden"
        href="/recruitment/"
      >
        採用情報の一覧を見る
      </UnstyledAnchor>
    </div>
  );
};
