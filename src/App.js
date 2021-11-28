import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
