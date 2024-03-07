import getConfig from 'next/config';

export const canonicalPath = (path: string) => {
  const { publicRuntimeConfig } = getConfig();
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || '';

  return `${basePath}${path}`;
};
