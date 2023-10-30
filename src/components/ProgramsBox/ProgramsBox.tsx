import { Programs } from "./ProgramsList";

const ProgramsBox = () => {
  return (
    <section className="programs flex justify-center">
      <div className="flex flex-col">
        {Programs.map((program, idx) => (
          <div
            key={idx}
            className={`flex justify-center overflow-hidden ${
              (idx + 1) % 2 == 0 ? "bg-black text-white" : null
            }`}
          >
            <div className="grid max-[850px]:hidden min-[850px]:grid-cols-2 min-[850px]:h-[500px]">
              <img
                className={`${
                  (idx + 1) % 2 == 0 ? "hidden" : null
                } h-full object-cover`}
                src={program.image}
                alt="RebelMMA program"
              />

              <div className="flex flex-col px-16 min-[850px]:mt-20 my-16">
                <h1 className="font-bold text-3xl">{program.name}</h1>
                <span className="w-[80px] h-[4px] bg-seaserpent mb-4 mt-1"></span>
                <p>{program.desc}</p>
              </div>

              <img
                className={`${
                  (idx + 1) % 2 == 0 ? null : "hidden"
                } h-full object-cover`}
                src={program.image}
                alt="RebelMMA program"
              />
            </div>

            {/* FOR SMALLER SCREENS */}
            <div className="grid w-full overflow-hidden min-[850px]:hidden">
              <img
                className="w-full object-cover h-[50vh]"
                src={program.image}
                alt="RebelMMA program"
              />

              <div className="flex flex-col text-center px-10 my-16">
                <h1 className="font-bold text-3xl">{program.name}</h1>
                <span className="self-center w-[80px] h-[4px] bg-seaserpent mb-4 mt-1"></span>
                <p className="text-sm">{program.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsBox;
