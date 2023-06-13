import { BaseLayout } from '@/components/common/BaseLayout';
import { NewsSection } from '@/components/news/NewsSection';
import { PolicySection } from '@/components/policy/PolicySection';
import { ProcurementSection } from '@/components/procurement/ProcurementSection';
import { RecruitSection } from '@/components/recruit/RecruitSection';
import { ServiceSection } from '@/components/service/ServiceSection';
import { TopicsSection } from '@/components/topics/TopicsSection';
import { fetchNews, fetchProcurements, fetchTopics } from '@/libs/digital-go-jp-fetcher';
import { News, Procurement, Topic } from '@/types';

type Props = {
  topics: Topic[];
  news: News[];
  procurements: Procurement[];
};

const Page = (props: Props) => {
  return (
    <BaseLayout>
      <main className="grid grid-cols-1 gap-22" id="main" style={{ gridColumn: '1 / -1' }}>
        <TopicsSection />
        <NewsSection news={props.news} />
        <RecruitSection />
        <ServiceSection />
        <ProcurementSection procurements={props.procurements} />
        <PolicySection />
      </main>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const topics = (await fetchTopics()).topics;
  const news = (await fetchNews()).news;
  const procurements = (await fetchProcurements()).procurements;

  return {
    props: {
      topics,
      news,
      procurements,
    },
  };
}

export default Page;
