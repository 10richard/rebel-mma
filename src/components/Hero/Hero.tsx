import React from "react";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text absolute top-1/3 right-1/2 z-10 w-[550px] text-white">
          <h1 className="font-bold text-6xl mb-5">
            Rebel Against Ordinary Fitness
          </h1>
          <p className="mb-10">Join the #1 martial arts gym in NJ</p>
          <a
            className="bg-seaserpent text-xl text-black p-6 py-3 rounded-xl brightness-75 hover:brightness-100 duration-300"
            href="/signup"
          >
            JOIN NOW
          </a>
        </div>

        <img
          className="hero-bg-img h-[100vh] w-full object-cover brightness-[0.3]"
          src={HeroImg}
          alt="BJJ no-gi practice"
        />
      </div>
    </section>
  );
};

export default Hero;
