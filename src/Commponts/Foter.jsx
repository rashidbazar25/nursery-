import emailjs from '@emailjs/browser';
import './Foter.css'
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Foter = () => {
    const { t } = useTranslation();

     const notify = () => toast("تم إرسال طلبك بنجاح سيتم الرد عليك خلال يوم");

    const form = useRef();

    const sendEmail = (e) => {
    
    e.preventDefault();
    

    emailjs
      .sendForm('service_a6vx0ka', 'template_525t474', form.current, {
        publicKey: '5WkoIu3wfa7h59B7x',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className='foter' id='footer'>
      <div className='left-foter'>
        <h1 style={{color:"white" , margin:"4px" , padding:"10px"}}>{t("footer.ourContacts")}</h1>
        <div style={{display:"flex" , justifyContent:"center", alignItems :"center", gap:"15px"}}>
          <MapPin style={{marginBottom:"10px"}} size={25} color='#fff'/>
          <h6>{t('navbar.address')}</h6>
        </div>

        <div style={{display:"flex" , justifyContent:"center", alignItems :"center", gap:"15px"}} >
          <Phone style={{marginBottom:"10px"}} size={25} color='#fff'/>
          <h6>{t(`navbar.mobile`)} </h6>
        </div>

        <div style={{display:"flex" , justifyContent:"center", alignItems :"center", gap:"15px"}}>
          <Mail style={{marginBottom:"10px"}} size={25} color='#fff' />
          <h6>rashidbazar25@gmail.com</h6>
        </div>
      </div>

<div className="right-footer">
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-container">

          <div className="form-item">
            <label className="form-label">{t("footer.name")}</label>
            <input required type="text" name="sender_name" className="form-input" />
          </div>

          <div className="form-item">
            <label className="form-label">{t("footer.email")}</label>
            <input required type="email" name="sender_email" className="form-input" />
          </div>

          <div className="form-item">
  <label htmlFor="message" className="form-label">{t("footer.message")}</label>
  <textarea
    id="message"
    name="message"
    className="form-textarea"
    rows="5"
    required
    placeholder="Type your message here..."
  />
</div>

          <div className="form-item">
  <input
    type="submit"
    value={t("footer.send")}
    className="form-submit"
    onClick={notify}
  />
  <ToastContainer
    position="bottom-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    pauseOnHover
    draggable
    theme="colored"
  />
</div>
        </div>
      </form>
    </div>

       
    </div>
  )
}

export default Foter