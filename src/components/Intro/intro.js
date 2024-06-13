import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introOverlay"></div>
        <div className="introContent">
            <span className="hello">Hello</span>
            <span className="introText">I'm <span className="introName">Isaac Thill</span> <br />Software Engineer</span>
            <p className="introPara">If you're on the hunt for IT, you've landed in the right place. I am a passionate software developer weaving intricate code and crafting captivating digital experiences. Explore my portfolio, where IT meets innovation, creativity, and precision.</p>
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
