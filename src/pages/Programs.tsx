import ProgramsBox from "../components/ProgramsBox/ProgramsBox";
import SignUpBox from "../components/SignUpBox/SignUpBox";
import Banner from "../components/Banner/Banner";

const Programs = () => {
  return (
    <>
      <Banner heading="Our Programs" />
      <ProgramsBox />
      <SignUpBox headingTwo="GET STARTED WITH US NOW" />
    </>
  );
};

export default Programs;
