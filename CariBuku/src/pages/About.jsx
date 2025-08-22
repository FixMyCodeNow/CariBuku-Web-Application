import React from 'react'
import "./About.css"
import aboutImg from "../../images/about.jpg"


const About = () => {
  return (
    
      <section className='about'>
        <div className='container'>
          <div className='section-title'>
            <h2>About</h2>
          </div>

          <div className='about-content grid'>
            <div className='about-img'>
              <img src={aboutImg} alt="" />
            </div>
            <div className='about-text'>
              <h2 className='about-title fs-26 ls-1'>About CariBuku</h2>
              <p className='fs-17'>
                CariBuku adalah platform pencarian dan rekomendasi buku yang membantu pembaca menemukan bacaan yang sesuai dengan minat mereka. 
                Dengan koleksi yang beragam mulai dari fiksi, non-fiksi, hingga buku pelajaran, CariBuku hadir untuk mempermudah siapa saja yang ingin memperluas wawasan.
              </p>
              <p className='fs-17'>
                Melalui tampilan sederhana dan fitur pencarian cepat, pengguna dapat menemukan buku favorit dengan mudah. 
                Selain itu, CariBuku juga mendukung komunitas pembaca untuk saling berbagi ulasan dan rekomendasi, sehingga pengalaman membaca menjadi lebih menyenangkan dan bermanfaat.
              </p>
            </div>
          </div>
        </div>
      </section>

  )
}

export default About;
