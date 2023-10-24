import grapplingCoach from "../../assets/instructors/grappling.png";
import strikingCoach from "../../assets/instructors/striking.png";
import conditioningCoach from "../../assets/instructors/conditioning.png";

const Instructors = () => {
  interface CoachInfo {
    name: string;
    title: string;
    img: string;
  }

  const Coaches: CoachInfo[] = [
    { name: "Matt Serra", title: "Grappling Coach", img: grapplingCoach },
    { name: "Dan Jackson", title: "Striking Coach", img: strikingCoach },
    {
      name: "Charles Poliquin",
      title: "Conditioning Coach",
      img: conditioningCoach,
    },
  ];
  return (
    <section className="instructors flex justify-center py-20">
      <div className="w-5/6 text-center flex flex-col gap-16">
        <h1 className="max-[430px]:text-4xl text-5xl font-bold underline underline-offset-8 decoration-seaserpent max-[430px]:leading-snug leading-snug">
          Learn from Champions
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {Coaches.map((coach: CoachInfo) => (
            <div className="group shadow-lg rounded-2xl max-w-[375px] overflow-hidden">
              <img
                className="grayscale group-hover:grayscale-0 group-hover:bg-secondary/60 duration-300"
                src={coach.img}
                alt={`Coach ${coach.name}`}
              />
              <div className="p-5">
                <h2 className="text-3xl font-bold mb-2">{coach.name}</h2>
                <p className=" group-hover:text-secondary/60 duration-300">
                  {coach.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
