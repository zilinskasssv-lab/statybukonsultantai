import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/statybu-konsultavimo-paslaugos-', destination: '/statybu-konsultavimo-paslaugos', permanent: true },
      { source: '/paslaugos', destination: '/statybu-konsultavimo-paslaugos', permanent: true },
      { source: '/statybines-medziagos', destination: '/statybu-konsultavimo-paslaugos', permanent: true },
      { source: '/about', destination: '/apie', permanent: true },
      { source: '/contacts', destination: '/#kontaktai', permanent: true },
      { source: '/kontaktai', destination: '/#kontaktai', permanent: true },
      { source: '/projects', destination: '/#projektai', permanent: true },
      { source: '/projektai', destination: '/#projektai', permanent: true },
      { source: '/blog-list', destination: '/straipsniai', permanent: true },
      { source: '/blog-post', destination: '/straipsniai', permanent: true },
      { source: '/blog-post1', destination: '/straipsniai', permanent: true },
      { source: '/blog-post2', destination: '/straipsniai', permanent: true },
      { source: '/blog-post3', destination: '/straipsniai', permanent: true },
      { source: '/karjera', destination: '/apie', permanent: true },
      { source: '/karjera---statybos-vadovas', destination: '/straipsniai/statinio-statybos-vadovas-pareigos', permanent: true },
    ];
  },
};

export default nextConfig;