import { render, screen, fireEvent } from '../../test-utils';
import Product from '.';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

describe('renders with or without promo', () => {
  test('renders price and discounted price correctly when there is a promo', () => {
    const promo = {
      discountedUnitPrice: 299.99,
    }
    render(<Product id='standard' name='Standard' unitPrice={322.99} promo={promo} />);
  
    const price = screen.getByText('$322.99');
    const discountedPrice = screen.getByText('$299.99');
    expect(price).toHaveClass('product__price--promo-applied');
    expect(discountedPrice).toHaveClass('product__price--discounted');
  });
  
  test('renders price correctly and does NOT render discounted price when there is NO promo', () => {
    const promo = {};
    render(<Product id='standard' name='Standard' unitPrice={322.99} promo={promo} />);
  
    const price = screen.getByText('$322.99');
    const discountedPrice = screen.queryByText('$299.99');
    expect(price).not.toHaveClass('product__price--promo-applied');
    expect(discountedPrice).not.toBeInTheDocument();
  });
});

 describe('addToCart action', () => {
  test('should be dispatched when the quantity is greater than 0 and addToCart button is clicked', () => {
    render(<Product id='standard' name='Standard' unitPrice={322.99} promo={{}} />);

    const quantityInput = screen.getByLabelText(/Quantity to add/);
    const addToCartButton = screen.getByText('Add to cart');

    fireEvent.change(quantityInput, { target: { value: 2} });
    fireEvent.click(addToCartButton);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });

  test('should NOT be dispatched when the quantity is not greater than 0 and addToCart button is clicked', () => {
    render(<Product id='standard' name='Standard' unitPrice={322.99} promo={{}} />);

    const quantityInput = screen.getByLabelText(/Quantity to add/);
    const addToCartButton = screen.getByText('Add to cart');

    fireEvent.change(quantityInput, { target: { value: 0} });
    fireEvent.click(addToCartButton);
    expect(mockDispatch).toHaveBeenCalledTimes(0);
  });
});