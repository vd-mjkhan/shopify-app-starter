const axios = require('axios');
const dotenv = require('dotenv');
const config = require('../../config');

dotenv.config();
const { SHOPIFY_PRIVATE_APP_API_KEY, SHOPIFY_PRIVATE_APP_PASSWORD, SHOPIFY_PRIVATE_APP_STORE_ACCESS_TOKEN } = process.env;

exports.getOrders = () => {
  const getOrdersUrl = `${config.private_app_baseUrl(SHOPIFY_PRIVATE_APP_API_KEY, SHOPIFY_PRIVATE_APP_PASSWORD)}admin/api/2019-07/orders.json`;
  return new Promise((resolve, reject) => {
    axios.get(getOrdersUrl, {
      headers: {
        'X-Shopify-Storefront-Access-Token': SHOPIFY_PRIVATE_APP_STORE_ACCESS_TOKEN,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      // handle success
      resolve(response.data);
    })
    .catch((error) => {
      // handle error
      reject(error);
    });
  });
}

exports.updateOrders = function(req, res) {
  const _id = req.params.update_id;
  const { ordersPayload } = req.body;
  // replace endpoint with orders actual end-point
    /*  
      === To-do:
      Place end-point in config.js file
    */
  const updateOrdersUrl = `${private_app_baseUrl(SHOPIFY_PRIVATE_APP_API_KEY, SHOPIFY_PRIVATE_APP_PASSWORD)}admin/themes.json`;
  axios.get(updateOrdersUrl, {
    headers: {
      'X-Shopify-Storefront-Access-Token': SHOPIFY_PRIVATE_APP_STORE_ACCESS_TOKEN,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    // handle success
    console.log("response here", response.data);
  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
  .finally(() => {
    // always executed
  });
}
