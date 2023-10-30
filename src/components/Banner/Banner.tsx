import banner from "../../assets/banner.jpeg";

// On top of other pages, similar to gymate

interface BannerProps {
  heading: string;
}

const Banner = ({ heading }: BannerProps) => {
  return (
    <section className="banner w-full h-[30vh] mb-16">
      <div className="relative text-center">
        <h1 className="text-white absolute z-10 w-full bottom-10 font-bold text-4xl">
          {heading}
        </h1>
        <img
          className="h-[40vh] w-full object-cover brightness-[0.25]"
          src={banner}
          alt="Banner"
        />
      </div>
    </section>
  );
};

export default Banner;
