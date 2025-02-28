import { Logo } from '../Logo';
import { Nav } from './Nav';
import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';

export const Header = () => {
  return (
    <header className={`bg-primary sticky top-0 z-50 w-full sm:relative md:relative lg:relative`}>
      <div className={`mx-auto flex max-w-container items-center justify-between p-0`}>
        <h1 className="flex items-center">
          <UnstyledAnchor href="/">
            <Logo className="h-[20px] w-[109px]" />
            <span className="sr-only">デジタル庁</span>
          </UnstyledAnchor>
        </h1>
        <Nav />
      </div>
    </header>
  );
};
