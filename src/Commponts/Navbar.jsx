import './Home.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const links = [
    { to: '/home', label: 'navbar.home' },
    { to: '/gallery', label: 'navbar.gallery' },
    { to: '/team', label: 'navbar.team' },
    { to: '/daycare', label: 'navbar.daycare' },
    { to: '/about', label: 'navbar.about' },
    { to: '/contact', label: 'navbar.contact' },
  ];

  return (
    <div className='Navbar'>
      <div className='navbar-bottom'>
        <div className='links-nav'>
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              style={{
                cursor: 'pointer',
                margin: '0 10px',
                textDecoration: 'none',
                color: location.pathname === link.to ? '#2c3e50' : '#3498db',
                fontWeight: location.pathname === link.to ? 'bold' : 'normal',
              }}
              className='link'
            >
              {t(link.label)}
            </Link>
          ))}
        </div>

       
        <div className='language-switcher'>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;