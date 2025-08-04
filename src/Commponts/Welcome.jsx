import './Welcome.css';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import child from '../assets/lern.png';
import { useTranslation } from 'react-i18next';
import Arrow from './Arrow';

const Welcome = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <Container>
      <div
        className='welcom-content-all'
        style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
        id='welcome'
      >
        <div className='welcom-left'>
          <h1 className='welcom-text'>{t('welcome.heading')}</h1>

          <h4 className='welcome-paragraf'>{t('welcome.kindergarten')}</h4>

          <h4 style={{ color: '#3076a5', fontSize: '19px' }}>
            <span style={{ padding: '10px' }}>EN</span>
            <span style={{ padding: '10px' }}>FR</span>
            <span style={{ padding: '10px' }}>AR</span>
            <span style={{ padding: '10px' }}>RU</span>
          </h4>

          <div className='link-wel-content'>
            <Link
              className='link-welcome'
              onClick={() => {
                const footer = document.getElementById('footer');
                if (footer) {
                  footer.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t('buttons.startToday')}
            </Link>
          </div>
        </div>

        <div className='welcom-right'>
          <img src={child} alt='child' />
        </div>
      </div>

      <div className='arrow'>
        <span>
          <Arrow />
        </span>
      </div>
    </Container>
  );
};

export default Welcome;
