import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper
} from '@mui/material';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';





const TabelPrice = () => {
   const { t ,i18n } = useTranslation();
  const prices = useSelector((state) => state.Price);

  const lineKeys = ['lineeone', 'linetow', 'linethree'];
  return (
    <>
      <Box sx={{ mt: 20, px: 2 }}>
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
        {t('ourprices.ourprice')}
      </Typography>

      <TableContainer
           variant="subtitle1"
          align="center"
          sx={{
            mb: 3,
            color: '#7f8c8d',
            fontFamily: i18n.language === 'ar' ? 'Tajawal' : 'Comfortaa',
            whiteSpace: 'pre-line',
            borderRadius: 3,
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f1ece6' }}>
              {prices.map((item, index) => (
                <TableCell
                  key={index}
                  align="center"
                  sx={{ fontWeight: 'bold', fontSize: 16 }}
                >
                  {t(`ourprices.${item.name}`)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {lineKeys.map((line, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{
                  backgroundColor: rowIndex % 2 === 0 ? '#fdfdfd' : 'white',
                  '&:hover': {
                    backgroundColor: '#ecf0f1',
                    transition: 'all 0.3s ease',
                  },
                }}
              >
                {prices.map((item, colIndex) => (
                  <TableCell key={colIndex} align="center" sx={{ color: '#7f8c8d' }}>
                    {item[line]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
      </>
  )
}

export default TabelPrice


