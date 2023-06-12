import { Anchor } from '../ui/Anchor';
import { Header } from './header/Header';
import { MenuContext } from '@/features/context';
import { useContext, useEffect } from 'react';

export const Menu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  // TODO: Refactor...
  useEffect(() => {
    const onKeydown = (e: KeyboardEvent) => {
      if (e.code !== 'Tab' || !e.target) {
        return;
      }

      const id = (e.target as HTMLElement).id;

      if (e.shiftKey && id === 'btn-menu') {
        document.getElementById('menu-last-item')?.focus();
        e.preventDefault();
      } else if (!e.shiftKey && id === 'menu-last-item') {
        document.getElementById('btn-menu')?.focus();
        e.preventDefault();
      }
    };

    const onKeyup = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keyup', onKeyup);

    if (isOpen) {
      document.getElementById('menu-first-item')?.focus();
      document.addEventListener('keydown', onKeydown);
      document.addEventListener('keyup', onKeyup);
    } else {
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('keyup', onKeyup);
    }

    return () => {
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('keyup', onKeyup);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <div
        className="fixed top-0 z-50 h-full max-h-full w-full overflow-y-scroll bg-black/20"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
      >
        <Header />

        <div
          className="flex w-full flex-col gap-10 bg-white/80 px-8 pb-28 pt-8 backdrop-blur-[20px] md:pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-12 md:mx-auto md:flex-row md:gap-24">
            <ul className="flex flex-col gap-4 text-body">
              <li>
                <Anchor href="/news/" id="menu-first-item" unstyle={true}>
                  新着・更新情報
                </Anchor>
              </li>
              <li>
                <Anchor href="/services/" unstyle={true}>
                  サービス
                </Anchor>
              </li>
              <li>
                <Anchor href="/policies/" unstyle={true}>
                  政策
                </Anchor>
              </li>
              <li>
                <Anchor href="/recruitment/" unstyle={true}>
                  採用
                </Anchor>
              </li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li className="text-label-lg text-placeholder">利用者別</li>
              <li>
                <Anchor className="text-menu-link text-body" href="/individual/" unstyle={true}>
                  一般
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/business/" unstyle={true}>
                  行政・事業者
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/press/" unstyle={true}>
                  報道関係者
                </Anchor>
              </li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li className="text-label-lg text-placeholder">総合メニュー</li>
              <li>
                <Anchor className="text-menu-link text-body" href="/about/" unstyle={true}>
                  組織情報
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/councils/" unstyle={true}>
                  会議等
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/laws/" unstyle={true}>
                  法令
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/resources/" unstyle={true}>
                  資料
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/applications/" unstyle={true}>
                  申請・届出
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/procurement/" unstyle={true}>
                  調達情報
                </Anchor>
              </li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li>
                <Anchor className="text-menu-link text-body" href="/en/" unstyle={true}>
                  Global Site
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/site-policy/" unstyle={true}>
                  サイトポリシー
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/privacy-policy/" unstyle={true}>
                  プライバシーポリシー
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/accessibility-statement/" unstyle={true}>
                  ウェブアクセシビリティ
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/copyright-policy/" unstyle={true}>
                  コピーライトポリシー
                </Anchor>
              </li>
              <li>
                <Anchor className="text-menu-link text-body" href="/social-media-policy/" unstyle={true}>
                  SNS
                </Anchor>
              </li>
              <li>
                <Anchor href="/contact/" unstyle={true}>
                  ご意見・ご要望
                </Anchor>
              </li>
              <li>
                <Anchor href="/sitemap/" id="menu-last-item" unstyle={true}>
                  サイトマップ
                </Anchor>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
