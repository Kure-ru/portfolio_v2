import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)


    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])
    return (

        <header>
            <div>
                <Link to={'/'}><img alt="logo" src="/logo.png" /></Link>
            </div>
            {(toggleMenu || screenWidth > 500) && (
            <ul className="list">
                <li className="items"><Link onClick={toggleNav} to={'/'}>Accueil</Link></li>
                <li className="items"><Link onClick={toggleNav} to={'/portfolio'}>Portfolio</Link></li>
                <li className="items"><Link onClick={toggleNav} to={'/skills'}>Compétences</Link></li>
                <li className="items"><Link onClick={toggleNav} to={'/contact'}>Contact</Link></li>
            </ul>
            
            )}
             <AiOutlineMenu onClick={toggleNav} className="btn"/>
        </header>
    )
}

export default Header