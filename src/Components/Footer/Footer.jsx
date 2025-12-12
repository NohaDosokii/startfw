
import React from 'react';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerCol}>
          <h4>LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div className={style.footerCol}>
          <h4>AROUND THE WEB</h4>

   <i className={`fab fa-facebook-f ${style.iconCircle}`}></i>
<i className={`fab fa-twitter ${style.iconCircle}`}></i>
<i className={`fab fa-linkedin-in ${style.iconCircle}`}></i>
<i className={`fas fa-globe ${style.iconCircle}`}></i>

        </div>

        

        <div className={style.footerCol}>
          <h4>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, licensed Bootstrap theme <br />created by Route</p>
        </div>
      </div>


      <div className= {style.footBottom}>
        <p className='d-flex  justify-content-center align-items-center  mt-1'>Copyright © Your Website 2021</p>
     
      </div>
    </footer>
  );
}
