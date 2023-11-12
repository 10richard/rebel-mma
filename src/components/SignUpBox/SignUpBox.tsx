interface SignUpBoxProps {
  headingOne?: string;
  headingTwo: string;
}

const SignUpBox = ({ headingOne, headingTwo }: SignUpBoxProps) => {
  // Be able to put in a custom header - look at strategic mma
  // sign up for a free trial, sign up for your first class, etc.
  return (
    <div className="flex flex-col justify-center place-items-center py-20">
      <div className="w-5/6">
        <div className="grid gap-3 text-center">
          <h2 className="text-3xl font-bold leading-snug">{headingOne}</h2>
          <h1 className="text-[2.8rem] max-[430px]:text-4xl font-bold max-[430px]:leading-snug leading-snug underline underline-offset-8 decoration-seaserpent">
            {headingTwo}
          </h1>
        </div>

        <form
          className="flex flex-col self-center border-2 border-dashed mt-10 min-w-[200px] max-w-[650px] mx-auto min-[540px]:p-14 p-5 py-10 min-[650px]:gap-10 gap-5"
          action="#"
        >
          <div className="form-input flex max-[650px]:flex-col gap-5">
            <div className="flex flex-col gap-1 w-full">
              <label className="self-start text-sm" htmlFor="firstname">
                First Name <span> *</span>
              </label>
              <input
                className="border border-black px-2.5 py-1.5 rounded-lg focus:outline-none"
                type="text"
                id="firstname"
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="self-start text-sm" htmlFor="lastname">
                Last Name <span> *</span>
              </label>
              <input
                className="border border-black px-2.5 py-1.5 rounded-lg focus:outline-none"
                type="text"
                id="lastname"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="form-input flex max-[650px]:flex-col gap-5">
            <div className="flex flex-col gap-1 w-full">
              <label className="self-start text-sm" htmlFor="email">
                Email <span> *</span>
              </label>
              <input
                className="border border-black px-2.5 py-1.5 rounded-lg focus:outline-none"
                type="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label className="self-start text-sm" htmlFor="phone">
                Phone
                <span> *</span>
              </label>
              <input
                className="border border-black px-2.5 py-1.5 rounded-lg focus:outline-none"
                type="tel"
                id="phone"
                placeholder="Phone"
                pattern="[0-9]{10}"
                title="Should only contain ten numbers (no spaces or area code)"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="self-start text-sm" htmlFor="program-of-interest">
              Program of Interest<span> *</span>
            </label>
            <select
              className="border border-black px-2.5 py-1.5 rounded-lg focus:outline-none"
              id="program-of-interest"
              defaultValue={"DEFAULT"}
              required
            >
              <option value="DEFAULT" disabled>
                Select your option
              </option>
              <option value="bjj">BJJ</option>
              <option value="bjj-nogi">BJJ - No Gi</option>
              <option value="boxing">Boxing</option>
              <option value="kickboxing">Kickboxing</option>
              <option value="boxing">Boxing</option>
              <option value="mma">MMA</option>
              <option value="wrestling">Wrestling</option>
              <option value="personal-training">Personal Training</option>
              <option value="strength-conditioning">
                Strength & Conditioning
              </option>
            </select>
          </div>

          <button
            className="w-full mt-5 bg-secondary text-white rounded-lg p-3 hover:brightness-150 hover:-translate-y-1 relative duration-500"
            type="submit"
          >
            Redeem Free Intro Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpBox;
