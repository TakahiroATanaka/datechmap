import { Info } from './Info';
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-16 px-6 desktop:px-0">
      <Nav />
      <Info />
    </footer>
  );
};
