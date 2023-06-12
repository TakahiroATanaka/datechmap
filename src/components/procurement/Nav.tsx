import { Anchor } from '../ui/Anchor';
import { P } from '../ui/P';
import { ExternalLinkIcon } from '../ui/icons/ExternalLinkIcon';

export const Nav = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
        <Anchor
          className="rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover"
          href="/procurement/"
          unstyle={true}
        >
          入札公告等
        </Anchor>
        <Anchor
          className="rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover"
          href="/procurement/"
          unstyle={true}
        >
          企画競争
        </Anchor>
        <Anchor
          className="rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover"
          href="/procurement/"
          unstyle={true}
        >
          公募
        </Anchor>
        <Anchor
          className="rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover"
          href="/procurement/"
          unstyle={true}
        >
          意見招請
        </Anchor>
      </div>

      <P>
        最新の情報は、
        <Anchor
          className="underline"
          href="https://www.p-portal.go.jp/pps-web-biz/UAA01/OAA0101"
          target="_blank"
          unstyle={true}
        >
          調達ポータル 調達情報の検索 <ExternalLinkIcon className="mx-1 inline pb-1" />
        </Anchor>
        より「調達案件番号」で検索してご確認ください。
      </P>
    </div>
  );
};
