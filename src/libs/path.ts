import getConfig from 'next/config';

export const canonicalPath = (path: string) => {
  const { publicRuntimeConfig } = getConfig();
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || '';

  if (path.match(/^[a-z]+:\/\//)) {
    return path;
  }

  return `${basePath}${path}`;
};
