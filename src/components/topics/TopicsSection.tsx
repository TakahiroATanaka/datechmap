import { SectionHeader } from '../common/SectionHeader';
import { MainList } from './MainList';
import { SubList } from './SubList';

export const TopicsSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader title="トピックス" />
      <MainList />
      <SubList />
    </section>
  );
};
