import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer>
        <ul className="footer__links">
          <li><Link to={'/'}>Accueil</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/skills'}>Compétences</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </footer>
  )
}

export default Footer