import { canonicalPath, urlTransform } from '@/libs/path';
import { technologyMapNewsFetcher } from '@/libs/technology-map-fetcher';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useSWR from 'swr';

export const TechnologyMapNews: React.FC = () => {
  const { data: technologyMapNews } = useSWR(canonicalPath(`/data/technology-map-news.json`), technologyMapNewsFetcher);
  if (technologyMapNews === undefined) {
    return <></>;
  }

  const news = technologyMapNews[0][0];

  return (
    <section className="flex flex-col gap-4">
      <h2>お知らせ</h2>

      <ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={urlTransform}>
        {news}
      </ReactMarkdown>
    </section>
  );
};
