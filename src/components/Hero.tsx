import { useRef } from 'react';

const Hero = () => {

  const ref = useRef(null);

  const handleClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="hero__container">
      <img className="hero__img" alt='ordinateur et bureau' src='/hero.jpg' />
      <div className="hero__txt">
        <h1>
          Bonjour, moi c'est Claire!
          <br />
          Bienvenue sur mon portfolio
        </h1>
        <button
          onClick={handleClick}
        >A propos de moi
        </button>
      </div>
      <div ref={ref}></div>
    </section>
  )
}

export default Hero