import { Container } from '@mui/material'
import Navbar from './Navbar'
import OurPrice from './OurPrice'
import Team from './Team'
import DailySchedule from './DailySchedule'
import Welcome from './Welcome'

const LandingPage = () => {
  return (
   <Container className='Containers' maxWidth="lg">
    <Welcome/>
    <Navbar/>
    <OurPrice/>
    <DailySchedule/>
    <Team/>

    </Container> 
  )
}

export default LandingPage