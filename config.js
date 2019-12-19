function private_app_baseUrl(
  SHOPIFY_PRIVATE_APP_API_KEY,
  SHOPIFY_PRIVATE_APP_PASSWORD
) {
  return `https://${SHOPIFY_PRIVATE_APP_API_KEY}:${SHOPIFY_PRIVATE_APP_PASSWORD}@testifyapp007.myshopify.com/`;
}

module.exports.private_app_baseUrl = private_app_baseUrl;
