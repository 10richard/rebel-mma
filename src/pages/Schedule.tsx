// Mon - Sat
// Headings: Class (BJJ), Time (8:00pm - 9:00pm), Instructor
// "Reserve Now" btn that redirects to sign up page

import Banner from "../components/Banner/Banner";
import CtaBanner from "../components/CtaBanner/CtaBanner";
import ScheduleBox from "../components/Scheduling/ScheduleBox";

const Schedule = () => {
  return (
    <>
      <Banner heading="Schedule" />
      <ScheduleBox />
      <CtaBanner />
    </>
  );
};

export default Schedule;
