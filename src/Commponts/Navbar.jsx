import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import './Home.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <>
        <div className='Navbar'>

           <div className='Navbar-top'> 
            <div className='Navbar-top-content'>
                <div><MapPin color='#ffffff'/></div>

                <div style={{display:"flex", justifyContent:"center" , alignItems:"center" , gap:"20px" }}>
                    <h3>Hadhramaut - Al-Qatn - Hadrami Square - villa 25</h3>
                     <Phone size={18} color='#ffffff' /> <span style={{color:"white"}}> 00967 - 776049562</span>  
                </div>
            </div>
           </div>


  

        <div className='navbar-bottom'>

        <div>

          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/approach'>Approach</Link>
          <Link className='link' to='/extracourses'>Extra courses</Link>
          <Link className='link' to='/team'>TEAM</Link>
          <Link className='link' to='/daycare'>Day Care</Link>
          <Link className='link' to='/contact'>contacts</Link>

        </div>

        <div>
           <Link className='book-visit'  to=''>
             <Button style={{fontFamily:"Salsa"}} variant="outlined" color="secondary"> BOOK A VISIT</Button>
           </Link>
        </div>

        
        


        </div>

        </div>
    </>
  )
}

export default Navbar