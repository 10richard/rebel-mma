import { InfoList } from "./InfoList";

// Academy info
const AcademyInfo = () => {
  return (
    <section className="academy-info flex justify-center py-20">
      <div className="w-5/6 flex flex-col gap-10">
        {/* Our History, Morals and Values, Mission Statement */}
        {InfoList.map((info, idx) => (
          <div
            key={idx}
            className="grid gap-10 items-center min-[1000px]:grid-cols-2"
          >
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold max-[415px]:text-3xl">
                {info.heading}
              </h1>
              <span className="w-[80px] h-[4px] bg-seaserpent mb-4 mt-1"></span>
              <p className="max-[700px]:text-sm">{info.text}</p>
            </div>
            <img
              className="w-full object-cover rounded-xl"
              src={info.image}
              alt={info.heading}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademyInfo;
