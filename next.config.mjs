/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    async redirects() {
        return [
            {
                source: '/old-path',
                destination: '/new-path',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
