import { SectionHeader } from '../common/SectionHeader';
import { Anchor } from '../ui/Anchor';
import { List } from './List';

export const ServiceSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader
        link={{ ariaLabel: 'サービス一覧を見る', title: '一覧を見る', path: '/service/' }}
        title="サービス"
      />
      <List />

      {/* SP用 */}
      <Anchor
        className="rounded-2xl border border-button-secondary-normal px-10 py-4 text-center text-body-lg font-medium leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover md:hidden"
        href="/service/"
        unstyle={true}
      >
        サービス一覧を見る
      </Anchor>
    </section>
  );
};
