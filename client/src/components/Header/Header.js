import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header_wrapper">
      <h1>
        Meme Gen
      </h1>
      <nav>
        <ul className='header_nav-bar'>
          <li>
            <Link to='/create'>
              Create
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;