import { Info } from './Info';
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <div className="w-full px-6">
      <footer className="mx-auto grid w-full max-w-container grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
        <Nav />
        <Info />
      </footer>
    </div>
  );
};
