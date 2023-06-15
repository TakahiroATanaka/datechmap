import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';

export const Nav = () => {
  return (
    <nav className="col-span-full md:col-span-6 md:col-start-1">
      <ul className="grid grid-cols-1 gap-8 text-center text-body md:grid-cols-2 md:text-start">
        <li>
          <UnstyledAnchor href="/site-policy/">サイトポリシー</UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor href="/copyright-policy/">コピーライトポリシー</UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor href="/privacy-policy/">プライバシーポリシー</UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor href="/sitemap/">サイトマップ</UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor href="/accessibility-statement/">ウェブアクセシビリティ</UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor href="/contact/">ご意見・ご要望</UnstyledAnchor>
        </li>
      </ul>
    </nav>
  );
};
