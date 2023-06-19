import { Info } from './Info';
import { Nav } from './Nav';

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          <Nav />
          <Info />
        </div>
      </div>
    </footer>
  );
};
