/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/resume',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
}

module.exports = nextConfig