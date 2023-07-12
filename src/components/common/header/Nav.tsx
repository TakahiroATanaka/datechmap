import { Button } from '../../ui/Button';
import { HamburgerMenuIcon } from '../../ui/icons/HamburgerMenuIcon';
import { SearchIcon } from '../../ui/icons/SearchIcon';
import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';
import { CrossIcon } from '@/components/ui/icons/CrossIcon';
import { MenuContext } from '@/features/context';
import { useContext, useEffect } from 'react';

export const Nav = () => {
  const { isOpen, setIsOpen, setShouldFocusVisible, scrollYPosition, setScrollYPosition } = useContext(MenuContext);

  useEffect(() => {
    if (!isOpen) {
      window.scrollTo({ top: scrollYPosition, left: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <nav className="flex w-full items-center justify-end gap-6">
      <ul className="hidden items-center gap-3 lg:flex">
        <li>
          <UnstyledAnchor
            className="rounded-full bg-wood-50 px-4 py-1 text-pc-nav-current hover:underline"
            href="/experimental/"
          >
            ホーム
          </UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor className="px-4 text-pc-nav-default hover:underline" href="/individual/">
            一般の方
          </UnstyledAnchor>
        </li>
        <li>
          <UnstyledAnchor className="px-4 text-pc-nav-default hover:underline" href="/business/">
            行政・事業者の方
          </UnstyledAnchor>
        </li>
        <li className={`xl:after:ml-6 xl:after:content-["|"]`}>
          <UnstyledAnchor className="px-4 text-pc-nav-default hover:underline" href="https://www.digital.go.jp/press/">
            報道関係者の方
          </UnstyledAnchor>
        </li>
      </ul>

      <ul className="flex items-center gap-2 text-label-lg md:gap-3">
        <li>
          <UnstyledAnchor
            className="flex items-center gap-2 px-2 text-pc-nav-default hover:underline md:px-4"
            href="/search/"
          >
            <SearchIcon />
            検索
          </UnstyledAnchor>
        </li>
        <li className="hidden lg:list-item">
          <UnstyledAnchor className="flex items-center gap-2 px-4 py-1 text-pc-nav-default hover:underline" href="/en/">
            Global Site
          </UnstyledAnchor>
        </li>
        <li>
          <Button
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            className="flex items-center gap-2 px-2 text-pc-nav-default hover:underline md:px-4"
            id="btn-menu"
            onClick={(e) => {
              if (!isOpen) {
                setScrollYPosition(window.scrollY);
              }
              setShouldFocusVisible(e.detail === 0);
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <div className="flex h-6 w-6 items-center">
                <CrossIcon />
              </div>
            ) : (
              <HamburgerMenuIcon />
            )}{' '}
            メニュー
          </Button>
        </li>
      </ul>
    </nav>
  );
};
