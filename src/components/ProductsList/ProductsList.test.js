import { render, screen } from '../../test-utils';
import { useSelector } from 'react-redux';
import ProductsList from '.';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

test('renders a loading spinner when isLoading is true', () => {
  useSelector
    .mockReturnValueOnce(true)
    .mockReturnValueOnce([]);
  render(<ProductsList />);

  const spinner = screen.getByTitle('Loading Spinner');
  expect(spinner).toBeInTheDocument();
});

test('renders product list when isLoading is false', () => {
  useSelector
    .mockReturnValueOnce(false)
    .mockReturnValueOnce([
      {
        id: 'classic',
        name: 'Classic Ad',
        unitPrice: 269.99,
        promo: {},
      }, {
        id: 'standOut',
        name: 'Stand out Ad',
        unitPrice: 322.99,
        promo: {},
      }
    ]);
  render(<ProductsList />);

  const spinner = screen.queryByTitle('Loading Spinner');
  const heading = screen.getByText('Products List');
  const addToCartButtons = screen.queryAllByText('Add to cart');
  expect(spinner).not.toBeInTheDocument();
  expect(heading).toBeInTheDocument();
  expect(addToCartButtons).toHaveLength(2);
});