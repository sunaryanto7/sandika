import Document, { Html, Head, Main, NextScript } from 'next/document';

class SandikaDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => {
      return originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component
      });
    };

    const initialProps = await Document.getInitialProps(ctx);
    const { query } = ctx;
    const lang = query.lang === 'en' ? 'en' : 'id';

    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;

    return (
      <Html lang={lang}>
        <Head>
          <meta name="theme-color" content={'#cd134b'} />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" type="image/png" href="/media/pwa/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/media/pwa/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/media/pwa/android-192x192.png" sizes="150x150" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default SandikaDocument;
