import './Welcome.css'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import child from '../assets/lern.png'
import { Phone } from 'lucide-react';

const Welcome = () => {
  return (
    <Container>
        <div className='welcom-content-all'>
            <div className='welcom-left'>
                <h1 className='welcom-text'>
                    Welcome To <br/> AIST ROYAL ECC
                </h1>

                <h4 className='welcome-paragraf'>
                    A Multi-Lingual Kindergarten <br/> Pre-KG, KG1, KG2
                </h4>

                <h4 style={{color: "#3076a5" ,fontSize: "18px"}}>
                    
                    <span style={{padding:"10px"}}>EN</span>
                    <span style={{padding:"10px"}}>FR</span> 
                    <span style={{padding:"10px"}}>AR</span>
                     <span style={{padding:"10px"}}>RU</span>
                </h4>

                <div className='link-wel-content'>
                    <Link className='link-welcome'>START TODAY</Link>
                    <h1 style={{display:"flex" , justifyContent:"center" , alignItems:"center" , gap:"20px" , marginLeft:"10px"}}><span ><Phone color='#3076a5'/></span> <span style={{color:"#3076a5" , fontSize:"18px"}}>00967 - 776049562</span></h1>
                </div>
            </div>
            <div className='welcom-right'>
                <img src={child} alt='child'/>
            </div>

        </div>
    </Container>
  )
}

export default Welcome