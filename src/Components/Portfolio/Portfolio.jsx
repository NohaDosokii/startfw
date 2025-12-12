import React, { useState } from 'react'
import style from './portfolio.module.css'
import logo from '../../assets/poert1.png'
import logo2 from '../../assets/port2.png'
import logo3 from '../../assets/port3.png'

export default function Portfolio() {

  const [selectedImg, setSelectedImg] = useState(null);

  const handleOpen = (img) => {
    setSelectedImg(img);
  };

  const handleClose = () => {
    setSelectedImg(null);
  };

  return <>
  
<div className={style.colour}>
   <h1 className={`${style.head} fw-bold`}>PORTFOLIO COMPONENT</h1>

   <div className={style.starBox}>
     <span className={style.line}></span>
     <i className="fa-solid fa-star"></i>
     <span className={style.line}></span>
   </div>

   <div className="container">
      <div className="row g-4">

        {[logo, logo2, logo3, logo, logo2, logo3].map((img, index) => (
          <div className="col-md-4" key={index}>
            
            <div className={style.imageContainer} onClick={() => handleOpen(img)}>
              <img className={style.portImg} src={img} alt="" />
              
              <div className={style.overlay}>
                <i className={`fa-solid fa-plus ${style.plusIcon}`}></i>
              </div>
            </div>

          </div>
        ))}

      </div>
   </div>
</div>


{selectedImg && (
  <div className={style.modalBg} onClick={handleClose}>
    <img
      src={selectedImg}
      className={style.modalImg}
      alt=""
      onClick={(e) => e.stopPropagation()} 
    />
  </div>
)}

</>
}
