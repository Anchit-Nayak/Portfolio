import './App.css'
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { useEffect } from 'react';
import Reveal from './Reveal';

function App() {
  useEffect(() => {
    const loader = document.getElementById("preloader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 2900);
  }, []);
  const componentsToRender = [<About/>, <Projects/>];
  return (
    <div className='w-full h-full'>
      <div id="preloader">
        <div>
          <h2 className="text text-9xl" data-fill-text="AN.">AN.</h2>
        </div>
      </div>
    <div className='wrapper-container my-4 flex flex-col gap-52'>
      <Navbar/>
      <Hero/>
      {
        componentsToRender.map((section, i) => {
          return (
            <Reveal key={i}>
              {section}
            </Reveal>
          )
        })
      }
    </div>
    </div>
  )
}

export default App
