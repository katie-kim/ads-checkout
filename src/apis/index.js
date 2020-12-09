const products = [
  {
    id: 'classic',
    name: 'Classic Ad',
    unitPrice: 269.99,
  }, {
    id: 'standOut',
    name: 'Stand out Ad',
    unitPrice: 322.99,
  }, {
    id: 'premium',
    name: 'Premium Ad',
    unitPrice: 394.99,
  },
];

const pricingRules = {
  myer : {
    standOut: {
      description: '5 for 4 deal',
      deal: {
        buy: 5,
        for: 4,
      },
    }, 
    premium: {
      discountedUnitPrice: 389.99,
    },
  },
  secondBite: {
    classic: {
      description: '3 for 2 deal',
      deal: {
        buy: 3,
        for: 2,
      },
    }
  },
  axilCoffee: {
    standOut: {
      discountedUnitPrice: 299.99,
    }
  }
}

// Mock Backend API calls
export function fetchProductsFromBackend() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000, products);
  });
}

export function fetchPricingRulesFromBackend(token) {
  return new Promise(resolve => {
    setTimeout(resolve, 1000, pricingRules[token] || {});
  });
}