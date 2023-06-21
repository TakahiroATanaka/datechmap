import { UnstyledAnchor } from '@/components/ui/UnstyledAnchor';
import { prefix } from '@/utils';

export const Culture = () => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-pc-m">デジタル庁の職員/チーム紹介</h3>

      <div className="flex flex-col gap-4">
        <UnstyledAnchor
          className="flex flex-col gap-4 rounded-3xl !outline-offset-[12px]"
          href={'https://digital-gov.note.jp/'}
          target="_blank"
        >
          <img alt="" className="object-cover" src={`${prefix()}/recruit-culture-image.png`} />
          <h4 className="text-pc-r">{'デジタル庁ではnoteを活用して、働く職員を紹介しています'}</h4>
        </UnstyledAnchor>
      </div>
    </section>
  );
};
