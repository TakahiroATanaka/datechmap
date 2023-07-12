import { LinkButton } from '../common/LinkButton';
import { SectionHeader } from '../common/SectionHeader';
import { List } from './List';

export const ServiceSection = () => {
  return (
    <section className="flex flex-col gap-12">
      <SectionHeader
        link={{ ariaLabel: 'サービス一覧を見る', title: '一覧を見る', path: '/services/' }}
        title="サービス"
      />
      <List />

      <LinkButton className="md:hidden" path="/services/">
        サービス一覧を見る
      </LinkButton>
    </section>
  );
};
