const items = require("../assets/data");

exports.handler = async (event, context) => {
  return {
    headers: {
      "Access-Control-Allow-Origin":
        "https://serverless-vanilla.netlify.app/api/basic-api",
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
