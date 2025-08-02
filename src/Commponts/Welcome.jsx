import './Welcome.css'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import child from '../assets/lern.png'
import { Phone } from 'lucide-react';
import Arrow from './Arrow';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
      const { t } = useTranslation();

  
  return (
    <Container>
        <>
        
       
        <div className='welcom-content-all' id='welcome'>
            <div className='welcom-left'>
                <h1 className='welcom-text'>
                  {t('welcome')}
                </h1>

                <h4 className='welcome-paragraf'>
                    {t('kindergarten')}
                </h4>

                <h4 style={{color: "#3076a5" ,fontSize: "19px"}}>
                    
                    <span style={{padding:"10px"}}>EN</span>
                    <span style={{padding:"10px"}}>FR</span> 
                    <span style={{padding:"10px"}}>AR</span>
                     <span style={{padding:"10px"}}>RU</span>
                </h4>

                <div className='link-wel-content'>
                    <Link className='link-welcome'
                    onClick={() => {
                   const footer = document.getElementById("footer");
                   if (footer) {
                   footer.scrollIntoView({ behavior: "smooth" });
    }
  }}
                    >{t('startToday')}</Link>
                    <h1 style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"20px" , marginLeft:"10px"}}><span ><Phone color='#3076a5'/></span> <span style={{color:"#3076a5" , fontSize:"18px"}}>00967 - 776049562</span></h1>
                </div>
            </div>
            <div className='welcom-right'>
                <img src={child} alt='child'/>
            </div>


        </div>

        
            <div className='arrow' >
                 <span ><Arrow/></span>
            </div>
         </>
    </Container>
  )
}

export default Welcome