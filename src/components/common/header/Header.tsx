import { Logo } from '../Logo';
import { Nav } from './Nav';
import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';

export const Header = () => {
  return (
    <header className={`sticky top-0 z-50 w-full bg-white md:relative`}>
      <div className={`mx-auto flex max-w-8xl items-center justify-between p-4 xl:px-10`}>
        <h1 className="flex items-center">
          <UnstyledAnchor href="/experimental/">
            <Logo className="h-[20px] w-[109.15px]" />
            <span className="sr-only">デジタル庁</span>
          </UnstyledAnchor>
        </h1>
        <Nav />
      </div>
    </header>
  );
};
