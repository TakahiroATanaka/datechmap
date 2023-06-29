import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';

export const Nav = () => {
  return (
    <nav className="col-span-full md:col-span-6 md:col-start-4">
      <ul className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 md:text-start">
        <li>
          <UnstyledAnchor
            className="text-pc-s-link underline hover:bg-secondary"
            href="https://www.digital.go.jp/site-policy/"
          >
            サイトポリシー
          </UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor
            className="text-pc-s-link underline hover:bg-secondary"
            href="https://www.digital.go.jp/copyright-policy/"
          >
            コピーライトポリシー
          </UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor
            className="text-pc-s-link underline hover:bg-secondary"
            href="https://www.digital.go.jp/privacy-policy/"
          >
            プライバシーポリシー
          </UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor
            className="text-pc-s-link underline hover:bg-secondary"
            href="https://www.digital.go.jp/sitemap/"
          >
            サイトマップ
          </UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor
            className="text-pc-s-link underline hover:bg-secondary"
            href="https://www.digital.go.jp/accessibility-statement/"
          >
            ウェブアクセシビリティ
          </UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor
            className="text-pc-s-link underline hover:bg-secondary"
            href="https://www.digital.go.jp/contact/"
          >
            ご意見・ご要望
          </UnstyledAnchor>
        </li>
      </ul>
    </nav>
  );
};
