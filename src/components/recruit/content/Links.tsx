import { Anchor } from '@/components/ui/Anchor';

export const Links = () => {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col gap-4">
        <h3 className="text-web-xs text-body">業務説明会・イベント</h3>
        <Anchor
          className="rounded-2xl border border-divider px-6 py-4 text-button leading-[22px] text-body transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/recruiting-session/"
          unstyle={true}
        >
          人事院主催 本府省合同業務説明会
        </Anchor>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-web-xs text-body">新卒採用</h3>
        <Anchor
          className="rounded-2xl border border-divider px-6 py-4 text-button leading-[22px] text-body transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/newgraduates/"
          unstyle={true}
        >
          国家公務員採用試験
        </Anchor>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-web-xs text-body">中途採用</h3>
        <Anchor
          className="rounded-2xl border border-divider px-6 py-4 text-button leading-[22px] text-body transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/career/"
          unstyle={true}
        >
          中途採用
        </Anchor>
        <Anchor
          className="rounded-2xl border border-divider px-6 py-4 text-button leading-[22px] text-body transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/career-government-official/"
          unstyle={true}
        >
          国家公務員採用試験
        </Anchor>
        <Anchor
          className="rounded-2xl border border-divider px-6 py-4 text-button leading-[22px] text-body transition-all duration-200 hover:bg-sumi-50 active:bg-sumi-50"
          href="/recruitment/career-selection-chief/"
          unstyle={true}
        >
          選考採用試験（一般職係長級）
        </Anchor>
      </section>

      {/* SP用 */}
      <Anchor
        className="rounded-2xl border border-button-secondary-normal px-10 py-4 text-center text-button leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover md:hidden"
        href="/recruitment/"
        unstyle={true}
      >
        採用情報の一覧を見る
      </Anchor>
    </div>
  );
};
