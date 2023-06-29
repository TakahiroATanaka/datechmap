import { SectionHeader } from '../common/SectionHeader';
import { Content } from './Content';

export const RecruitSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader
        link={{ ariaLabel: '採用情報一覧を見る', title: '一覧を見る', path: 'https://www.digital.go.jp/recruitment/' }}
        title="採用情報"
      />
      <Content />
    </section>
  );
};
