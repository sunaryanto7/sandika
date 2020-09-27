const jsonConfigurableProduct = {
  data: {
    products: {
      items: [
        {
          configurable_options: [
            {
              id: 265,
              attribute_id: '93',
              label: 'Color',
              position: 1,
              use_default: false,
              attribute_code: 'color',
              values: [
                {
                  value_index: 5476,
                  label: 'Black',
                  __typename: 'ConfigurableProductOptionsValues'
                },
                {
                  value_index: 5479,
                  label: 'Gray',
                  __typename: 'ConfigurableProductOptionsValues'
                },
                {
                  value_index: 5486,
                  label: 'White',
                  __typename: 'ConfigurableProductOptionsValues'
                }
              ],
              product_id: 1888,
              __typename: 'ConfigurableProductOptions'
            },
            {
              id: 264,
              attribute_id: '214',
              label: 'Size',
              position: 0,
              use_default: false,
              attribute_code: 'size',
              values: [
                {
                  value_index: 5598,
                  label: '28',
                  __typename: 'ConfigurableProductOptionsValues'
                },
                {
                  value_index: 5599,
                  label: '29',
                  __typename: 'ConfigurableProductOptionsValues'
                }
              ],
              product_id: 1888,
              __typename: 'ConfigurableProductOptions'
            }
          ],
          variants: [
            {
              product: {
                id: 1882,
                name: 'Daria Bikram Pant-28-Black',
                sku: 'WP10-28-Black',
                sale: null,
                stock_status: 'IN_STOCK',
                url_key: 'daria-bikram-pant-28-black',
                __typename: 'SimpleProduct',
                attribute_set_id: 10,
                small_image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/9311d1f28222673d17ad83ca1d4e5407/w/p/wp10-black_main_2.jpg',
                  label: 'Daria Bikram Pant-28-Black',
                  __typename: 'ProductImage'
                },
                image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-black_main_2.jpg',
                  __typename: 'ProductImage'
                },
                review: {
                  rating_summary: null,
                  reviews_count: null,
                  __typename: 'ReviewSummary'
                },
                categories: [],
                special_from_date: null,
                special_to_date: null,
                price_range: {
                  minimum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  maximum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  __typename: 'PriceRange'
                },
                price_tiers: [],
                media_gallery: [
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-black_main_2.jpg',
                    __typename: 'ProductImage'
                  }
                ]
              },
              attributes: [
                {
                  label: 'Black',
                  code: 'color',
                  value_index: 5476,
                  __typename: 'ConfigurableAttributeOption'
                },
                {
                  label: '28',
                  code: 'size',
                  value_index: 5598,
                  __typename: 'ConfigurableAttributeOption'
                }
              ],
              __typename: 'ConfigurableVariant'
            },
            {
              product: {
                id: 1883,
                name: 'Daria Bikram Pant-28-Gray',
                sku: 'WP10-28-Gray',
                sale: null,
                stock_status: 'IN_STOCK',
                url_key: 'daria-bikram-pant-28-gray',
                __typename: 'SimpleProduct',
                attribute_set_id: 10,
                small_image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/9311d1f28222673d17ad83ca1d4e5407/w/p/wp10-gray_main_2.jpg',
                  label: 'Daria Bikram Pant-28-Gray',
                  __typename: 'ProductImage'
                },
                image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_main_2.jpg',
                  __typename: 'ProductImage'
                },
                review: {
                  rating_summary: null,
                  reviews_count: null,
                  __typename: 'ReviewSummary'
                },
                categories: [],
                special_from_date: null,
                special_to_date: null,
                price_range: {
                  minimum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  maximum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  __typename: 'PriceRange'
                },
                price_tiers: [],
                media_gallery: [
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_main_2.jpg',
                    __typename: 'ProductImage'
                  },
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_alt1_2.jpg',
                    __typename: 'ProductImage'
                  },
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_back_2.jpg',
                    __typename: 'ProductImage'
                  }
                ]
              },
              attributes: [
                {
                  label: 'Gray',
                  code: 'color',
                  value_index: 5479,
                  __typename: 'ConfigurableAttributeOption'
                },
                {
                  label: '28',
                  code: 'size',
                  value_index: 5598,
                  __typename: 'ConfigurableAttributeOption'
                }
              ],
              __typename: 'ConfigurableVariant'
            },
            {
              product: {
                id: 1884,
                name: 'Daria Bikram Pant-28-White',
                sku: 'WP10-28-White',
                sale: null,
                stock_status: 'IN_STOCK',
                url_key: 'daria-bikram-pant-28-white',
                __typename: 'SimpleProduct',
                attribute_set_id: 10,
                small_image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/9311d1f28222673d17ad83ca1d4e5407/w/p/wp10-white_main_2.jpg',
                  label: 'Daria Bikram Pant-28-White',
                  __typename: 'ProductImage'
                },
                image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-white_main_2.jpg',
                  __typename: 'ProductImage'
                },
                review: {
                  rating_summary: null,
                  reviews_count: null,
                  __typename: 'ReviewSummary'
                },
                categories: [],
                special_from_date: null,
                special_to_date: null,
                price_range: {
                  minimum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  maximum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  __typename: 'PriceRange'
                },
                price_tiers: [],
                media_gallery: [
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-white_main_2.jpg',
                    __typename: 'ProductImage'
                  }
                ]
              },
              attributes: [
                {
                  label: 'White',
                  code: 'color',
                  value_index: 5486,
                  __typename: 'ConfigurableAttributeOption'
                },
                {
                  label: '28',
                  code: 'size',
                  value_index: 5598,
                  __typename: 'ConfigurableAttributeOption'
                }
              ],
              __typename: 'ConfigurableVariant'
            },
            {
              product: {
                id: 1885,
                name: 'Daria Bikram Pant-29-Black',
                sku: 'WP10-29-Black',
                sale: null,
                stock_status: 'IN_STOCK',
                url_key: 'daria-bikram-pant-29-black',
                __typename: 'SimpleProduct',
                attribute_set_id: 10,
                small_image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/9311d1f28222673d17ad83ca1d4e5407/w/p/wp10-black_main_2.jpg',
                  label: 'Daria Bikram Pant-29-Black',
                  __typename: 'ProductImage'
                },
                image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-black_main_2.jpg',
                  __typename: 'ProductImage'
                },
                review: {
                  rating_summary: null,
                  reviews_count: null,
                  __typename: 'ReviewSummary'
                },
                categories: [],
                special_from_date: null,
                special_to_date: null,
                price_range: {
                  minimum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  maximum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  __typename: 'PriceRange'
                },
                price_tiers: [],
                media_gallery: [
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-black_main_2.jpg',
                    __typename: 'ProductImage'
                  }
                ]
              },
              attributes: [
                {
                  label: 'Black',
                  code: 'color',
                  value_index: 5476,
                  __typename: 'ConfigurableAttributeOption'
                },
                {
                  label: '29',
                  code: 'size',
                  value_index: 5599,
                  __typename: 'ConfigurableAttributeOption'
                }
              ],
              __typename: 'ConfigurableVariant'
            },
            {
              product: {
                id: 1886,
                name: 'Daria Bikram Pant-29-Gray',
                sku: 'WP10-29-Gray',
                sale: null,
                stock_status: 'IN_STOCK',
                url_key: 'daria-bikram-pant-29-gray',
                __typename: 'SimpleProduct',
                attribute_set_id: 10,
                small_image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/9311d1f28222673d17ad83ca1d4e5407/w/p/wp10-gray_main_2.jpg',
                  label: 'Daria Bikram Pant-29-Gray',
                  __typename: 'ProductImage'
                },
                image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_main_2.jpg',
                  __typename: 'ProductImage'
                },
                review: {
                  rating_summary: null,
                  reviews_count: null,
                  __typename: 'ReviewSummary'
                },
                categories: [],
                special_from_date: null,
                special_to_date: null,
                price_range: {
                  minimum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  maximum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  __typename: 'PriceRange'
                },
                price_tiers: [],
                media_gallery: [
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_main_2.jpg',
                    __typename: 'ProductImage'
                  },
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_alt1_2.jpg',
                    __typename: 'ProductImage'
                  },
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-gray_back_2.jpg',
                    __typename: 'ProductImage'
                  }
                ]
              },
              attributes: [
                {
                  label: 'Gray',
                  code: 'color',
                  value_index: 5479,
                  __typename: 'ConfigurableAttributeOption'
                },
                {
                  label: '29',
                  code: 'size',
                  value_index: 5599,
                  __typename: 'ConfigurableAttributeOption'
                }
              ],
              __typename: 'ConfigurableVariant'
            },
            {
              product: {
                id: 1887,
                name: 'Daria Bikram Pant-29-White',
                sku: 'WP10-29-White',
                sale: null,
                stock_status: 'IN_STOCK',
                url_key: 'daria-bikram-pant-29-white',
                __typename: 'SimpleProduct',
                attribute_set_id: 10,
                small_image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/9311d1f28222673d17ad83ca1d4e5407/w/p/wp10-white_main_2.jpg',
                  label: 'Daria Bikram Pant-29-White',
                  __typename: 'ProductImage'
                },
                image: {
                  url:
                    'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-white_main_2.jpg',
                  __typename: 'ProductImage'
                },
                review: {
                  rating_summary: null,
                  reviews_count: null,
                  __typename: 'ReviewSummary'
                },
                categories: [],
                special_from_date: null,
                special_to_date: null,
                price_range: {
                  minimum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  maximum_price: {
                    discount: {
                      amount_off: 10.2,
                      percent_off: 20,
                      __typename: 'ProductDiscount'
                    },
                    final_price: {
                      currency: 'USD',
                      value: 40.8,
                      __typename: 'Money'
                    },
                    fixed_product_taxes: [],
                    regular_price: {
                      currency: 'USD',
                      value: 51,
                      __typename: 'Money'
                    },
                    __typename: 'ProductPrice'
                  },
                  __typename: 'PriceRange'
                },
                price_tiers: [],
                media_gallery: [
                  {
                    label: '',
                    url:
                      'https://swiftpwa-be.testingnow.me/media/catalog/product/cache/8f52cebd15478e5e402d55b72e1f5d5d/w/p/wp10-white_main_2.jpg',
                    __typename: 'ProductImage'
                  }
                ]
              },
              attributes: [
                {
                  label: 'White',
                  code: 'color',
                  value_index: 5486,
                  __typename: 'ConfigurableAttributeOption'
                },
                {
                  label: '29',
                  code: 'size',
                  value_index: 5599,
                  __typename: 'ConfigurableAttributeOption'
                }
              ],
              __typename: 'ConfigurableVariant'
            }
          ],
          __typename: 'ConfigurableProduct'
        }
      ],
      __typename: 'Products'
    }
  }
};

export default (req, res) => {
  res.statusCode = 200;
  res.json(jsonConfigurableProduct);
};
