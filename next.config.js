// const isProd = process.env.NEXT_PUBLIC_ENV === 'prod';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  // compiler: {
  //   emotion: true,
  //   // removeConsole: isProd,
  // },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: false,
  skipWaiting: false,
  // disable: !isProd,
  dynamicStartUrlRedirect: true,
});

module.exports = withPWA(nextConfig);

// module.exports = withSentryConfig(
//   module.exports,
//   { silent: true },
//   { hideSourcemaps: true },
// );
