import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css"

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>
                    Find Your Book In This Website
                </h2><br />
                <p className='header-text fs-18 fw-3'>
                      CariBuku adalah platform pencarian buku yang dirancang untuk mempermudah siapa saja dalam menemukan bacaan yang sesuai 
                        dengan kebutuhan maupun minat mereka. Dengan koleksi yang beragam mulai dari novel populer, buku non-fiksi, hingga 
                        referensi akademik, CariBuku hadir sebagai teman terbaik bagi pembaca dari berbagai kalangan. Hanya dengan mengetik judul 
                        buku yang ingin dicari, kamu bisa langsung mendapatkan hasil rekomendasi secara cepat dan akurat. 
                        Selain itu, CariBuku juga mendorong kebiasaan membaca dengan memberikan pengalaman sederhana, praktis, dan menyenangkan 
                        setiap kali kamu menjelajahi dunia literasi.
                </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
