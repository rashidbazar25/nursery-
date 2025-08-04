import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  Container
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const DailySchedule = () => {
  const schedule = useSelector((state) => state.dailaySchedule);
  const { t, i18n } = useTranslation();

  return (
    <Container sx={{ mt: 6 }}>
      <Box>
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
          {t('dailySchedule.dailySchedule tx')}
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            mb: 3,
            color: '#7f8c8d',
            fontFamily: i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
            whiteSpace: 'pre-line',
          }}
        >
          {t('dailySchedule.dailySchedule tx2')}
        </Typography>

        <TableContainer
          component={Paper}
          elevation={1}
          sx={{
            borderRadius: 3,
            backgroundColor: '#f9f6f2',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
            overflowX: 'auto',
          }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f1ece6' }}>
                <TableCell  sx={{ fontWeight: 'bold', fontSize: 16, color: '#3c3c3c' }}>
                  {t('dailySchedule.time')}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 'bold', fontSize: 16, color: '#3c3c3c' }}>
                  {t('dailySchedule.activity')}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {schedule.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                      transition: '0.3s ease',
                      
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      color: '#4b4b4b',
                      fontWeight: 500,
                      fontFamily: i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
                      
                    }}
                  >
                    {item.time}
                  </TableCell>
                  <TableCell
                   sx={{
                       color: '#4b4b4b',
                       fontFamily: i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
                       textAlign: 'center',
                    }}
                  >
                    {t(`dailySchedule.${item.statment}`)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default DailySchedule;
