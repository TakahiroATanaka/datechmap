import { SectionHeader } from '../common/SectionHeader';
import { UnstyledAnchor } from '../ui/UnstyledAnchor';
import { List } from './List';
import { Nav } from './Nav';
import { Procurement } from '@/types';

type Props = {
  procurements: Procurement[];
};

export const ProcurementSection = (props: Props) => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader
        link={{ ariaLabel: '調達情報一覧を見る', title: '一覧を見る', path: '/procurement/' }}
        title="調達情報"
      />
      <Nav />
      <List procurements={props.procurements} />

      {/* SP用 */}
      <UnstyledAnchor
        className="rounded-2xl border border-button-secondary-normal px-10 py-4 text-center text-body-lg font-medium leading-[22px] text-button-secondary-normal transition-all duration-200 hover:bg-button-secondary-hover md:hidden"
        href="/procurement/"
      >
        調達情報一覧を見る
      </UnstyledAnchor>
    </section>
  );
};
