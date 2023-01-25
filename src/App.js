import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/Portfolio" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
