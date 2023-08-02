module.exports = {
    // target: 'experimental-serverless-trace',
    webpack: (config) => {
      config.experiments = config.experiments || {};
      config.experiments.topLevelAwait = true;
      return config;
    },
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },

    env: {
    NEXT_PUBLIC_DISABLE_SERVICE_WORKER: process.env.NODE_ENV === 'development',
  },
  };


