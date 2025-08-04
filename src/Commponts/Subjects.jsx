import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './Subjects.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18next from 'i18next';



const Subjects = () => {
  const subjects = useSelector((s) => s.Subjects);
  const { t, i18n } = useTranslation();

  // ضبط الاتجاه تلقائي حسب اللغة
  useEffect(() => {
    document.documentElement.dir = i18next.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{marginTop:"20px" , marginBottom:"15px"}}>   
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2c3e50',
            fontFamily: i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
          }}
        >{t(`footer.subject`)}</Typography>
        
        </div>

      <Grid container spacing={3} sx={{ padding: '30px', backgroundColor: '#f9f6f2' }}>
        {subjects.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Card className="card">
              <CardMedia
                component="img"
                height="200"
                image={item.photoUrl}
                alt="Card Image"
                className="card-img"
              />
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  className="card-title"
                  sx={{
                    fontWeight: '500',
                    color: '#374f8f',
                    minHeight: '60px',
                    marginBottom: '12px',
                  }}
                >
                  {t(item.address)}
                </Typography>

                <Typography
                  variant="body2"
                  className="card-text"
                  sx={{
                    color: 'text.secondary',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    minHeight: '80px',
                  }}
                >
                  {t(item.paragraph)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Subjects;
