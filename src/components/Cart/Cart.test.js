import { render, screen } from '../../test-utils';
import { useSelector } from 'react-redux';
import Cart from './';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

test('renders correctly when there is no product in cart', () => {
  useSelector
    .mockReturnValueOnce([])
    .mockReturnValueOnce(0);
  render(<Cart />);

  const total = screen.getByText('Total');
  const heading = screen.getByText('Review items');

  expect(total.closest('div')).toHaveTextContent('$0');
  expect(heading).toBeInTheDocument();
});

test('renders correctly when there are products in cart', () => {
  useSelector
    .mockReturnValueOnce([{
      discountedPrice: 539.98,
      id: 'classic',
      name: 'Classic Ad',
      quantity: 3,
      unitPrice: 269.99,
    }])
    .mockReturnValueOnce(539.98);
  render(<Cart />);

  const total = screen.getByText('Total');
  const productName = screen.getByText('Classic Ad');

  expect(total.closest('div')).toHaveTextContent('$539.98');
  expect(productName).toBeInTheDocument();
});