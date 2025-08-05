import './Home.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/home', label: 'navbar.home' },
    { to: '/gallery', label: 'navbar.gallery' },
    { to: '/team', label: 'navbar.team' },
    { to: '/daycare', label: 'navbar.daycare' },
    { to: '/about', label: 'navbar.about' },
    { to: '/contact', label: 'navbar.contact' },
    { to: '/dashbord', label: 'navbar.dashbord' },
  ];

  return (
    <div className='Navbar'>
      {/* يظهر فقط على الشاشات الصغيرة */}
      {!open ? (
        <Menu size={28} onClick={() => setOpen(true)} className="menu-toggle" />
      ) : (
        <X size={28} onClick={() => setOpen(false)} className="menu-toggle" />
      )}

      <div className={`navbar-bottom ${open ? 'open' : ''}`}>
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

        {/* مكون تغيير اللغة (ثابت في الشاشات الكبيرة – يندمج في القائمة بالشاشات الصغيرة) */}
        <div className='language-switcher large-screen'>
          <LanguageSwitcher />
        </div>

        {/* مكون اللغة في الشاشات الصغيرة داخل القائمة */}
        {open && (
          <div className='language-switcher small-screen'>
            <LanguageSwitcher />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
