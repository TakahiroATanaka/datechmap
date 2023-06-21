import { Logo } from '../Logo';
import { Info } from './Info';
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <footer className="w-full px-6">
      <div className="mx-auto max-w-container">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <div className="col-span-full mx-auto  md:col-span-3 md:mx-0">
            <Logo style={{ width: '131px', height: '24px' }} />
          </div>
          <Nav />
          <Info />
        </div>
      </div>
    </footer>
  );
};
