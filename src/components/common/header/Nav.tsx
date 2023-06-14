import { Anchor } from '../../ui/Anchor';
import { Button } from '../../ui/Button';
import { HamburgerMenuIcon } from '../../ui/icons/HamburgerMenuIcon';
import { SearchIcon } from '../../ui/icons/SearchIcon';
import { CrossIcon } from '@/components/ui/icons/CrossIcon';
import { MenuContext } from '@/features/context';
import { useContext } from 'react';

export const Nav = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <nav className="flex w-full items-center justify-end gap-6 text-body">
      <ul className="hidden items-center gap-3 text-label-lg lg:flex">
        <li>
          <Anchor
            className="rounded-full bg-wood-50 px-[10px] py-1 !font-extrabold"
            href="/experimental/"
            unstyle={true}
          >
            ホーム
          </Anchor>
        </li>
        <li>
          <Anchor className="px-[10px] py-1" href="/individual/" unstyle={true}>
            一般
          </Anchor>
        </li>
        <li>
          <Anchor className="px-[10px] py-1" href="/business/" unstyle={true}>
            行政・事業者
          </Anchor>
        </li>
        <li className={`xl:after:ml-6 xl:after:content-["|"]`}>
          <Anchor className="px-[10px] py-1" href="/press/" unstyle={true}>
            報道関係者
          </Anchor>
        </li>
      </ul>

      <ul className="flex items-center gap-2 text-label-lg md:gap-3">
        <li>
          <Anchor className="flex items-center gap-2 px-[10px] py-1" href="/search/" unstyle={true}>
            <SearchIcon />
            検索
          </Anchor>
        </li>
        <li className="hidden lg:list-item">
          <Anchor className="flex items-center gap-2 px-[10px] py-1" href="/en/" unstyle={true}>
            Global Site
          </Anchor>
        </li>
        <li>
          <Button
            aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
            className="flex items-center gap-2 px-[10px] py-1"
            id="btn-menu"
            onClick={() => setIsOpen(!isOpen)}
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
