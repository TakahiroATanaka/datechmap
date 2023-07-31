import { LinkButton } from '../common/LinkButton';
import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { ExternalLinkIcon } from '../ui/icons/ExternalLinkIcon';

export const Nav = () => {
  return (
    <div className="flex flex-col gap-12">
      <ul className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        <li>
          <LinkButton className="inline-block w-full" path="/procurement/#public_notice">
            入札公告等
          </LinkButton>
        </li>
        <li>
          <LinkButton className="inline-block w-full" path="/procurement/#proposal">
            企画競争情報
          </LinkButton>
        </li>
        <li>
          <LinkButton className="inline-block w-full" path="/procurement/#public_tender">
            公募情報
          </LinkButton>
        </li>
        <li>
          <LinkButton className="inline-block w-full" path="/procurement/#rfc_answer">
            意見招請情報
          </LinkButton>
        </li>
      </ul>

      <p className="text-pc-r">
        最新の情報は、
        <UnstyledAnchor
          className="text-pc-r-link text-link underline"
          href="https://www.p-portal.go.jp/pps-web-biz/UAA01/OAA0101"
          target="_blank"
        >
          調達ポータル 調達情報の検索 <ExternalLinkIcon className="mx-1 mb-1 inline" />
        </UnstyledAnchor>
        よりご確認ください。
      </p>
    </div>
  );
};
