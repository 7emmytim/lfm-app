import heroSectionBackground from "@/public/images/home/banner-img.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-11/12 mx-auto mt-5 xl:mt-20 gap-10">
      <div>
        <Image
          height={heroSectionBackground.height}
          width={heroSectionBackground.width}
          src={heroSectionBackground.src}
          alt="hero section background"
        />
      </div>
      <div className="w-11/12 mx-auto space-y-5 xl:space-y-10 px-10">
        <h3 className="font-bold text-3xl xl:text-5xl text-[#2E266F] leading-[3rem] xl:leading-[4rem]">
          Enjoy healthy, tasty homemade meals everyday
        </h3>
        <p className="text-[#1F1F1F] capitalize text-xs xl:text-base font-light leading-[2rem] xl:leading-[2.4rem]">
          We understand the importance of healthy and nutritious meals and we
          believe that You eat to live and not the other way round. We offer a
          wide variety of nutritious, home-made and tasty meals, prepared to
          excite your taste buds and meet your unique needs.
        </p>
      </div>
    </div>
  );
};

export default Banner;
