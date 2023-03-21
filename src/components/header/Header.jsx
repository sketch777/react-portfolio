import React from 'react'
import './header.css'
import CTA from './CTA'

import HeaderSocial  from './HeaderSocial'


const Header = () => {
  return (
    
    <header>
     <div className="container .header__container">
          <h4> Hello I'm </h4>
          <h1>MARK ANTHONY R CANEBA</h1>
          <h3 className="text-light">Fullstack Developer</h3>
          <CTA />
          <HeaderSocial/>

         

          <a href='#contact' className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default Header
