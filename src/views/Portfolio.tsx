const Portfolio = () => {
  return (
    <main className="portfolio">
      <section className="portfolio__top">
        <h1 className="portfolio__title">Portfolio</h1>
        <p>Voici mes projets récents</p>
      </section>
      {/* projet 1 */}
      <section className="portfolio__container project--odd">
        <div>
          <img className="portfolio__img" src="/project1.png" alt="CommuniLearn" />
        </div>
        <div className="container__text">
          <h2>CommuniLearn</h2>
          <p> J'ai travaillé sur CommuniLearn, une plateforme d'apprentissage en ligne qui vise à rendre l'éducation accessible à tous. Axée sur la communauté, la collaboration et l'apprentissage personnalisé, CommuniLearn offre un environnement flexible et inclusif aux étudiants pour explorer diverses matières, se connecter avec des enseignants passionnés et participer à des expériences d'apprentissage interactives.</p>
          <p className="portfolio__tech">Développement Full Stack <br />
            React, Node.js, MongoDB</p>
          <div className="portfolio__button">
            <a href="https://communilearn.onrender.com/">
              <button>voir le site</button></a>
            <a href="https://github.com/Kure-ru/CommuniLearn">
              <button>voir le code</button></a>
          </div>
        </div>
      </section>

 {/* projet 2 */}
 <section className="portfolio__container project--even">
        <div>
          <img className="portfolio__img" src="/projet5.png" alt="GreenConnect" />
        </div>
        <div className="container__text">
          <h2>GreenConnect</h2>
          <p> GreenConnect est un projet axé sur la création de groupes environnementaux en ligne, permettant aux utilisateurs de se connecter, de rejoindre des groupes et de participer à des discussions sur des sujets environnementaux. Il vise à faciliter l'engagement communautaire et à promouvoir des actions positives pour l'environnement.</p>
          <p className="portfolio__tech">Développement Full Stack <br />
         z   Vue, Node.js, MongoDB</p>
          <div className="portfolio__button">
            <a href="https://greenconnect-hitf.onrender.com/">
              <button>voir le site</button></a>
            <a href="https://github.com/Kure-ru/GreenConnect">
              <button>voir le code</button></a>
          </div>
        </div>
      </section>


      {/* projet 3 */}
      <section className="portfolio__container project--odd">

      <div>
          <img className="portfolio__img" src="/project2.gif" alt="Fashion Forward" />
        </div>
        
        <div className="container__text">
          <h2>Fashion Forward</h2>
          <p>
            FashionForward est un projet de panier d'achat développé en utilisant React et JavaScript. Il permet aux utilisateurs de parcourir et de sélectionner des articles, de choisir leur taille préférée et de les ajouter au panier. La page de paiement affiche le prix total des articles sélectionnés et le nombre d'articles dans le panier est mis à jour en temps réel.</p>
          <p className="portfolio__tech">Développement Full Stack <br />
            React, JavaScript, React Router</p>
          <div className="portfolio__button">
            <a href="https://shopping-cart-amber-eight.vercel.app/"><button>voir le site </button></a>
            <a href="https://github.com/Kure-ru/FashionForward"><button>voir le code</button></a>
          </div>
        </div>
       
      </section>
      {/* projet 4 */}
      <section className="portfolio__container project--even">
        <div>
          <img className="portfolio__img" src="/project3.png" alt="Mon CV facile" />
        </div>
        <div className="container__text">
          <h2>Mon CV facile</h2>
          <p>J'ai travaillé sur "Mon CV facile", un projet qui vise à simplifier la création de CV professionnels. Cette application web permet aux utilisateurs de créer leur CV en quelques étapes seulement, en mettant l'accent sur la simplicité et l'accessibilité.</p>
          <p className="portfolio__tech">
            React, Typescript</p>
          <div className="portfolio__button">
            <a href="https://cv-application-ten.vercel.app/">
              <button>voir le site</button></a>
            <a href="https://github.com/Kure-ru/CV_Application">
              <button>voir le code</button></a>
          </div>
        </div>
      </section>

      {/* projet 5 */}
      <section className="portfolio__container project--odd">

      <div>
          <img className="portfolio__img" src="/project4.png" alt="Stardew Valley memory game" />
        </div>

        <div className="container__text">
          <h2>Stardew Valley Memory Game</h2>
          <p>
            Ce code implémente un jeu de mémoire basé sur l'un de mes jeux préférés, Stardew Valley. Le jeu affiche un ensemble de cartes, chacune avec le nom et la photo d'un personnage. Si le joueur clique sur une carte sur laquelle il a déjà cliqué, le jeu est terminé. Si le joueur clique sur toutes les cartes sans faire d'erreur, il remporte la partie.</p>
          <p className="portfolio__tech">
            React, Typescript</p>

          <div className="portfolio__button">
            <a href="https://memory-card-chi.vercel.app/">
              <button>voir le site</button></a>
            <a href="https://github.com/Kure-ru/Memory-Card">
              <button>voir le code</button></a>
          </div>


        </div>
       
      </section>
    </main>
  )
}

export default Portfolio