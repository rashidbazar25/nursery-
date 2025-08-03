import { Container } from '@mui/material'
import './OurPrice.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const OurPrice = () => {
      const { t } = useTranslation();

    const prices = useSelector((state)=>state.Price);

    //console.log(x);
    const colors = ["#fdf28d" , "#eba9cb" , "#d4eefb" , "#bcdeb8" ,"#e6d3cb" ,"#a1def5"]
    

  return (
    <>
           
       <div className='text-star'>
              <h1 className='ourPrice'>{t(`ourprices.ourprice`)}</h1>
              <p style={{color:"#374f8f"}}>{t(`ourprices.years`)}</p>
      </div>

    <Container className='OurPrice-Containers' maxWidth="lg">
    
     {
        
        prices.map((price , index)=>(
        <div key={index} className='ourPrict-content'>
         <div  style={{ backgroundColor: colors[index]}} className='hours'>
            <h1 className='text-top'>{t(`ourprices.${price.name}`)}</h1>
             
        </div>

        <div className='time-top'  style={{ backgroundColor: colors[index]}} >
            <h1 className='text-price'>{price.lineeone}</h1>
        </div>

        <div className='time-center'  style={{ backgroundColor: colors[index]}} >
            <h1 className='text-price'>{price.linetow}</h1>
        </div>

        <div className='time-under'  style={{ backgroundColor: colors[index]}} >
            <h1 className='text-price'>{price.linethree}</h1>
        </div>
        
       </div>
        ))

     }


    </Container>
     
    </>
  )
}

export default OurPrice