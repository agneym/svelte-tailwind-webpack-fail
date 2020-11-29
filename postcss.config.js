module.exports = ({ env }) => {
  return {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: env === "production",
    },
  };
};
