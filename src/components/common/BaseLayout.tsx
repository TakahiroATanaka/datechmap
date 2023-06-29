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
    <div className={`${notoSansJp.variable} bg-primary ${isOpen ? 'h-screen overflow-y-scroll' : ''}`} id="top">
      <a className="sr-only" href="#main">
        本文へ移動
      </a>

      {!isOpen && <Header />}

      {isOpen && <Menu />}

      <div className={`mb-36 w-full px-6 ${isOpen ? 'mt-[112px]' : 'mt-14'}`}>
        <div className={`mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-12`}>{children}</div>
      </div>

      <Footer />

      <Gradient />
    </div>
  );
};
