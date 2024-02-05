import { Link } from 'react-router-dom';
import logotipo from '../assets/logo-rick-and-morty.webp';

const Header = () => {
  return (
    <header
      className="
        px-8 lg:px-24 xl:px-40 py-4 
        flex justify-center items-center
        bg-gray-800 border-b border-cyan-500
      "
    >
      <Link to="/">
        <img className="w-[200px] cursor-pointer" src={logotipo} alt="Logotipo Rick and Morty" />
      </Link>
    </header>
  );
};

export default Header;
