import Container from '@mui/material/Container';
import './Gallery.css'
import imgac1 from "../assets/activ1.jfif"
import imgac2 from "../assets/activ2.jfif"
import imgac3 from "../assets/activ3.jfif"
import imgac4 from "../assets/activ4.jfif"
import imggr1 from "../assets/Graduation1.jfif"
import imggr2 from "../assets/Graduation2.jfif"
import imggr3 from "../assets/Graduation3.jfif"
import imggr4 from "../assets/Graduation4.jfif"
import imgsp1 from "../assets/Special1.jfif"
import imgsp2 from "../assets/Special2.jfif"
import imgsp3 from "../assets/Special3.jfif"
import imgsp4 from "../assets/Special4.jfif"
 const Gallery = () => {
  return (
  <Container className='Containers' maxWidth="lg">

    {/* I did not use redux here and did not make a map on the images  */}
    
   <div className="gallery-cont">
  <div className="gallery-section">
      <div><h1 style={{padding:"30px" , fontSize:"18px" , color:"#374f8f"}}>Graduation</h1></div>
    <div style={{display:"flex" , justifyContent:"space-between", alignItems:"center" , gap:"15px" ,  marginBottom:"15px",flexWrap:"wrap"}}>
      <img src={imggr1} alt="Graduation" />
      <img src={imggr2} alt="Graduation" />
       <img src={imggr3} alt="Graduation"/>
       <img src={imggr4} alt="Graduation"/>
      <img src={imggr1} alt="Graduation" />
      <img src={imggr2} alt="Graduation" />
       <img src={imggr3} alt="Graduation"/>
       <img src={imggr4} alt="Graduation"/>
    </div>
   
  </div>


    <div className="gallery-section">
      <div><h1 style={{padding:"30px" , fontSize:"18px" , color:"#374f8f"}}>Special Days</h1></div>
    <div style={{display:"flex" , justifyContent:"space-between", alignItems:"center" , gap:"15px" , marginBottom:"15px",flexWrap:"wrap"}}>
      <img src={imgsp1} alt="Graduation" />
      <img src={imgsp2} alt="Graduation" />
        <img src={imgsp3} alt="Graduation"/>
        <img src={imgsp4} alt="Graduation"/>
        <img src={imgsp1} alt="Graduation" />
      <img src={imgsp2} alt="Graduation" />
        <img src={imgsp3} alt="Graduation"/>
        <img src={imgsp4} alt="Graduation"/>
    </div>
   
  </div>



    <div className="gallery-section">
      <div><h1 style={{padding:"30px" , fontSize:"18px" , color:"#374f8f"}}>Activities</h1></div>
    <div style={{display:"flex" , justifyContent:"space-between", alignItems:"center" , gap:"15px",flexWrap:"wrap" , marginBottom:"15px"}}>
      <img src={imgac1} alt="Graduation" />
      <img src={imgac2} alt="Graduation" />
       <img src={imgac3} alt="Graduation"/>
       <img src={imgac4} alt="Graduation"/>
         <img src={imgac1} alt="Graduation" />
      <img src={imgac2} alt="Graduation" />
       <img src={imgac3} alt="Graduation"/>
       <img src={imgac4} alt="Graduation"/>
    </div>
   
  </div>


    <div className="gallery-section">
      <div><h1 style={{padding:"30px" , fontSize:"18px" , color:"#374f8f"}}>Video</h1></div>
    <div style={{display:"flex" , justifyContent:"space-between", alignItems:"center" , gap:"15px", marginBottom:"15px",flexWrap:"wrap"}}>
      <img src={imgsp4} alt="Graduation" />
      <img src={imgsp4} alt="Graduation" />
        <img src={imgsp4} alt="Graduation"/>
    </div>
   
  </div>


</div>
    </Container> 
     )
}
export default Gallery