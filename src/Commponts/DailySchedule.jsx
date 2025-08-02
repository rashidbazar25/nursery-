import { Container } from '@mui/material'
import './DailySchedule.css'
import hours from '../assets/hour.png'
import { useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel';


const DailySchedule = () => {

    const daily = useSelector((state)=>state.dailaySchedule);
   // console.log(daily);
    
  return (
    <Container>
        <div className='Daily-schedule-content'>
            <div className='Daily-schedule-text-content'>
                <h1 className='Daily-schedule-text'>Daily schedule</h1>
                <p className='Daily-schedule-paragraf'>There are different age-appropriate schedules in different groups. The administrator will give you your child's current schedule.</p>
            </div>



            <div className='Daily-schedule-morning-content'>

              <div style={{width:"300px"}}><h1 className='period'>Morning</h1></div>
                <div className='Daily-schedule-morning-hours-content'>
                 {
                    daily.map((item,index)=>(
                     <div key={index} className='Daily-schedule-morning-hours'>
                      <div style={{borderRadius:"50%" , width:"60px"}}>
                        <img className='img-hours' src={hours} alt='hours'/>
                      </div>
                      <div style={{width:"200px"}}><p className='time'>{item.time}</p></div>
                      <div><h6 className='statement'>{item.statment}</h6></div>
                    </div>

                    ))
                 }
             

                
            </div>

               
            </div>






            <div className='Daily-schedule-noon-content'>
                <div style={{width:"300px"}}><h1 className='period'>Noon</h1></div>
                <div className='Daily-schedule-morning-hours-content'>
                 {
                    daily.map((item,index)=>(
                     <div key={index} className='Daily-schedule-morning-hours'>
                      <div style={{borderRadius:"50%" , width:"60px"}}>
                        <img className='img-hours' src={hours} alt='hours'/>
                      </div>
                      <div style={{width:"200px"}}><p className='time'>{item.time}</p></div>
                      <div><h6 className='statement'>{item.statment}</h6></div>
                    </div>

                    ))
                 }
                
            </div>
              
            </div> 
     </div>
    </Container>
  )
}

export default DailySchedule