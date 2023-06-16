import { Logo } from '../Logo';

export const Info = () => {
  return (
    <div className="col-span-full flex flex-col items-center gap-2 text-center md:col-span-6 md:col-start-7 md:items-start md:text-start">
      <Logo style={{ width: '131px', height: '24px' }} />
      <p className="text-body-md text-body">法人番号：8000012010038</p>
      <address className="text-body-md not-italic text-body">
        〒102-0094 東京都千代田区紀尾井町1-3 東京ガーデンテラス紀尾井町 19階、20階
      </address>
      <p className="text-body-md text-body">© Digital Agency, Government of Japan</p>
    </div>
  );
};
