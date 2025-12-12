import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${style.col} ${scrolled ? style.scrolled : ''}`}>
        <div className="container">

          <NavLink className={`navbar-brand ${style.logo}`} to="/">
            START FRAMEWORK
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <NavLink className={({isActive}) => 
                  isActive ? `${style.link} ${style.active}` : style.link
                } to="/about">
                  ABOUT
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => 
                  isActive ? `${style.link} ${style.active}` : style.link
                } to="/portfolio">
                  PORTFOLIO
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className={({isActive}) => 
                  isActive ? `${style.link} ${style.active}` : style.link
                } to="/contacts">
                  CONTACTS
                </NavLink>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}
