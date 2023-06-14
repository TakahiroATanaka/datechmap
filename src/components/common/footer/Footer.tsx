import { Info } from './Info';
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <footer className="mx-auto grid w-full max-w-container grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-8">
      <Nav />
      <Info />
    </footer>
  );
};
