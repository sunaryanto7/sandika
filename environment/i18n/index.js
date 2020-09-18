const NextI18Next = require('next-i18next').default;
const path = require('path');

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'id',
  otherLanguages: ['en'],
  defaultNS: 'core',
  fallbackLng: 'id',
  detection: {
    lookupCookie: 'next-i18next',
    order: ['querystring', 'cookie', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie']
  },
  localePath: path.resolve('./public/locales/'),
  browserLanguageDetection: true,
  serverLanguageDetection: false
});

module.exports = NextI18NextInstance;
