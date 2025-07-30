import Container from '@mui/material/Container';
import './Daycare.css'
import { useSelector } from 'react-redux';
import baby from '../assets/baby.png'
const Daycare = () => {

  const daycare = useSelector(state=>state.costPrice);
  
  const bagcolers = [ "#fdf28d" , "#eba9cb"]

  return (
  <Container className='Containers' maxWidth="lg">

      <div className='daycare-content'>

      <div className='daycare-top' >
        <div><img src={baby} alt='baby'/></div>
        <div>
          <h1 className='day-care-text'>DAY CARE</h1>
        </div>
        <div><img src={baby} alt='baby'/></div>
      </div>











      <div className='daycare-center'>

       
      <div style={{display:"flex" , justifyContent:"center"  ,alignItems:"center"}}>
         <div style={{display:"flex" , justifyContent:"center" , width:"400px" ,alignItems:"center" , width:"700px"}}>
         <p className='paragraf'>The daycare program has started with a special initiative in English where you can leave your children from 10:00 to 2:00 PM.</p>
        </div>
      </div>

       <div className='sqear-content-all'>
        

   {
    daycare.map((item,index)=>(
         <div key={index} className='sqear-content' style={{border: `6px solid ${bagcolers[index]}`}} >
            <h3 className='text-squar-one'>{item.cost}</h3>
           <div className='line' style={{backgroundColor:`${bagcolers[index]}`}}>
            <h3 className='text-squar-two'>{item.price}</h3>
          </div>
        </div>
    ))
   }
     
        </div>



      </div>








      <div className='daycare-bottom'>

      </div>



      </div>
  </Container>  
    )
}

export default Daycare