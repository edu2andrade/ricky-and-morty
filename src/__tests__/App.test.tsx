import App from '../App';
import { render, screen } from '../utils/test-utils';

test('should render correctly', () => {
  render(<App />);
  const title = screen.getByText('Vite + React');
  expect(title).toBeInTheDocument();
});