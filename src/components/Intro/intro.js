import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Isaac</span> <br />Software Engineer</span>
            <p className="introPara">I am a determined and skilled developer looking for a chance.</p>
            <a href="https://www.linkedin.com/in/isaac-thill" target="_blank" rel="noopener noreferrer">
              <button className="btn">
                <img src={btnImg} alt="Hire Me" className='btnImg' />
                Hire Me
              </button>
            </a>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
