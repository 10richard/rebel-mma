import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Instructors from "../components/Instructors/Instructors";
import Testimonials from "../components/Testimonials/Testimonials";
import SignUpBox from "../components/SignUpBox/SignUpBox";
import CtaBanner from "../components/CtaBanner/CtaBanner";

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Instructors />
      <Testimonials />
      <SignUpBox
        headingOne="CONQUER YOUR GOALS TODAY"
        headingTwo="SIGN UP FOR YOUR FIRST CLASS"
      />
      <CtaBanner />
    </>
  );
};

export default Home;
