const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN
const collection = 'frontpage'

async function callShopify(query) {
  const fetchUrl = `https://${domain}/api/2021-01/graphql.json`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json(),
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch products!");
  }
}

export async function getAllProductsInCollection() {
  const query =
    `{
        products (first: 50, sortKey:CREATED_AT, reverse: true) {
          edges {
            node {
              id
              title
              description
              handle
              images(first: 10) {
                edges {
                  node {
                    id
                    originalSrc
                    height
                    width     
                    altText             
                  }
                }
              }
              variants(first: 25) {
                edges {
                  node {
                    id
                    title
                    quantityAvailable
                    price                
                  }
                }
              }
            }
          }
        }
    }`
  ;

  const response = await callShopify(query);

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];

  return allProducts;
}

export async function get3LatestProducts() {
  const query =
    `{
      products(first: 3, sortKey:CREATED_AT, reverse: true) {
        edges {
          node {
            id
            title
            description
            handle
            images(first: 10) {
              edges {
                node {
                  id
                  originalSrc
                  height
                  width     
                  altText             
                }
              }
            }
            variants(first: 25) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                  price                
                }
              }
            }
          }
        }
      }
    }`
  ;

  const response = await callShopify(query);

  const latest3Products = response.data.products.edges
    ? response.data.products.edges
    : [];

  return latest3Products;
}

export async function getProductSlugs() {
  const query =
    `{
      collectionByHandle(handle: "${collection}") {
        products(first: 20) {
          edges {
            node {
              handle              
            }
          }
        }
      }
    }`
  ;

  const response = await callShopify(query);

  const slugs = response.data.collectionByHandle.products.edges
    ? response.data.collectionByHandle.products.edges
    : [];

  return slugs;
}

export async function getProduct(handle) {
  const query =
    `{
      productByHandle(handle: "${handle}") {
        id
        title
        handle
        description
        images(first: 20) {
          edges {
            node {
              id
              originalSrc
              height
              width     
              altText             
            }
          }
        }
        variants(first: 20) {
          edges {
            node {
              id
              quantityAvailable
              availableForSale
              title
              price                
            }
          }
        }
      }
    }`
  ;

  const response = await callShopify(query);

  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];

  return product;
}

export async function createCheckout(id, quantity) {
  const query =
    `mutation 
      {
        checkoutCreate(input: {
          lineItems: [{ variantId: "${id}", quantity: ${quantity} }]
        }) {
          checkout {
             id
             webUrl
             lineItems(first: 50) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `
  ;

  const response = await callShopify(query);

  const checkout = response.data.checkoutCreate.checkout
    ? response.data.checkoutCreate.checkout
    : [];

  return checkout;
}

export async function updateCheckout(id, lineItems) {  
  const formattedLineItems = lineItems.map(item => {
    return `{
      variantId: "${item.variantId}",
      quantity:${item.quantity}
    }`
  })

  const query =
    `mutation 
      {
        checkoutLineItemsReplace(lineItems: [${formattedLineItems}], checkoutId: "${id}") {
          checkout {
             id
             webUrl
             lineItems(first: 50) {
               edges {
                 node {
                   id
                   title
                   quantity
                 }
               }
             }
          }
        }
      }      
    `
  ;

  const response = await callShopify(query);

  const checkout = response.data.checkoutLineItemsReplace.checkout
    ? response.data.checkoutLineItemsReplace.checkout
    : [];

  return checkout;
}