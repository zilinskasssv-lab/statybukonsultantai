import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/statybu-konsultavimo-paslaugos', destination: '/#paslaugos', permanent: true },
      { source: '/statybu-konsultavimo-paslaugos-', destination: '/#paslaugos', permanent: true },
      { source: '/pastatu-technine-prieziura', destination: '/#paslaugos', permanent: true },
      { source: '/paslaugos', destination: '/#paslaugos', permanent: true },
      { source: '/statybines-medziagos', destination: '/#paslaugos', permanent: true },
      { source: '/about', destination: '/apie', permanent: true },
      { source: '/contacts', destination: '/#kontaktai', permanent: true },
      { source: '/kontaktai', destination: '/#kontaktai', permanent: true },
      { source: '/projects', destination: '/#projektai', permanent: true },
      { source: '/projektai', destination: '/#projektai', permanent: true },
      { source: '/straipsniai', destination: '/', permanent: false },
      { source: '/blog-list', destination: '/', permanent: false },
      { source: '/blog-post', destination: '/', permanent: false },
      { source: '/blog-post1', destination: '/', permanent: false },
      { source: '/blog-post2', destination: '/', permanent: false },
      { source: '/blog-post3', destination: '/', permanent: false },
      { source: '/straipsniai/:slug', destination: '/', permanent: false },
      { source: '/karjera', destination: '/apie', permanent: true },
      { source: '/karjera---statybos-vadovas', destination: '/apie', permanent: true },
      { source: '/grazinimo-politika', destination: '/', permanent: false },
      { source: '/privatumo-politika', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;