import { Anchor } from '../../ui/Anchor';
import { Logo } from '../Logo';
import { Nav } from './Nav';

export const Header = () => {
  return (
    <header className={`sticky top-0 z-50 w-full bg-white md:relative`}>
      <div className={`mx-auto flex w-full max-w-8xl items-center justify-between bg-white p-4 xl:px-10`}>
        <h1 className="flex items-center">
          <Anchor href="/experimental/" unstyle={true}>
            <Logo className="h-[18px] w-[98.36px] xl:h-[24px] xl:w-[131px]" />
            <span className="sr-only">デジタル庁</span>
          </Anchor>
        </h1>
        <Nav />
      </div>
    </header>
  );
};
