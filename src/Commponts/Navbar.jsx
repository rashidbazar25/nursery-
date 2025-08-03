import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import './Home.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
     const { t } = useTranslation();
   
  return (
    <>
        <div className='Navbar'>

           <div className='Navbar-top'> 
            <div className='Navbar-top-content'>
                <div><MapPin color='#ffffff'/></div>

                <div style={{display:"flex", justifyContent:"center" , alignItems:"center" , gap:"20px" }}>
                    <h3>{t('navbar.address')}</h3>
                     <Phone size={18} color='#ffffff' /> <span style={{color:"white"}}>{t(`navbar.mobile`)} </span>  
                </div>
            </div>
           </div>


  

        <div className='navbar-bottom'>

        <div>

          <Link className='link' to='/home'>{t('navbar.home')}</Link>
          <Link className='link' to='/gallery'>{t('navbar.gallery')}</Link>
          <Link className='link' to='/team'>{t('navbar.team')}</Link>
          <Link className='link' to='/daycare'>{t('navbar.daycare')}</Link>
          <Link className='link' to='/about'>{t('navbar.about')}</Link>
          <Link className='link' to='/contact'>{t('navbar.contact')}</Link>

        </div>

        <div>
           <Link className='book-visit'>
             <Button style={{fontFamily:"Salsa"}} variant="outlined" color="secondary"
             onClick={() => {
             const footer = document.getElementById("footer");
               if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
                 }
               }}
             > {t('buttons.bookVisit')} </Button>

           </Link>

                <Button style={{fontFamily:"Salsa", margin:"3px"}} variant="outlined" color="secondary" ><LanguageSwitcher /></Button>
           
        </div>

        </div>

        </div>
    </>
  )
}

export default Navbar