import { SectionHeader } from '../common/SectionHeader';
import { List } from './List';

export const ActivitySection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader title="活動・取組" />
      <List />
    </section>
  );
};
