"use client";
import Image from "next/image";
import { IoIosMenu, IoIosSearch, IoMdClose } from "react-icons/io";
import BreadCrumb from "./BreadCrumb";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className=" px-4 h-[400px] bg-linear-to-t from-sky-500 to-indigo-500 pt-9 md:pt-[48]">
      <div className="c-container flex flex-col gap-16 max-md:text-[14px]">
        <div className="flex items-center justify-between bg-white rounded-[40px] h-[60px] w-auto p-5">
          <div className="flex gap-4 items-center max-[660px]:gap-0">
            <Image
              src="https://api.idda.az/resized/resize196/center/pages/1/iria-ufuqi-mavi.png"
              alt="logo-header"
              width={155}
              height={39}
              quality={100}
              unoptimized
              className="logo"
            />
            <div className="block w-[1px] h-[33px] md:h-[44px] border-l-[1px] border-black mx-[8px] md:mx-[5px]"></div>
            <Image
              src="https://api.idda.az/resized/resize392/center/pages/1/logo-15-1.png"
              alt="logo-2"
              className="logo"
              width={60}
              height={50}
              quality={100}
              unoptimized
                />
          </div>

          <div
            className={`
    links 
    hidden sm:flex 
    gap-[53px] ml-[180px] 
    text-[13px] font-semibold leading-none uppercase opacity-80
    max-[1000px]:text-[12px] 
    max-[800px]:text-[10px] max-[800px]:ml-5

    ${
      open
        ? `max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center
           absolute top-[80px] right-5
           bg-white p-3 gap-5 rounded-[14px]
           w-[180px] shadow-[0_4px_12px_rgba(0,0,0,0.15)]
           z-[9999] 
           sm:hidden
        `
        : "max-[600px]:hidden"
    }
  `}
          >
            <a href="/haqqimizda">Haqqımızda</a>
            <a href="/activity">Fəaliyyətimiz</a>
            <a href="/news">Xəbərlər</a>
            <a href="/karyera">Karyera</a>
            <a href="/elaqe">Əlaqə</a>
          </div>
          <div className="flex items-center">
            <div className="flex items-center border-none rounded-full bg-[#F0F3FA] h-[30px] w-[30px] ml-10 justify-center">
              <IoIosSearch />
            </div>

            <button
              className="burger hidden max-[600px]:block bg-none border-none cursor-pointer ml-2"
              onClick={() => setOpen(!open)}
            >
              {open ? <IoMdClose size={24} /> : <IoIosMenu size={24} />}
            </button>
          </div>
        </div>
        <BreadCrumb />
      </div>
    </div>
  );
}
