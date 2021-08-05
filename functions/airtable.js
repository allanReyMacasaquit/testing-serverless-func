require("dotenv").config();
const Airtable = require("airtable-node");

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base("appLgUz01q45iFRTa")
  .table("products");

exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    // console.log(records);
    const products = records.map((product) => {
      const { id } = product;
      const { name, price, images } = product.fields;
      const url = images[0].url;
      return { id, name, price, images, url };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Server Error",
    };
  }
};
