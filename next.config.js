/** @type {import('next').NextConfig} */

const { withKeystone } = require('@keystone-6/core/next');

module.exports = withKeystone({
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'es-CO', 'zh-TW'],
    defaultLocale: 'en-US',
  },
});
