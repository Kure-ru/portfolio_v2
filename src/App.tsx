
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Portfolio from './views/Portfolio';

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} /> 
        </Route>
      </Routes>

    </>
  )
}

function Layout() {
  return (
    <div>
      <header>
        <ul>
          <li><img alt="logo" src="/logo.png" /></li>
          <li><Link to={'/'}>Accueil</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </header>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}

export default App
