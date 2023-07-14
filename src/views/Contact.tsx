import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { FaDev } from "react-icons/fa"
const Contact = () => {
    return (
        <main className="contact">

<section className="contact__middle">
<h1 className="contact__title">Envie de faire un projet ensemble ?</h1>
            <p>Vous souhaitez collaborer ou vous avez besoin d'un développeur web ? Contactez-moi à l'adresse clairedochez@gmail.com !</p>
    <h2>Vous pouvez aussi me contacter sur...</h2>
    <ul className="socials__container">
        <li>
            <a href="https://twitter.com/claire_dochez"><AiFillTwitterCircle/></a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/claire-inada/"><AiFillLinkedin/></a>
        </li>
        <li>
            <a href="https://dev.to/kureru"><FaDev/></a>
        </li>
        <li>
            <a href="https://github.com/Kure-ru"><AiFillGithub/></a>
        </li>
    </ul>
        

</section>

        </main>
    )
}

export default Contact