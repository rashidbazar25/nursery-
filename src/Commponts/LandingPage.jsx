import { Container } from '@mui/material'
import Navbar from './Navbar'
import OurPrice from './OurPrice'
import Team from './Team'
import DailySchedule from './DailySchedule'
import Welcome from './Welcome'
import Reviews from './Reviews'
import Foter from './Foter'

const LandingPage = () => {
  return (
    <>
    <Container className='Containers' maxWidth="lg">
    <Welcome/>
    <OurPrice/>
    <DailySchedule/>
    <Team/>
    <Reviews/>
    </Container> 
    </>
   
  )
}

export default LandingPage