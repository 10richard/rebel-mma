import logo from "../../assets/rebelmma-logo.png";
import twitterLogo from "../../assets/socials/twitter.svg";
import instagramLogo from "../../assets/socials/instagram.svg";
import youtubeLogo from "../../assets/socials/youtube.svg";
import facebookLogo from "../../assets/socials/facebook.svg";

const Footer = () => {
  return (
    <footer className="footer flex justify-center py-24 bg-white">
      {/* Programs, Working Hours, More - (About) */}
      <div className="w-5/6 flex items-center min-[1020px]:justify-between max-[1020px]:flex-col max-[1020px]:gap-20">
        <div className="flex flex-col items-center gap-2 min-[1020px]:-mt-28 -mt-10">
          <img className="max-w-[275px]" src={logo} alt="RebelMMA logo" />
          <div className="social-links flex items-center gap-5">
            <a className="p-2.5 bg-gray-200 rounded-full border-2 hover:border-seaserpent hover:scale-110 duration-500 cursor-pointer">
              <img
                className="w-[23px]"
                src={facebookLogo}
                alt="Facebook logo"
              />
            </a>
            <a className="p-2.5 bg-gray-200 rounded-full border-2 hover:border-seaserpent hover:scale-110 duration-500 cursor-pointer">
              <img
                className="w-[23px]"
                src={instagramLogo}
                alt="Instagram logo"
              />
            </a>
            <a className="p-2.5 bg-gray-200 rounded-full border-2 hover:border-seaserpent hover:scale-110 duration-500 cursor-pointer">
              <img className="w-[23px]" src={twitterLogo} alt="Twitter logo" />
            </a>
            <a className="p-2.5 bg-gray-200 rounded-full border-2 hover:border-seaserpent hover:scale-110 duration-500 cursor-pointer">
              <img className="w-[23px]" src={youtubeLogo} alt="Youtube logo" />
            </a>
          </div>
        </div>

        <div className="flex w-8/12 justify-around max-[1020px]:flex-col max-[1020px]:gap-16 max-[1020px]:self-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Our Programs</h1>
            <span className="w-[80px] h-[4px] bg-seaserpent mb-4 mt-1"></span>
            <div className="grid gap-5">
              <p className="hover:text-seaserpent cursor-pointer">
                Martial Arts
              </p>
              <p className="hover:text-seaserpent cursor-pointer">
                Personal Training
              </p>
              <p className="hover:text-seaserpent cursor-pointer">
                Strength & Conditioning
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Working Hours</h1>
            <span className="w-[80px] h-[4px] bg-seaserpent mb-4 mt-1"></span>
            <div className="grid gap-5">
              <div>
                <p className="font-bold mb-1">Monday - Friday:</p>
                <p>6AM - 9:30PM</p>
              </div>
              <div>
                <p className="font-bold mb-1">Saturday:</p>
                <p>9AM - 12:45PM</p>
              </div>
              <p className="font-bold">Sunday - Closed</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
