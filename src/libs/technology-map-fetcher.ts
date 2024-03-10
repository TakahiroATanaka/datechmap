import type {
  TechnologyMapDataProps,
  TechnologyMapRelationsProps,
  TechnologyMapCategoriesProps,
  TechnologyMapNewsProps,
  TechnologyMapOffersProps,
  TechnologyMapProductProps,
} from '@/libs/technology-map';

export const technologyMapNewsFetcher = async (endpoint: string): Promise<TechnologyMapNewsProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapNewsProps;
};

export const technologyMapDataFetcher = async (endpoint: string): Promise<TechnologyMapDataProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapDataProps;
};

export const technologyMapCategoriesFetcher = async (endpoint: string): Promise<TechnologyMapCategoriesProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapCategoriesProps;
};

export const technologyMapOffersFetcher = async (endpoint: string): Promise<TechnologyMapOffersProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapOffersProps;
};

export const technologyMapRelationsFetcher = async (endpoint: string): Promise<TechnologyMapRelationsProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapRelationsProps;
};

export const technologyMapProductFetcher = async (endpoint: string): Promise<TechnologyMapProductProps> => {
  const response = await fetch(endpoint);
  return (await response.json()) as TechnologyMapProductProps;
};
