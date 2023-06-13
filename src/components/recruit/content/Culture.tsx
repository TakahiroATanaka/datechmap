import { Anchor } from '@/components/ui/Anchor';
import { P } from '@/components/ui/P';
import { ExternalLinkIcon } from '@/components/ui/icons/ExternalLinkIcon';

export const Culture = () => {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-web-sm">デジタル庁のカルチャー</h3>

      <div className="flex flex-col gap-4">
        <img alt="" className="h-auto w-full rounded-3xl" src="/experimental/recruit-culture-image.png" />

        <P className="font-medium leading-8">
          デジタル庁ではnoteを活用して、政策や組織文化、職員紹介など各種情報発信を行っています。当庁の業務に興味がある方は、是非、以下のリンクよりご覧ください。
        </P>

        <P className="hidden place-self-end md:block">
          <Anchor href="https://digital-gov.note.jp/" target="_blank">
            noteの記事を見る <ExternalLinkIcon className="mx-1 mb-1 inline" />
          </Anchor>
        </P>

        {/* SP用 */}
        <Anchor
          className="rounded-2xl border border-button-secondary-normal px-10 py-4 text-center text-body-lg font-medium leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover md:hidden"
          href="https://digital-gov.note.jp/"
          target="_blank"
          unstyle={true}
        >
          noteの記事を見る <ExternalLinkIcon className="mx-1 inline pb-1" />
        </Anchor>
      </div>
    </section>
  );
};
