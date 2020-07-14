import React from 'react';
import Head from 'next/head';

const Seo = ({meta}) => {
  return (
    <Head>
      <link rel="shortcut icon" href="./favicon.ico" />
      <link rel="apple-touch-icon" href="./favicon.ico" />
      <link rel="canonical" href="https://i9corporation.com.br/" />
      <link rel='shortlink' href='https://i9corporation.com.br/' />

      <title> {meta.seo_title} - i9 Corporation</title>

      <meta charSet="UTF-8" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={meta.seo_description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@site" />
      <meta name="twitter:creator" content="" />

      <meta property="og:url" content="https://i9corporation.com.br/" />
      <meta property="og:title" content={`${meta.seo_title} - i9 Corporation`} />
      <meta property="og:description" content={`${meta.seo_description}`} />
      <meta property="og:image" content={meta.image}    />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="i9 Corporation" />
    </Head>
  )
}


export default Seo;


