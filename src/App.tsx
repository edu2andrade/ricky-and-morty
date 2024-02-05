import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CharactersList from './pages/CharactersList';
import CharacterDetails from './pages/CharacterDetails';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/details/:characterId" element={<CharacterDetails />} />
        <Route path="*" element={<h1>Ups! Page not found!</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
