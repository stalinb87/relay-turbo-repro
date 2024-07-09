/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    relay: {
      src: "./",
      schema: "./schema.graphql",
      language: "typescript",
      artifactDirectory: "./client/lib/__generated__",
    },
  },
};

module.exports = nextConfig;
