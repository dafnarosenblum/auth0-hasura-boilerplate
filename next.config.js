const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    REDIRECT_URI: process.env.REDIRECT_URI,
    POST_LOGOUT_REDIRECT_URI: process.env.POST_LOGOUT_REDIRECT_URI,
    HASURA_GRAPHQL_ENGINE_HOSTNAME: process.env.HASURA_GRAPHQL_ENGINE_HOSTNAME,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    CALLBACK_URL: process.env.CALLBACK_URL
  },
  target: "serverless"
  
};
