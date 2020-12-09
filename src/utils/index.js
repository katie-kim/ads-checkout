export const roundUpTwoDecimal = (number) => Math.ceil(number * 100) / 100;
export const roundDownTwoDecimal = (number) => Math.floor(number * 100) / 100;
export const multiply = (a, b) => roundDownTwoDecimal(a * b);

export const getDiscountedPrice = (promo, quantity, unitPrice) => {
  const { discountedUnitPrice, deal } = promo;
  if (discountedUnitPrice) return multiply(discountedUnitPrice, quantity);

  if (deal && quantity >= deal.buy) {
    const discountValue = Math.floor(quantity / deal.buy) * (deal.buy - deal.for) * unitPrice;

    return roundDownTwoDecimal(unitPrice * quantity - discountValue);
  } 

  return null;
}
