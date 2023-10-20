// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["content-cdn.zameen.com", "content-cdn.zameen.com"],
//   },
// };
// return nextConfig

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      domains: [
        "content-cdn.zameen.com",
        "content-cdn.zameen.com",
        "www.google.com",
        "res.cloudinary.com",
        "cdn.sanity.io",
      ],
    },
  };
  return nextConfig;
};
