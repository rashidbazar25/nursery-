import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './Subjects.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18next from 'i18next';
import { motion } from 'framer-motion';

const Subjects = () => {
  const subjects = useSelector((s) => s.Subjects);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18next.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // حركة للعنوان
  const titleVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // حركة للكروت
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2, // تأخير بسيط لكل كارد
      },
    }),
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <motion.div
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        style={{ marginTop: '20px', marginBottom: '15px' }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#2c3e50',
            fontFamily: i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
          }}
        >
          {t(`footer.subject`)}
        </Typography>
      </motion.div>

      <Grid container spacing={3} sx={{ padding: '30px', backgroundColor: '#f9f6f2' }}>
        {subjects.map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <motion.div
              custom={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="card" sx={{ backgroundColor: '#f9f6f2', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Subjects;
