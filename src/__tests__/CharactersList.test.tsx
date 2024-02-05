import { BrowserRouter as Router } from 'react-router-dom';
import CharactersList from '../pages/CharactersList';
import { render, screen } from '../utils/test-utils';

describe('Characters List', () => {
  test('should render characters list', async () => {
    render(
      <Router>
        <CharactersList />
      </Router>
    );
  
    const rick = await screen.findByText(/Rick Sanchez/i);
    const morty = await screen.findByText(/Morty Smith/i);
    expect(rick).toBeInTheDocument();
    expect(morty).toBeInTheDocument();
  });
});