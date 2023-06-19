import { ToTopButton } from './ToTopButton';
import { Gradient } from '@/components/common/Gradient';
import { Menu } from '@/components/common/Menu';
import { Footer } from '@/components/common/footer/Footer';
import { Header } from '@/components/common/header/Header';
import { MenuContext } from '@/features/context';
import { notoSansJp } from '@/styles/fonts';
import { ReactNode, useContext } from 'react';

export const BaseLayout = ({ children }: { readonly children: ReactNode }) => {
  const { isOpen } = useContext(MenuContext);

  return (
    <div className={`${notoSansJp.variable} bg-primary ${isOpen ? 'h-screen overflow-y-hidden' : ''}`} id="top">
      <a className="sr-only" href="#main">
        本文へ移動
      </a>

      {!isOpen && <Header />}

      {isOpen && <Menu />}

      <div
        className={`mx-auto mb-36 ${
          isOpen ? 'mt-[120px]' : 'mt-14'
        } grid w-full max-w-container grid-flow-row grid-cols-1 gap-8 px-6 sm:grid-cols-12`}
      >
        {children}
      </div>

      <Footer />

      <Gradient />

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10">
        <ToTopButton />
      </div>
    </div>
  );
};
