import { ActivitySection } from '@/components/activity/ActivitySection';
import { AttentionSection } from '@/components/attention/AttentionSection';
import { BaseLayout } from '@/components/common/BaseLayout';
import { NewsSection } from '@/components/news/NewsSection';
import { ProcurementSection } from '@/components/procurement/ProcurementSection';
import { RecruitSection } from '@/components/recruit/RecruitSection';
import { ServiceSection } from '@/components/service/ServiceSection';
import { TopicsSection } from '@/components/topics/TopicsSection';
import { fetchNews, fetchProcurements } from '@/libs/digital-go-jp-fetcher';
import { News, Procurement } from '@/types';

type Props = {
  news: News[];
  procurements: Procurement[];
};

const Page = (props: Props) => {
  return (
    <BaseLayout>
      <main className="col-span-full flex flex-col gap-22" id="main">
        <AttentionSection />
        <TopicsSection />
        <NewsSection news={props.news} />
        <RecruitSection />
        <ServiceSection />
        <ProcurementSection procurements={props.procurements} />
        <ActivitySection />
      </main>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  const news = (await fetchNews()).news;
  const procurements = (await fetchProcurements()).procurements;

  return {
    props: {
      news,
      procurements,
    },
  };
}

export default Page;
