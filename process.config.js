module.exports = {
    apps : [
      {
        name      : 'seed',
        script    : 'dist/server',
        env: {
          COMMON_VARIABLE: 'true'
        },
        env_dev : {
          NODE_ENV: 'dev'
        },
        env_prod : {
          NODE_ENV: 'prod'
        }
      }
    ],
  };
  