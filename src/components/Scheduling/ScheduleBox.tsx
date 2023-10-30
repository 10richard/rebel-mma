import { ScheduleList } from "./ScheduleList";
import { useState } from "react";

// Mon - Sat
// Headings: Class (BJJ), Time (8:00pm - 9:00pm), Instructor
// "Reserve Now" btn that redirects to sign up page

const ScheduleBox = () => {
  const [pickedDay, setPickedDay] = useState<string>("monday");

  return (
    <section className="schedule flex justify-center pt-32 pb-20">
      <div className="w-5/6 flex flex-col gap-16">
        <div className="days flex justify-center flex-wrap gap-10">
          {Object.keys(ScheduleList).map((day, idx) => (
            <div
              key={idx}
              className={`px-8 py-2 rounded-3xl border hover:border-seaserpent hover:shadow-md duration-300 cursor-pointer ${
                day == pickedDay ? "bg-seaserpent" : null
              }`}
              onClick={() => setPickedDay(day)}
            >
              <a className="font-bold">{day.toUpperCase()}</a>
            </div>
          ))}
        </div>
        <div className="classes flex flex-col gap-5 text-center">
          {ScheduleList[pickedDay].map((day, idx) => (
            <div
              key={idx}
              className="grid min-[1065px]:grid-cols-4 gap-10 items-center bg-gray-200 px-16 py-10 font-bold"
            >
              <div className="flex flex-col items-center">
                <h1 className="font-normal opacity-50">Class</h1>
                <h2 className="text-xl">{day.name}</h2>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="font-normal opacity-50">Time</h1>
                <h2 className="text-lg min-[380px]:text-xl">{day.time}</h2>
              </div>

              <div className="flex flex-col items-center">
                <h1 className="font-normal opacity-50">Instructor</h1>
                <h2 className="text-xl">{day.instructor}</h2>
              </div>

              <div className="">
                <a
                  className="border text-lg px-4 py-2 rounded-3xl bg-white border-black hover:bg-seaserpent duration-500"
                  href="/signup"
                >
                  Reserve Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleBox;
