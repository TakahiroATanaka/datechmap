import { LinkButton } from '../common/LinkButton';
import { SectionHeader } from '../common/SectionHeader';
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

      <LinkButton className="md:hidden" path="/procurement/">
        調達情報一覧を見る
      </LinkButton>
    </section>
  );
};
