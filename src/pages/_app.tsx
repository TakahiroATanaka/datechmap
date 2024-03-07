import { MenuContext } from '@/features/context';
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
  const [isOpen, setIsOpen] = useState(false);
  const [shouldFocusVisible, setShouldFocusVisible] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(0);

  return (
    <>
      <Head>
        <title>デジタル庁 | 試行版</title>
        <meta charSet="utf-8" />
        <meta content="デジタル庁" name="author" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="デジタル庁トップページの実証版です。" name="description" />
        <link href="/themes/custom/gov_theme_da/favicon.ico" rel="icon" type="image/png" />
        {ogp(
          'デジタル庁｜テクノロジーマップ試行版',
          'デジタル庁テクノロジーマップの試行版です。',
          'httos://www/digital/go.jp/experimental/technology-map',
          'https://www.digital.go.jp/assets/images/ogp.png',
          'website',
        )}
      </Head>
      <Script
        dangerouslySetInnerHTML={{
          __html: `var _uic = _uic ||{}; var _uih = _uih ||{};_uih['id'] = ${
            process.env.NEXT_PUBLIC_ENV === 'prod' ? 55860 : 55874
          };
            _uih['lg_id'] = '';
            _uih['fb_id'] = '';
            _uih['tw_id'] = '';
            _uih['uigr_1'] = ''; _uih['uigr_2'] = ''; _uih['uigr_3'] = ''; _uih['uigr_4'] = ''; _uih['uigr_5'] = '';
            _uih['uigr_6'] = ''; _uih['uigr_7'] = ''; _uih['uigr_8'] = ''; _uih['uigr_9'] = ''; _uih['uigr_10'] = '';
            _uic['uls'] = 1;
            _uic['security_type'] = -1;

            (function() {
            var bi = document.createElement('script');bi.type = 'text/javascript'; bi.async = true;
            bi.src = '//cs.nakanohito.jp/b3/bi.js';
            var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(bi, s);
            })();`,
        }}
        id="user-insight"
      />

      <MenuContext.Provider
        value={{ isOpen, setIsOpen, shouldFocusVisible, setShouldFocusVisible, scrollYPosition, setScrollYPosition }}
      >
        <Component {...pageProps} />
      </MenuContext.Provider>
    </>
  );
}
