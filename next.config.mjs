/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['https://image.tmdb.org'],
    },
};

export default nextConfig;
