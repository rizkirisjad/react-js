/** @format */

import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            excepturi sit consequatur porro suscipit error aperiam placeat ipsam
            atque eveniet quo mollitia iure possimus, molestias voluptatum totam
            nulla, optio vero incidunt! Dolore quos harum deserunt, voluptatem
            quod ducimus deleniti perspiciatis velit amet. Omnis mollitia fuga
            voluptate repellat officia animi aliquid!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
