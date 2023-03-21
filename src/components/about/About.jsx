import React from 'react'
import './about.css'
import ME from '../../assets/me-abou.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='About Image'/>            
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
             <article className='about__card'>
               <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>1+ Years Working</small>
              </article>

              <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>200+ Worldwide</small>
              </article>
              
              <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>20+ Completed</small>
              </article>
              <p>Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or 
                any specified custom words) in the alt prop</p>
              <p>Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or 
                any specified custom words) in the alt prop</p>
              <p>Redundant alt attribute. Screen-readers already announce `img` tags as an image. You don’t need to use the words `image`, `photo,` or `picture` (or 
                any specified custom words) in the alt prop</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
