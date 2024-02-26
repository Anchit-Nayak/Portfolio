import './App.css'
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import Reveal from './Reveal';
import Page from './components/Page';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const loader = document.getElementById("preloader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 2900);
  }, []);
  const componentsToRender = [<About/>, <Projects/>, <Contact/>];
  return (
    <div className='w-full h-full'>
      <div id="preloader">
        <div>
          <h2 className="text text-9xl" data-fill-text="AN.">AN.</h2>
        </div>
      </div>
    <div className='wrapper-container my-9 flex flex-col'>
      <Navbar/>
      <Page/>
      {
        componentsToRender.map((section, i) => {
          return (
            <Reveal key={i}>
              {section}
            </Reveal>
          )
        })
      }
      <Footer/>
    </div>
    </div>
  )
}

export default App
