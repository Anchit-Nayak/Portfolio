import './App.css'
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='wrapper-container my-4 flex flex-col gap-52'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
