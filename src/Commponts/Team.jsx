import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Container,
} from '@mui/material';
import './Team.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Team = () => {
  const teams = useSelector((state) => state.Team);
  const { t, i18n } = useTranslation();

  
  return (
    <Container className="team-Containers" maxWidth="lg">
       <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2c3e50',
            fontFamily: i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
          }}
        >{t(`team.OUR TEAM`)}</Typography>
      

      <div className="team-content-one">
        {teams.map((team, index) => (
          <div
            key={index}
            className="team-content max-w-sm md:max-w-lg mx-auto md:mx-0 border border-gray-200 shadow-md rounded-md p-2"
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={team.name} src={team.photoUrl} />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography
                    sx={{
                      direction: t('dir'),
                      display: 'flex',
                      fontWeight: 'bold',
                      fontFamily:
                        i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
                    }}
                  >
                    {t('team.name')}
                    <span
                      style={{
                        fontWeight: 'normal',
                        marginInlineStart: '8px',
                      }}
                    >
                      {t(`${team.name}`)}
                    </span>
                  </Typography>
                }
                secondary={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      marginTop: '8px',
                    }}
                  >
                    <Typography
                      sx={{
                        display: 'flex',
                        fontWeight: 'bold',
                        fontFamily:
                          i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
                      }}
                    >
                      {t('team.role')}
                      <span
                        style={{
                          fontWeight: 'normal',
                          marginInlineStart: '8px',
                        }}
                      >
                        {t(`roles.${team.role}`)}
                      </span>
                    </Typography>

                    <Typography
                      sx={{
                        display: 'flex',
                        fontWeight: 'bold',
                        fontFamily:
                          i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
                      }}
                    >
                      {t('team.specialization')}
                      <span
                        style={{
                          fontWeight: 'normal',
                          marginInlineStart: '8px',
                        }}
                      >
                        {t(`specializations.${team.Specialization}`)}
                      </span>
                    </Typography>

                    <Typography
                      sx={{
                        display: 'flex',
                        fontWeight: 'bold',
                        fontFamily:
                          i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
                      }}
                    >
                      {t('team.experience')}
                      <span
                        style={{
                          fontWeight: 'normal',
                          marginInlineStart: '8px',
                        }}
                      >
                        {team.experience}
                      </span>
                    </Typography>

                    <Typography
                      sx={{
                        display: 'flex',
                        fontWeight: 'bold',
                        fontFamily:
                          i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
                      }}
                    >
                      {t('team.certifications')}
                      <span
                        style={{
                          fontWeight: 'normal',
                          marginInlineStart: '8px',
                        }}
                      >
                        {t(`certifications.${team.certifications}`)}
                      </span>
                    </Typography>
                  </div>
                }
              />
            </ListItem>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Team;
