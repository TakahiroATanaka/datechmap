import { TopArrowIcon } from '../ui/icons/TopArrowIcon';

export const ToTopButton = () => {
  return (
    <a
      aria-label="ページ上部に戻る"
      className="flex h-14 w-14 items-center justify-center rounded-full border border-button-secondary-normal bg-white p-4 outline-offset-2 outline-border-focused transition-all duration-200 hover:bg-button-secondary-hover focus:outline focus:outline-2"
      href="#top"
    >
      <TopArrowIcon />
    </a>
  );
};
