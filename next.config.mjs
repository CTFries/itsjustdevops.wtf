// File: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://plausible.io; connect-src 'self' https://plausible.io; img-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
