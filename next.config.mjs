/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
          {
            source: '/chatbot-api/:path*',
            destination: 'https://gmmedia.vocalls.ai/chatbot/api/v1/:path*',
          },
        ];
      },
};


export default nextConfig;
