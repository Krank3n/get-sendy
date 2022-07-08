import '../styles/globals.scss';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { React, useMemo } from 'react';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import English from '../content/locales/en.json';
import Chinese from '../content/locales/zh.json';
import Spanish from '../content/locales/es.json';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split('-') : ['en'];

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'zh':
        return Chinese;
      case 'es':
        return Spanish;
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={() => null}
    >
      <Elements stripe={stripePromise}>
        <Component {...pageProps} />
      </Elements>
    </IntlProvider>
  );
}

export default MyApp;
