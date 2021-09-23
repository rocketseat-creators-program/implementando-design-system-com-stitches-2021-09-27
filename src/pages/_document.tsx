/* eslint-disable react/no-danger */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@/styles';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />

          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
