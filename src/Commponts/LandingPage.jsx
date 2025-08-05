import { Container } from '@mui/material'
import Navbar from './Navbar'
import OurPrice from './OurPrice'
import Team from './Team'
import DailySchedule from './DailySchedule'
import Welcome from './Welcome'
import Reviews from './Reviews'
import Foter from './Foter'
import TabelPrice from './TabelPrice'
import Subjects from './Subjects'
import MapLeaflet from './MapLeaflet'

const LandingPage = () => {
  return (
    <>
    <Container className='Containers' maxWidth="lg">
    <Welcome/>
    <TabelPrice/>
    <Subjects/>
    <DailySchedule/>
    <Team/>
    <Reviews/>
    </Container> 
    <MapLeaflet/>
    </>
   
  )
}

export default LandingPage