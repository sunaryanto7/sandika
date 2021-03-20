const prices = ({ price_range, price_tiers, __typename }) => {

  var result = {};
  const regular_price = price_range.minimum_price.regular_price;
  const final_price = price_range.minimum_price.final_price;

  // RULE 1
  if (price_tiers.length > 0 && __typename === 'SimpleProduct') {
    result = {
      case: 'none',
      value: 'none'
    }
  }
  // RULE 2
  else {
    // RULE 2a
    if (price_tiers.length > 1) {

    }
    if (price_tiers.length === 1) {
      if (regular_price.value === final_price.value) {
        result = {
          case: '4',
          value: [
            { type: 'regular_price', price: regular_price.value, label: 'Regular Price', currency: regular_price.currency },
            { type: 'price_tiers', price: price_tiers[0].value, label: 'Price Tiers', currency: price_tiers[0].currency }
          ]
        }
      }
      if (price_tiers && (final_price.value < price_tiers[0].value)) {
        result = {
          case: '5',
          value: [
            { type: 'regular_price', price: regular_price.value, label: 'Regular Price', currency: regular_price.currency },
            { type: 'final_price', price: final_price.value, label: 'Final Price', currency: final_price.currency }
          ]
        }
      }
      if ((price_tiers && price_tiers[0].qty === 1) || (price_tiers && (final_price.value === price_tiers[0].value))) {
        result = {
          case: '6',
          value: [
            { type: 'regular_price', price: regular_price.value, label: 'Regular Price', currency: regular_price.currency },
            { type: 'price_tiers', price: price_tiers[0].value, label: 'Price Tiers', currency: price_tiers[0].currency }
          ]
        }
      }
      else {
        result = {
          case: '7',
          value: [
            { type: 'regular_price', price: regular_price.value, label: 'Regular Price', currency: regular_price.currency },
            { type: 'final_price', price: final_price.value, label: 'Final Price', currency: final_price.currency },
            { type: 'price_tiers', price: price_tiers[0].value, label: 'Price Tiers', currency: price_tiers[0].currency }
          ]
        }
      }
    }
    // RULE 2b
    if (regular_price.value === final_price.value) {
      result = {
        case: '8',
        value: [
          { type: 'final_price', price: final_price.value, label: 'Final Price', currency: final_price.currency }
        ]
      }
    }
    else {
      result = {
        case: '9',
        value: [
          { type: 'regular_price', price: regular_price.value, label: 'Regular Price', currency: regular_price.currency },
          { type: 'final_price', price: final_price.value, label: 'Final Price', currency: final_price.currency }
        ]
      }
    }
  }

  return result;
}

export { prices }