import ctaBackground from "../../assets/cta-banner.jpeg";

const CtaBanner = () => {
  return (
    <section className="cta-banner bg-red-600">
      <div className="cta-container h-[35vh] relative">
        <div className="cta-text absolute text-white font-bold z-10 left-[8%] top-[20%]">
          <h1 className="text-4xl max-[540px]:text-3xl mb-3">
            Have Any Questions?
          </h1>
          <h2 className="text-3xl max-[540px]:text-2xl">
            <span className="text-seaserpent">Contact:</span> (123) 456-7890
          </h2>
        </div>

        <img
          className="h-[35vh] w-full object-cover brightness-[0.3]"
          src={ctaBackground}
          alt="Call to action background image"
        />
      </div>
    </section>
  );
};

export default CtaBanner;
