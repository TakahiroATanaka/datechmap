'use client';

import { Gradient } from '@/components/common/Gradient';
import { Menu } from '@/components/common/Menu';
import { Footer } from '@/components/common/footer/Footer';
import { Header } from '@/components/common/header/Header';
import { AlertTos } from '@/components/technology-map/alert-tos';
import { TechnologyMap } from '@/components/technology-map/map';
import { MenuContext } from '@/features/context';
import { canonicalPath } from '@/libs/path';
import { TechnologyMapDataProps } from '@/libs/technology-map';
import { notoSansJp } from '@/styles/fonts';
import { useSearchParams } from 'next/navigation';
import { useContext } from 'react';
import useSWR from 'swr';

const fetcher = async (endpoint: string): Promise<TechnologyMapDataProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapDataProps;
};

const Page = () => {
  const pattern = parseInt(useSearchParams().get('pattern') ?? '');
  const { data: technologyMap } = useSWR(canonicalPath(`/data/technology-map-${pattern}.json`), fetcher);
  const { data: technologyMapCategories } = useSWR(canonicalPath(`/data/technology-map-categories.json`), fetcher);

  const { isOpen } = useContext(MenuContext);

  return (
    <div className={`${notoSansJp.variable} bg-primary ${isOpen ? 'h-screen overflow-y-scroll' : ''}`} id="top">
      <a className="sr-only" href="#main">
        本文へ移動
      </a>

      {!isOpen && <Header />}

      {isOpen && <Menu />}

      <div className={`mb-36 w-full px-6 ${isOpen ? 'mt-[112px]' : 'mt-14'}`}>
        <TechnologyMap
          data={technologyMap === undefined ? [] : technologyMap}
          categories={technologyMapCategories === undefined ? [] : technologyMapCategories}
        />
      </div>

      <AlertTos />

      <Footer />

      <Gradient />
    </div>
  );
};

export default Page;
