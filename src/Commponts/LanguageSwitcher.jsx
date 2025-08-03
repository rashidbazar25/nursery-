import  { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div>
        <button onClick={toggleLanguage}>
        {i18n.language === 'ar' ? 'English' : 'العربية'}
    </button>
    </div>
  )
}

export default LanguageSwitcher