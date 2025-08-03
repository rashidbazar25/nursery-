import { Container } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import { ChevronRight, ChevronLeft } from 'lucide-react'; // استيراد الأيقونات من Lucide
import './Review.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const Reviews = () => {

    const reviews = useSelector((state)=>state.reviews);
   // console.log(reviews);
     const { t } = useTranslation();

    
  return (
    <Container>
      <div className='reviews-content'>
        <div>
            <h1 className='reviews'>{t(`reviews.Reviews`)}</h1>
            <p className='pragraf-carousel'>{t(`reviews.commint`)}</p>
        </div>

        <div className='carousel'>
          <Carousel
            nextIcon={<ChevronRight className='carousel-control-prev' size={36} color="#007bff"  />}
            prevIcon={<ChevronLeft className='carousel-control-next' size={36} color="#007bff" />}
          >
      {
        reviews.map((item,index)=>(
              <Carousel.Item key={index}>
          <div className="carousel-slide-content">
            <img className='imgcarousel' src={item.photoUrl} alt='img' />
            
            <p className='pragraf-carousel'>
              {t(`reviews.${item.comment}`)}
            </p>
            
            <h1 className='Describe'>
              {t(`reviews.${item.name}`)}
            </h1>
            
            <h6 className='text-carousel'>
              {t(`reviews.${item.describe}`)}
            </h6>
          </div>
        </Carousel.Item>
        ))
      }

          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;