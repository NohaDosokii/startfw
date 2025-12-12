



import React from 'react'
import style from './ِAbout.module.css'

export default function About() {
  return <>
  
<div className={style.colour}>
  <h1 className={`text-light ${style.head} fw-bold`}>ABOUT COMPONENT</h1>

  <div className={style.starBox}>
    <span className={style.line}></span>
    <i className="fa-solid fa-star text-light"></i>
    <span className={style.line}></span>
  </div>

  <div className="row mt-4 w-75">
    <div className="col-md-6">
      <p className="text-light">
        Freelancer is a free bootstrap theme created by Route. The download includes
        the complete source files including HTML,<br/> CSS, and JavaScript as well as
        optional SASS stylesheets for easy customization.
      </p>
    </div>

    <div className="col-md-6">
      <p className="text-light">
        Freelancer is a free bootstrap theme created by Route. The download includes
        the complete source files including HTML,<br/> CSS, and JavaScript as well as
        optional SASS stylesheets for easy customization.
      </p>
    </div>
  </div>
</div>

 
  
  </>
}
