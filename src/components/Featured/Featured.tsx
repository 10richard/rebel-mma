import React from "react";
import bjj from "../../assets/featured-classes/bjj.jpeg";
import boxing from "../../assets/featured-classes/boxing.jpeg";
import mma from "../../assets/featured-classes/mma.jpg";
import wrestling from "../../assets/featured-classes/wrestling.webp";

const Featured = () => {
  const FeaturedPrograms = [
    {
      name: "BJJ",
      altText: "Featured BJJ class",
      img: bjj,
      position: "col-start-1 col-end-2",
    },
    {
      name: "Boxing",
      altText: "Featured Boxing class",
      img: boxing,
      position: "col-start-2 col-end-4",
    },
    {
      name: "MMA",
      altText: "Featured MMA class",
      img: mma,
      position: "col-start-1 col-end-3",
    },
    {
      name: "Wrestling",
      altText: "Featured Wrestling class",
      img: wrestling,
      position: "col-start-3 col-end-4",
    },
  ];

  return (
    <section className="featured-programs flex flex-col items-center justify-center gap-10 py-20">
      <h1 className="text-5xl font-bold text-center">Featured Programs</h1>

      <div className="grid grid-col-3 w-5/6 gap-2">
        {FeaturedPrograms.map((program) => (
          // a links to Programs page and section of chosen class
          <div
            className={`${program.position} bg-black h-[300px] border-secondary border-2 relative group overflow-hidden`}
          >
            <a href="/programs">
              {/*href=`/programs#{program.name}`*/}
              <img
                className="object-cover h-full w-full opacity-50 duration-700 group-hover:scale-110 group-hover:opacity-100"
                src={program.img}
                alt={program.altText}
              />
              <h1 className="absolute font-bold text-3xl bottom-[20px] left-[10px] text-white">
                {program.name}
              </h1>
            </a>
          </div>
        ))}

        <a
          className="text-center text-lg text-white col-span-3 bg-primary py-2 hover:bg-seaserpent hover:text-black duration-500 rounded-xl"
          href="/programs"
        >
          SEE MORE
        </a>
      </div>
    </section>
  );
};

export default Featured;
