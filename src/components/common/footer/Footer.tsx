import { Logo } from '../Logo';
import { Info } from './Info';
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <footer className="w-full px-6">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="col-span-full mx-auto flex flex-col justify-between gap-4 text-center md:col-span-3 md:mx-0 md:text-left">
            <Logo className="mx-auto md:mx-0" style={{ width: '131px', height: '24px' }} />

            <address className="text-pc-s not-italic text-description">
              〒102-0094 東京都千代田区紀尾井町1-3 東京ガーデンテラス紀尾井町 20階
            </address>

            <p className="text-pc-s text-description">法人番号: 8000012010038</p>
          </div>
          <Nav />
          <Info />
        </div>
      </div>
    </footer>
  );
};
