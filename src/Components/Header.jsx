import { Link } from 'react-router-dom';
import { useTheme } from '../custom Hooks/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/blog">BLOG</Link>
        </div>
        <button onClick={toggleTheme}>{theme === 'dark' ? '🌚' : '🌞'}</button>
      </nav>
    </>
  );
};

export default Header;
