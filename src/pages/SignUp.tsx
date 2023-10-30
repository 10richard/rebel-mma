import Banner from "../components/Banner/Banner";
import GoogleMaps from "../components/GoogleMaps/GoogleMaps";
import SignUpBox from "../components/SignUpBox/SignUpBox";

const SignUp = () => {
  return (
    <>
      <Banner heading="Sign Up" />
      <div className="grid min-[1200px]:grid-cols-2 items-center">
        <SignUpBox headingOne="FREE TRIAL" headingTwo="TAKE THE FIRST STEP" />
        <GoogleMaps />
        {/* <div className="min-[1200px]:h-[450px] px-10">
          <img
            className="object-cover h-full rounded-xl border-2 border-primary shadow-lg"
            src={runningImg}
            alt="Person running on treadmill"
          />
        </div> */}
      </div>
    </>
  );
};

export default SignUp;
