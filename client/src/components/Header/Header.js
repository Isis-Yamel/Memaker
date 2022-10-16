import './Header.scss';

const Header = () => {
  return (
    <header className="header_wrapper">
      <h1>
        Meme Gen
      </h1>
      <nav>
        <ul className='header_nav-bar'>
          <li>Ramdonize</li>
          <li>Customize</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;