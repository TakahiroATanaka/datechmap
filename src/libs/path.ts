import getConfig from 'next/config';
import { defaultUrlTransform } from 'react-markdown';

export const urlTransform = (url: string) => {
  return canonicalPath(defaultUrlTransform(url));
};

export const canonicalPath = (path: string) => {
  const { publicRuntimeConfig } = getConfig();
  const basePath = (publicRuntimeConfig && publicRuntimeConfig.basePath) || '';

  if (path.match(/^[a-z]+:\/\//)) {
    return path;
  }
  if (path.match(/^\/experimental\//)) {
    return path;
  }

  return `${basePath}${path}`;
};
