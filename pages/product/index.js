import Product from '@sandika_src/product';

Product.getInitialProps = async () => {
  // EXAMPLE GET CONFIGURABLE PRODUCTS
  const configurableProductResponse = {
    "data": {
      "products": {
        "items": [
          {
            "configurable_options": [
              {
                "id": 304,
                "attribute_id": "93",
                "label": "Color",
                "position": 1,
                "use_default": false,
                "attribute_code": "color",
                "values": [
                  {
                    "value_index": 5481,
                    "label": "Lavender",
                    "swatch_data": {
                      "value": "#ce64d4",
                      "__typename": "ColorSwatchData"
                    },
                    "__typename": "ConfigurableProductOptionsValues"
                  },
                  {
                    "value_index": 5484,
                    "label": "Purple",
                    "swatch_data": {
                      "value": "#ef3dff",
                      "__typename": "ColorSwatchData"
                    },
                    "__typename": "ConfigurableProductOptionsValues"
                  }
                ],
                "product_id": 2099,
                "__typename": "ConfigurableProductOptions"
              },
              {
                "id": 303,
                "attribute_id": "214",
                "label": "Size",
                "position": 0,
                "use_default": false,
                "attribute_code": "size",
                "values": [
                  {
                    "value_index": 5599,
                    "label": "29",
                    "swatch_data": {
                      "value": "29",
                      "__typename": "TextSwatchData"
                    },
                    "__typename": "ConfigurableProductOptionsValues"
                  },
                  {
                    "value_index": 5602,
                    "label": "32",
                    "swatch_data": {
                      "value": "32",
                      "__typename": "TextSwatchData"
                    },
                    "__typename": "ConfigurableProductOptionsValues"
                  }
                ],
                "product_id": 2099,
                "__typename": "ConfigurableProductOptions"
              },
              {
                "id": 305,
                "attribute_id": "289",
                "label": "Brand",
                "position": 2,
                "use_default": false,
                "attribute_code": "brand",
                "values": [
                  {
                    "value_index": 5652,
                    "label": "Gucci",
                    "swatch_data": null,
                    "__typename": "ConfigurableProductOptionsValues"
                  }
                ],
                "product_id": 2099,
                "__typename": "ConfigurableProductOptions"
              },
              {
                "id": 306,
                "attribute_id": "290",
                "label": "lips color",
                "position": 3,
                "use_default": false,
                "attribute_code": "lips_color",
                "values": [
                  {
                    "value_index": 5654,
                    "label": "Sassy Classy",
                    "swatch_data": {
                      "value": "\/1\/2\/1231004722_5_3_1.jpg",
                      "thumbnail": "https:\/\/swiftpwa-be.testingnow.me\/media\/attribute\/swatch\/swatch_thumb\/110x90\/1\/2\/1231004722_5_3_1.jpg",
                      "__typename": "ImageSwatchData"
                    },
                    "__typename": "ConfigurableProductOptionsValues"
                  },
                  {
                    "value_index": 5655,
                    "label": "Strawberry Shortcake",
                    "swatch_data": {
                      "value": "\/1\/2\/1231003722_5_2_2.jpg",
                      "thumbnail": "https:\/\/swiftpwa-be.testingnow.me\/media\/attribute\/swatch\/swatch_thumb\/110x90\/1\/2\/1231003722_5_2_2.jpg",
                      "__typename": "ImageSwatchData"
                    },
                    "__typename": "ConfigurableProductOptionsValues"
                  }
                ],
                "product_id": 2099,
                "__typename": "ConfigurableProductOptions"
              }
            ],
            "variants": [
              {
                "product": {
                  "id": 2100,
                  "name": "Lipstik Sample Complate-Gucci-Lavender-Strawberry Shortcake-29",
                  "sku": "Lipstik Sample Complate-Gucci-Lavender-Strawberry Shortcake-29",
                  "sale": null,
                  "stock_status": "IN_STOCK",
                  "url_key": "lipstik-sample-complate-gucci-lavender-strawberry-shortcake-29",
                  "__typename": "SimpleProduct",
                  "attribute_set_id": 4,
                  "small_image": {
                    "url": "https:\/\/swiftpwa-be.testingnow.me\/media\/catalog\/product\/cache\/9311d1f28222673d17ad83ca1d4e5407\/1\/5\/15_2.jpeg",
                    "label": "Lipstik Sample Complate-Gucci-Lavender-Strawberry Shortcake-29",
                    "__typename": "ProductImage"
                  },
                  "image": {
                    "url": "https:\/\/swiftpwa-be.testingnow.me\/media\/catalog\/product\/cache\/8f52cebd15478e5e402d55b72e1f5d5d\/1\/5\/15_2.jpeg",
                    "__typename": "ProductImage"
                  },
                  "review": {
                    "rating_summary": null,
                    "reviews_count": null,
                    "__typename": "ReviewSummary"
                  },
                  "categories": [

                  ],
                  "special_from_date": null,
                  "special_to_date": null,
                  "price_range": {
                    "minimum_price": {
                      "discount": {
                        "amount_off": 0,
                        "percent_off": 0,
                        "__typename": "ProductDiscount"
                      },
                      "final_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "fixed_product_taxes": [

                      ],
                      "regular_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "__typename": "ProductPrice"
                    },
                    "maximum_price": {
                      "discount": {
                        "amount_off": 0,
                        "percent_off": 0,
                        "__typename": "ProductDiscount"
                      },
                      "final_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "fixed_product_taxes": [

                      ],
                      "regular_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "__typename": "ProductPrice"
                    },
                    "__typename": "PriceRange"
                  },
                  "price_tiers": [

                  ],
                  "media_gallery": [
                    {
                      "label": "Lipstik Sample Complate-Gucci-Lavender-Strawberry Shortcake-29",
                      "url": "https:\/\/swiftpwa-be.testingnow.me\/media\/catalog\/product\/cache\/8f52cebd15478e5e402d55b72e1f5d5d\/1\/5\/15_2.jpeg",
                      "__typename": "ProductImage"
                    }
                  ]
                },
                "attributes": [
                  {
                    "label": "Lavender",
                    "code": "color",
                    "value_index": 5481,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "29",
                    "code": "size",
                    "value_index": 5599,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "Gucci",
                    "code": "brand",
                    "value_index": 5652,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "Strawberry Shortcake",
                    "code": "lips_color",
                    "value_index": 5655,
                    "__typename": "ConfigurableAttributeOption"
                  }
                ],
                "__typename": "ConfigurableVariant"
              },
              {
                "product": {
                  "id": 2101,
                  "name": "Lipstik Sample Complate-Gucci-Lavender-Strawberry Shortcake-32",
                  "sku": "Lipstik Sample Complate-Gucci-Lavender-Strawberry Shortcake-32",
                  "sale": null,
                  "stock_status": "IN_STOCK",
                  "url_key": "lipstik-sample-complate-gucci-lavender-strawberry-shortcake-32",
                  "__typename": "SimpleProduct",
                  "attribute_set_id": 4,
                  "small_image": {
                    "url": "https:\/\/swiftpwa-be.testingnow.me\/static\/version1601455818\/graphql\/_view\/en_US\/Magento_Catalog\/images\/product\/placeholder\/small_image.jpg",
                    "label": "Lipstik Sample Complate-Gucci-Lavender-Strawberry Shortcake-32",
                    "__typename": "ProductImage"
                  },
                  "image": {
                    "url": "https:\/\/swiftpwa-be.testingnow.me\/static\/version1601455818\/graphql\/_view\/en_US\/Magento_Catalog\/images\/product\/placeholder\/image.jpg",
                    "__typename": "ProductImage"
                  },
                  "review": {
                    "rating_summary": null,
                    "reviews_count": null,
                    "__typename": "ReviewSummary"
                  },
                  "categories": [

                  ],
                  "special_from_date": null,
                  "special_to_date": null,
                  "price_range": {
                    "minimum_price": {
                      "discount": {
                        "amount_off": 0,
                        "percent_off": 0,
                        "__typename": "ProductDiscount"
                      },
                      "final_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "fixed_product_taxes": [

                      ],
                      "regular_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "__typename": "ProductPrice"
                    },
                    "maximum_price": {
                      "discount": {
                        "amount_off": 0,
                        "percent_off": 0,
                        "__typename": "ProductDiscount"
                      },
                      "final_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "fixed_product_taxes": [

                      ],
                      "regular_price": {
                        "currency": "IDR",
                        "value": 10,
                        "__typename": "Money"
                      },
                      "__typename": "ProductPrice"
                    },
                    "__typename": "PriceRange"
                  },
                  "price_tiers": [

                  ],
                  "media_gallery": [

                  ]
                },
                "attributes": [
                  {
                    "label": "Lavender",
                    "code": "color",
                    "value_index": 5481,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "32",
                    "code": "size",
                    "value_index": 5602,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "Gucci",
                    "code": "brand",
                    "value_index": 5652,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "Strawberry Shortcake",
                    "code": "lips_color",
                    "value_index": 5655,
                    "__typename": "ConfigurableAttributeOption"
                  }
                ],
                "__typename": "ConfigurableVariant"
              },
              {
                "product": {
                  "id": 2105,
                  "name": "Lipstik Sample Complate-29-Purple-Gucci-Sassy Classy",
                  "sku": "Lipstik Sample Complate-29-Purple-Gucci-Sassy Classy",
                  "sale": null,
                  "stock_status": "IN_STOCK",
                  "url_key": "lipstik-sample-complate-29-purple-gucci-sassy-classy",
                  "__typename": "SimpleProduct",
                  "attribute_set_id": 4,
                  "small_image": {
                    "url": "https:\/\/swiftpwa-be.testingnow.me\/static\/version1601455818\/graphql\/_view\/en_US\/Magento_Catalog\/images\/product\/placeholder\/small_image.jpg",
                    "label": "Lipstik Sample Complate-29-Purple-Gucci-Sassy Classy",
                    "__typename": "ProductImage"
                  },
                  "image": {
                    "url": "https:\/\/swiftpwa-be.testingnow.me\/static\/version1601455818\/graphql\/_view\/en_US\/Magento_Catalog\/images\/product\/placeholder\/image.jpg",
                    "__typename": "ProductImage"
                  },
                  "review": {
                    "rating_summary": null,
                    "reviews_count": null,
                    "__typename": "ReviewSummary"
                  },
                  "categories": [

                  ],
                  "special_from_date": null,
                  "special_to_date": null,
                  "price_range": {
                    "minimum_price": {
                      "discount": {
                        "amount_off": 0,
                        "percent_off": 0,
                        "__typename": "ProductDiscount"
                      },
                      "final_price": {
                        "currency": "IDR",
                        "value": 11,
                        "__typename": "Money"
                      },
                      "fixed_product_taxes": [

                      ],
                      "regular_price": {
                        "currency": "IDR",
                        "value": 11,
                        "__typename": "Money"
                      },
                      "__typename": "ProductPrice"
                    },
                    "maximum_price": {
                      "discount": {
                        "amount_off": 0,
                        "percent_off": 0,
                        "__typename": "ProductDiscount"
                      },
                      "final_price": {
                        "currency": "IDR",
                        "value": 11,
                        "__typename": "Money"
                      },
                      "fixed_product_taxes": [

                      ],
                      "regular_price": {
                        "currency": "IDR",
                        "value": 11,
                        "__typename": "Money"
                      },
                      "__typename": "ProductPrice"
                    },
                    "__typename": "PriceRange"
                  },
                  "price_tiers": [

                  ],
                  "media_gallery": [

                  ]
                },
                "attributes": [
                  {
                    "label": "Purple",
                    "code": "color",
                    "value_index": 5484,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "29",
                    "code": "size",
                    "value_index": 5599,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "Gucci",
                    "code": "brand",
                    "value_index": 5652,
                    "__typename": "ConfigurableAttributeOption"
                  },
                  {
                    "label": "Sassy Classy",
                    "code": "lips_color",
                    "value_index": 5654,
                    "__typename": "ConfigurableAttributeOption"
                  }
                ],
                "__typename": "ConfigurableVariant"
              }
            ],
            "__typename": "ConfigurableProduct"
          }
        ],
        "__typename": "Products"
      }
    }
  };

  // GET PRODUCTS FROM FAKESTORE API THEN PASS AS RELATED PRODUCT
  const productResponse = await fetch('https://fakestoreapi.com/products');
  const productJson = await productResponse.json();


  // IMAGE SLIDER DATA - (PROMO BANNER)
  const promoBannerImages = [
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png',
      alt: 'Free Delivery'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png',
      alt: 'Coupon Saving'
    },
    {
      src:
        'https://shop.redq.now.sh/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png',
      alt: 'Gift Voucher'
    }
  ];

  return {
    namespacesRequired: ['core'],
    promoBannerImages: promoBannerImages,
    productData: configurableProductResponse,
    relatedProductData: productJson
  };
}

export default Product;
