const NextI18Next = require('next-i18next').default;
const path = require('path')

module.exports = new NextI18Next({
    defaultLanguage: 'id',
    otherLanguages: ['en'],
    defaultNS: 'core',
    localeSubpaths: {
        id: 'id',
        en: 'en'
    },
    localePath: path.resolve('./public/locales/')
})