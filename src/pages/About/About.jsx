import React from 'react';
import "./About.css";
import aboutImg from "../../images/about.jpg";

const About = React.forwardRef((props, ref) => {
  
  return (
    <section className='about' ref={ref}>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookExplorer</h2>
            <p className='fs-17'>Welcome to BookExplorer, your one-stop destination for discovering books that inspire, inform, and entertain. Whether you’re seeking the latest bestseller, an academic resource, or a hidden literary gem, we are here to make your book search journey effortless and enjoyable.</p>
            <p className='fs-17'>At BookExplorer, we believe in the transformative power of books. A great book can transport you to new worlds, broaden your understanding, and spark fresh ideas. That’s why we’ve created a platform dedicated to connecting readers with the perfect books across every genre, from gripping thrillers and heartfelt romances to insightful non-fiction and educational works.</p>
            <p className='fs-17'>Our mission is to create a space where readers of all interests can explore, learn, and grow. With our carefully curated collection and powerful search tools, finding the right book has never been easier. Whether you're a student seeking academic texts, a professional in need of industry insights, or simply a lover of great stories, BookExplorer has something for everyone.</p>
            <p className='fs-17'>Join us in exploring the boundless world of literature. Dive into BookExplorer today and find your next great read!</p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default About
