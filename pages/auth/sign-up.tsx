import signInBackground from "@/public/images/auth/sign-up-bg.png";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="relative">
        <Image src={signInBackground.src} fill alt="Sign in page" />
      </div>
      <div className="rounded-r-[40px] flex items-center overflow-auto">
        <div className="w-2/3 mx-auto text-center">
          <h1 className="text-[#2E266F] font-bold text-2xl">
            Do you want to collaborate with us to provide healthy, tasty and
            home-made meals?
          </h1>
          <p className="text-[#2E266F] text-sm mt-5">
            Fill in your details below and let’s get started!
          </p>
          <div className="mt-14 flex items-center justify-between w-3/4">
            <p className="text-sm text-[#2E266F]"></p>
            <button className="bg-[#FF7A00] rounded-[10px] font-semibold text-[13px] text-white py-[18px] px-10">
              Next
            </button>
          </div>
          <div className="mt-[50px] text-sm text-[#2E266F]">
            <span>Already have an account?</span>
            <button className="font-semibold ml-2" id="signIn">
              <Link href="/auth/sign-in">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
