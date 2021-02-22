module.exports = {
  webpack: (config, { webpack }) => {
    config.module.rules.push({
      test: /\.common\.txt$/i,
      use: "raw-loader",
    });

    return config;
  },
};
