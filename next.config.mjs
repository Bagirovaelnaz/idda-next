/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.idda.az"], // xarici hostname-i əlavə et
    qualities: [100, 75],
  },
};

export default nextConfig;
