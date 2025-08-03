import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, MenuItem } from '@mui/material';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
   <Select
  value={currentLang}
  onChange={handleChange}
  variant="outlined"
  size="small"
  disableUnderline
  MenuProps={{
    disableScrollLock: true, // يمنع تغيير margin من الـ body عند الفتح
  }}
  sx={{
    minWidth: 120,
    bgcolor: 'white',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2c3e50',
    },
    '& .MuiSelect-select': {
      padding: '8px 32px 8px 14px',
      boxSizing: 'border-box',
    },
    '& .MuiSvgIcon-root': {
      color: '#2c3e50',
    },
  }}
>
  <MenuItem value="en"> English</MenuItem>
  <MenuItem value="ar"> العربية</MenuItem>
</Select>

  );
};

export default LanguageSwitcher;