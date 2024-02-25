/** @type {import('next').NextConfig} */
const nextConfig = {
   
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.dummyjson.com',
              port: '',
              pathname: '/product-images/**/**',
            },
            {
              protocol: 'https',
              hostname: 'robohash.org',
              port: '',
              pathname: '/**',
            },
          ],
        },
      
};



export default nextConfig;
