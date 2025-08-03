import { Container } from '@mui/material'
import './DailySchedule.css'
import hours from '../assets/hour.png'
import { useSelector } from 'react-redux'
import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from 'react-i18next';


const DailySchedule = () => {

    const daily = useSelector((state)=>state.dailaySchedule);
   // console.log(daily);
         const { t } = useTranslation();

  return (
    <Container>
        <div className='Daily-schedule-content'>
            <div className='Daily-schedule-text-content'>
                <h1 className='Daily-schedule-text'>{t(`dailySchedule.dailySchedule tx`)}</h1>
                <p className='Daily-schedule-paragraf'>{t(`dailySchedule.dailySchedule tx2`)}</p>
            </div>



            <div className='Daily-schedule-morning-content'>

              <div style={{width:"300px"}}><h1 className='period'>{t(`dailySchedule.Morning`)}</h1></div>
                <div className='Daily-schedule-morning-hours-content'>
                 {
                    daily.map((item,index)=>(
                     <div key={index} className='Daily-schedule-morning-hours'>
                      <div style={{borderRadius:"50%" , width:"60px"}}>
                        <img className='img-hours' src={hours} alt='hours'/>
                      </div>
                      <div style={{width:"200px"}}><p className='time'>{item.time}</p></div>
                      <div><h6 className='statement'>{t(`dailySchedule.${item.statment}`)}</h6></div>
                    </div>

                    ))
                 }
             

                
            </div>

               
            </div>






            <div className='Daily-schedule-noon-content'>
                <div style={{width:"300px"}}><h1 className='period'>{t(`dailySchedule.Noon`)}</h1></div>
                <div className='Daily-schedule-morning-hours-content'>
                 {
                    daily.map((item,index)=>(
                     <div key={index} className='Daily-schedule-morning-hours'>
                      <div style={{borderRadius:"50%" , width:"60px"}}>
                        <img className='img-hours' src={hours} alt='hours'/>
                      </div>
                      <div style={{width:"200px"}}><p className='time'>{item.time}</p></div>
                      <div><h6 className='statement'>{t(`dailySchedule.${item.statment}`)}</h6></div>
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