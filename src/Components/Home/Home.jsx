import style from './Home.module.css'

import logo from '../../assets/avataaars.svg'
import React from 'react'

export default function Home() {
  return (
    <>
      <div className={style.colour}>
        <img src={logo} alt="" />

        <h1 className={`text-light ${style.head} fw-bold`}>START FRAMEWORK</h1>

        <div className={style.starBox}>
          <span className={style.line}></span>
          <i className="fa-solid fa-star text-light"></i>
          <span className={style.line}></span>
        </div>

        <p className="text-light mt-3">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}
