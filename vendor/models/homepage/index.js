const getPopularProducts = `
{
  getBestSeller {
      items {
          id
          sku
          name
          url_key
          __typename
          categories {
              name
          }
          review {
              rating_star
              rating_summary
              reviews_count
              votes {
                  star_1
                  star_2
                  star_3
                  star_4
                  star_5
              }
          }
          price_tiers {
              discount {
              percent_off
              amount_off
              }
              final_price {
                  currency
                  value
              }
              quantity
          }
          price_range {
              maximum_price {
                  discount {
                      amount_off
                      percent_off
                  }
                  final_price {
                      currency
                      value
                  }
                  regular_price {
                      currency
                      value
                  }
              }
              minimum_price {
                  discount {
                      amount_off
                      percent_off
                  }
                  final_price {
                      currency
                      value
                  }
                  regular_price {
                      currency
                      value
                  }
              }
          }
          special_from_date
          special_to_date
          new_from_date
          new_to_date
          sale
          image {
              url
              label
          }
          small_image {
              url
              label
          }
      }
  }
}
`;

export { getPopularProducts };