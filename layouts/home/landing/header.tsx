import Image from "next/image";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi";
import logoHeader from "@/public/images/home/logo-header.png";

const Header = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center m-auto w-10/12 h-32">
      <Link href="/">
        <Image
          src={logoHeader.src}
          width={133}
          height={42}
          className="mb-3"
          alt="life meal logo"
        />
      </Link>
      <div className="hidden md:flex items-center lg:order-2 gap-6 xl:gap-10">
        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className="text-[#2E266F] font-medium text-xs xl:text-base"
          >
            Partner Cook?{" "}
          </Link>
          <HiOutlineChevronRight className="text-[#2E266F]" />
        </div>
        <Link href="auth/sign-in">
          <button className="custom-offset-button py-4 px-10 rounded-[10px] text-white bg-[#FF7A00] relative inline-block font-semibold text-xs xl:text-base">
            Login
          </button>
        </Link>
      </div>
      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col font-medium lg:flex-row gap-8 xl:gap-20">
          {["Why Lifemeal?", "How it Works", "About Us", "Contact Us"].map(
            (item) => {
              return (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-[#2E266F] font-medium text-xs xl:text-base"
                  >
                    {item}
                  </Link>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
