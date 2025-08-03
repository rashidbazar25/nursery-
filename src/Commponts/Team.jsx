import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import './Team.css'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';



const Team = () => {
  const teams = useSelector((state)=>state.Team);
  //console.log(teams);
  const { t } = useTranslation();

  
  return (
  <Container className='team-Containers' maxWidth="lg">

    <h1 className='our-team'>{t(`team.OUR TEAM`)}</h1>

      <div className='team-content-one' >

      {

        teams.map((team,index)=>

           <div key={index} className='team-content className="max-w-sm md:max-w-lg mx-auto md:mx-0 border border-gray-200 shadow-md rounded-md p-2'>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={team.photoUrl}  />
           </ListItemAvatar>
  

        <ListItemText
          primary={<Typography
      sx={{ direction: t('dir'), display: 'flex', fontWeight: 'bold' }}
    >
      {`${t('team.name')} : ${t(`${team.name}`)}`}
    </Typography>}
          secondary={
           <>
               <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
               {`${t('team.role')} : ${t(`roles.${team.role}`)}`}
              </Typography>

                 <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
                
               {`${t('team.specialization')} : ${t(`specializations.${team.Specialization}`)}`}
              </Typography>

                   <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
               
                {`${t('team.experience')} : ${team.experience}`}
              </Typography>


                   <Typography
                component="span"
                variant="body2"
                sx={{ color: 'text.primary', display: 'flex' }}
              >
                
                {`${t('team.certifications')} : ${t(`certifications.${team.certifications}`)}`}

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