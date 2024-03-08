import { canonicalPath } from '@/libs/path';
import { TechnologyMapNewsProps } from '@/libs/technology-map';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useSWR from 'swr';

const fetcher = async (endpoint: string): Promise<TechnologyMapNewsProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapNewsProps;
};

export const TechnologyMapNews: React.FC = () => {
  const { data: technologyMapNews } = useSWR(canonicalPath(`/data/technology-map-news.json`), fetcher);
  if (technologyMapNews === undefined) {
    return <></>;
  }

  const news = technologyMapNews[0][0];

  return (
    <section className="flex flex-col gap-4">
      <h2>お知らせ</h2>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>{news}</ReactMarkdown>
    </section>
  );
};
