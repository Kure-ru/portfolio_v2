
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Portfolio from './views/Portfolio';
import Contact from './views/Contact';
import Skills from './views/Skills';
import Header from './components/Header';
import Footer from './components/Footer';

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
      <Footer/>
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
