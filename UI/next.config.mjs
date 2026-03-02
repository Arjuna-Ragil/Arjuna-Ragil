/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        const beUrl = process.env.BE_URL ? (process.env.BE_URL.startsWith('http') ? process.env.BE_URL : `http://${process.env.BE_URL}`) : 'http://localhost:8080';
        const aiUrl = process.env.AI_URL ? (process.env.AI_URL.startsWith('http') ? process.env.AI_URL : `http://${process.env.AI_URL}`) : 'http://localhost:8081';

        return [
            {
                source: '/api/v1/chat',
                destination: `${aiUrl}/api/v1/chat`,
            },
            {
                source: '/api/v1/:path*',
                destination: `${beUrl}/api/v1/:path*`,
            },
        ];
    },
};

export default nextConfig;
