
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Skills from './views/Skills';
import Header from './components/Header';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
        </Route>
      </Routes>

    </>
  )
}

function Layout() {
  return (
    <>
     <Header/>
      <Outlet />
      <footer>
        <ul>
          <li><Link to={'/'}>Accueil</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/skills'}>Compétences</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </footer>
    </>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}

export default App
