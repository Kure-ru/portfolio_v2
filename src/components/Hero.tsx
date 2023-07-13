const Hero = () => {
  return (
    <section className="hero__container">
    <img className="hero__img" alt='ordinateur et bureau' src='/hero.jpg'/>
    <div className="hero__txt">
      <h1>
        Salut, moi c'est Claire Dochez.
        <br/>
        Bienvenue sur mon portfolio
      </h1>
      <button>
        A propos de moi
      </button>
    </div>
  </section>
  )
}

export default Hero