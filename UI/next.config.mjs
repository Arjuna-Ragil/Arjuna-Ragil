/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        const beUrl = process.env.BE_URL || 'http://PortoBE:8080';
        const aiUrl = process.env.AI_URL || 'http://ai_service:8081';

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
