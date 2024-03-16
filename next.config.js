/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'profile.pirko.site',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
