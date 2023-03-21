import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



const HeaderSocial = () => {
  return (
    <div className='header__socials'>
    <a href='https://www.linkedin.com/in/mark-anthony-r-ca%C3%B1eba-osh-219864257?fbclid=IwAR3mTWt9urtyVlpd9PTkinlS5BoxVAIi3ESIdo8ZP6BciuVUnhC7BORlh5U' target='_blank'><BsLinkedin/></a>
    <a href='https://www.facebook.com/hadji.caneba' target='_blank'><BsFacebook/></a>
    <a href='https://github.com' target='_blank'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocial
