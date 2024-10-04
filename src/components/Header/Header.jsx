import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white '>
              <h2 className='header-title text-capitalize'>Explore a World of Books.</h2><br /> 
              <p className='header-text fs-18 fw-3'>From fiction to non-fiction, academic works to self-help guides, find the perfect book that fits your interests and needs. Discover new authors, genres, and literary treasures with our curated collection. Whether you're an avid reader or just starting your literary journey, there's always a book waiting to inspire and captivate you.</p>
              <SearchForm />
            </div>
        </header>        
    </div>
  )
}

export default Header