import React from "react";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text absolute z-10 top-1/3 left-[10%] text-white">
          <h1 className="font-bold text-4xl min-[650px]:text-6xl mb-5 min-[650px]:w-[550px] w-[315px]">
            Rebel Against Ordinary Fitness
          </h1>
          {/* Add a breakpoint similar to Strategic Academy */}
          <p className="mb-10">Join the #1 martial arts gym in NJ</p>
          <a
            className="bg-seaserpent text-lg text-black px-5 py-2.5 rounded-xl brightness-75 hover:brightness-100 duration-300"
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
