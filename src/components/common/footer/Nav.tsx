import { Anchor } from '../../ui/Anchor';

export const Nav = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-8 text-body xl:flex-row">
        <li>
          <Anchor href="/site-policy/" unstyle={true}>
            サイトポリシー
          </Anchor>
        </li>
        <li>
          <Anchor href="/privacy-policy/" unstyle={true}>
            プライバシーポリシー
          </Anchor>
        </li>
        <li>
          <Anchor href="/accessibility-statement/" unstyle={true}>
            ウェブアクセシビリティ
          </Anchor>
        </li>
        <li>
          <Anchor href="/copyright-policy/" unstyle={true}>
            コピーライト
          </Anchor>
        </li>
        <li className={`after:pointer-events-none after:whitespace-pre xl:after:ml-8 xl:after:content-["|"]`}>
          <Anchor href="/sitemap/" unstyle={true}>
            サイトマップ
          </Anchor>
        </li>
        <li>
          <Anchor href="/social-media-policy/" unstyle={true}>
            SNS
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
