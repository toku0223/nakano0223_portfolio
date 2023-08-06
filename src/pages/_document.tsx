import { CssBaseline } from '@nextui-org/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';


class MyDocument extends Document {
  static async getInitialProps(ctx:any) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>{CssBaseline.flush()}
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css"
        /></Head>
        <body>
          <Main />
          <NextScript />
          <Script src="https://unpkg.com/flowbite@1.5.3/dist/flowbite.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;