import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Instructors from "../components/Instructors/Instructors";
import Testimonials from "../components/Testimonials/Testimonials";
import SignUpBox from "../components/SignUpBox/SignUpBox";

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
    </>
  );
};

export default Home;
