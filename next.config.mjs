/** @type {import('next').NextConfig} */
const nextConfig = {
  // the old Projects page is now Updates
  async redirects() {
    return [{ source: '/projects', destination: '/updates', permanent: true }];
  },
};

export default nextConfig;
