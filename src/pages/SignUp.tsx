import Banner from "../components/Banner/Banner";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import SignUpBox from "../components/SignUpBox/SignUpBox";

const SignUp = () => {
  return (
    <>
      <Banner heading="Sign Up" />
      <div className="grid min-[1200px]:grid-cols-2 items-center">
        <SignUpBox
          headingOne="FREE TRIAL CLASS"
          headingTwo="TAKE THE FIRST STEP"
        />
        <GoogleMaps />
      </div>
    </>
  );
};

export default SignUp;
