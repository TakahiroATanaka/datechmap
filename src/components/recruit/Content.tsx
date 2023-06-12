import { Culture } from './content/Culture';
import { Links } from './content/Links';

export const Content = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <Links />
      <Culture />
    </div>
  );
};
