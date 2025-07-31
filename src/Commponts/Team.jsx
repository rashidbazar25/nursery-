import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import './Team.css'
import { useSelector } from 'react-redux';



const Team = () => {
  const teams = useSelector((state)=>state.Team);
  //console.log(teams);
  
  
  return (
  <Container className='team-Containers' maxWidth="lg">

    <h1 className='our-team'>OUR TEAM</h1>

      <div className='team-content-one' >

      {

        teams.map((team,index)=>

           <div key={index} className='team-content className="max-w-sm md:max-w-lg mx-auto md:mx-0 border border-gray-200 shadow-md rounded-md p-2'>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={team.photoUrl}  />
           </ListItemAvatar>


        <ListItemText
          primary={`Name :  ${team.name}`}
          secondary={
           <>
               <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
                {`Role : ${team.role}`}
              </Typography>

                 <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
                
                {`Specialization : ${team.Specialization}`}
              </Typography>

                   <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
               
                {`Experience : ${team.experience}`}
              </Typography>


                   <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
                
                {`Certifications : ${team.certifications}`}

              </Typography>
             
           </>
     
          }
        />
      </ListItem>
        </div>

        )

      } 



      </div>









      

 

    </Container> 
     )
}

export default Team