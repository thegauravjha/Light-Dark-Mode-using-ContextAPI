import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/blog">BLOG</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
