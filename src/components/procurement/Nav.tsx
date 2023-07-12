import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { ExternalLinkIcon } from '../ui/icons/ExternalLinkIcon';

export const Nav = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button text-button-secondary-normal hover:bg-button-secondary-hover"
          href="/procurement/#public_notice"
        >
          入札公告等
        </UnstyledAnchor>
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button text-button-secondary-normal hover:bg-button-secondary-hover"
          href="/procurement/#proposal"
        >
          企画競争情報
        </UnstyledAnchor>
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button text-button-secondary-normal hover:bg-button-secondary-hover"
          href="/procurement/#public_tender"
        >
          公募情報
        </UnstyledAnchor>
        <UnstyledAnchor
          className="h-14 rounded-2xl border border-button-secondary-normal px-6 py-4 text-center text-button text-button-secondary-normal hover:bg-button-secondary-hover"
          href="/procurement/#rfc_answer"
        >
          意見招請情報
        </UnstyledAnchor>
      </div>

      <p className="text-pc-r">
        最新の情報は、
        <UnstyledAnchor
          className="text-pc-r-link text-link underline"
          href="https://www.p-portal.go.jp/pps-web-biz/UAA01/OAA0101"
          target="_blank"
        >
          調達ポータル 調達情報の検索 <ExternalLinkIcon className="mx-1 mb-1 inline" />
        </UnstyledAnchor>
        より「調達案件番号」で検索してご確認ください。
      </p>
    </div>
  );
};
