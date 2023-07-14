
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

    </>
  )
}

function Layout() {
  return (
    <div>
      <header>
        <div>
          <Link to={'/'}><img alt="logo" src="/logo.png" /></Link>
        </div>

        <ul>
          <li><Link to={'/'}>Accueil</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </header>
      <Outlet />
      <footer>
        <ul>
          <li><Link to={'/'}>Accueil</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </footer>
    </div>
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
