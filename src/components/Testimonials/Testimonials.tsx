import fiveStarRating from "../../assets/testimonials/five-stars.svg";
import googleLogo from "../../assets/testimonials/google-logo.png";

const Testimonials = () => {
  const Testimonials = [
    {
      customer_name: "Alex R.",
      review:
        "Training at RebelMMA has been an incredible experience. The dedication of the coaches to each student's growth is truly commendable. They push you to your limits while fostering a supportive and inclusive atmosphere.",
    },
    {
      customer_name: "Jordan M.",
      review:
        "RebelMMA has become my second home. The state-of-the-art facilities, combined with the expert guidance of the coaches, have allowed me to hone my skills and push my boundaries beyond what I thought was possible.",
    },
  ];

  return (
    <section className="testiomonials flex justify-center py-20 bg-black">
      <div className="w-5/6 text-center flex flex-col gap-20">
        <h1 className="text-5xl max-[400px]:text-4xl text-white font-bold underline underline-offset-8 decoration-seaserpent leading-snug">
          Voices of Our Students
        </h1>

        <div className="flex flex-wrap justify-around gap-10">
          {Testimonials.map((testimonial) => (
            <div className="flex justify-center items-center gap-10 max-w-[550px] bg-white p-4 rounded-lg border-l-secondary border-l-[5.5px]">
              <img
                className="self-start w-[40px]"
                src={googleLogo}
                alt="Google logo"
              />

              <div className="flex flex-col gap-10 max-w-[375px]">
                <p className="text-sm">"{testimonial.review}"</p>
                <div className="flex justify-around">
                  <h1 className="text-xl">{testimonial.customer_name}</h1>
                  <img className="w-[125px]" src={fiveStarRating} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;