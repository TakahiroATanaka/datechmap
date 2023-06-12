import { SectionHeader } from '../common/SectionHeader';
import { Content } from './Content';

export const RecruitSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader link={{ title: '一覧を見る', path: '/recruitment/' }} title="採用情報" />
      <Content />
    </section>
  );
};
