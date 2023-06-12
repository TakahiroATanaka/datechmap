import { Logo } from '../Logo';

export const Info = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-body">
      <Logo style={{ width: '131px', height: '24px' }} />
      <p className="text-body-md">（法人番号：8000012010038）</p>
      <address className="text-body-md not-italic">
        〒102-0094 東京都千代田区紀尾井町1-3 東京ガーデンテラス紀尾井町 19階、20階
      </address>
      <p className="text-body-md">© Digital Agency, Government of Japan</p>
    </div>
  );
};
