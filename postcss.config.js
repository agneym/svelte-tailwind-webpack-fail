module.exports = ({ env }) => {
  return {
    plugins: {
      autoprefixer: true,
      cssnano: env === "production",
    },
  };
};
