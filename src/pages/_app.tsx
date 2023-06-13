import { MenuContext } from '@/features/context';
import { userInsightTag } from '@/libs/user-insight';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

const ogp = (title: string, desc: string, url: string, imageUrl: string, type: string) => {
  return (
    <>
      <meta content={title} property="og:title" />
      <meta content={desc} property="og:description" />
      <meta content={url} property="og:url" />
      <meta content={title} property="og:site_name" />
      <meta content={type} property="og:type" />
      <meta content={imageUrl} property="og:image" />
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>デジタル庁 | 実証版</title>
        <meta charSet="utf-8" />
        <meta content="デジタル庁" name="author" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="デジタル庁トップページの実証版です。" name="description" />
        <link href="/favicon.png" rel="icon" type="image/png" />
        {ogp(
          'デジタル庁 実証トップページ',
          'デジタル庁トップページの実証版です。',
          '/experimental/',
          '/experimental/ogp.png',
          'website',
        )}
      </Head>

      <Script dangerouslySetInnerHTML={{ __html: userInsightTag() }} id="user-insight-tag" />

      <MenuContext.Provider value={{ isOpen, setIsOpen }}>
        <Component {...pageProps} />
      </MenuContext.Provider>
    </>
  );
}
