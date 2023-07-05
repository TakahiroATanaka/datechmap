import { UnstyledAnchor } from '../ui/UnstyledAnchor';
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
          className="flex w-full flex-col gap-10 bg-primary/80 px-8 pb-28 pt-8 backdrop-blur-[20px] md:pb-8"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-12 md:mx-auto md:flex-row md:gap-24">
            <ul className="flex flex-col gap-4">
              <li className="text-label-lg text-placeholder">利用者別</li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/individual/" id="menu-first-item">
                  一般
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/business/">
                  行政・事業者
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/press/">
                  報道関係者
                </UnstyledAnchor>
              </li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li className="text-label-lg text-placeholder">総合メニュー</li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/news/">
                  新着・更新情報
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/services/">
                  サービス
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/policies/">
                  政策
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/recruitment/">
                  採用
                </UnstyledAnchor>
              </li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/about/">
                  組織情報
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/councils/">
                  会議等
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/laws/">
                  法令
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/resources/">
                  資料
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link  hover:underline" href="/applications/">
                  申請・届出
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/procurement/">
                  調達情報
                </UnstyledAnchor>
              </li>
            </ul>

            <ul className="flex flex-col gap-4">
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/en/">
                  Global Site
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/site-policy/">
                  サイトポリシー
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/privacy-policy/">
                  プライバシーポリシー
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/accessibility-statement/">
                  ウェブアクセシビリティ
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/copyright-policy/">
                  コピーライトポリシー
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/social-media-policy/">
                  SNS
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/contact/">
                  ご意見・ご要望
                </UnstyledAnchor>
              </li>
              <li>
                <UnstyledAnchor className="text-menu-link hover:underline" href="/sitemap/" id="menu-last-item">
                  サイトマップ
                </UnstyledAnchor>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
