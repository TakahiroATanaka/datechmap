import { Anchor } from '../../ui/Anchor';

export const Nav = () => {
  return (
    <nav className="col-span-full md:col-span-6 md:col-start-1">
      <ul className="grid grid-cols-1 gap-8 text-center text-body md:grid-cols-2 md:text-start">
        <li>
          <Anchor href="/site-policy/" unstyle={true}>
            サイトポリシー
          </Anchor>
        </li>
        <li>
          <Anchor href="/copyright-policy/" unstyle={true}>
            コピーライトポリシー
          </Anchor>
        </li>
        <li>
          <Anchor href="/privacy-policy/" unstyle={true}>
            プライバシーポリシー
          </Anchor>
        </li>
        <li>
          <Anchor href="/sitemap/" unstyle={true}>
            サイトマップ
          </Anchor>
        </li>
        <li>
          <Anchor href="/accessibility-statement/" unstyle={true}>
            ウェブアクセシビリティ
          </Anchor>
        </li>
        <li>
          <Anchor href="/contact/" unstyle={true}>
            ご意見・ご要望
          </Anchor>
        </li>
      </ul>
    </nav>
  );
};
