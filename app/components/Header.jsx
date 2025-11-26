import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import BreadCrumb from "./BreadCrumb";

export default function Header() {
  return (
    <div className=" px-4 w-full h-[400px] bg-linear-to-t from-sky-500 to-indigo-500 pt-9 md:pt-[48]">
      <div className="c-container flex flex-col gap-16">
        <div className="flex items-center justify-between bg-white rounded-[40px] h-[60px] w-auto p-5">
          <div className="flex gap-4 items-center">
            <Image
              src="https://api.idda.az/resized/resize196/center/pages/1/iria-ufuqi-mavi.png"
              alt="logo-header"
              width={155}
              height={39}
              quality={100}
              unoptimized
            />
            <div className="block w-[1px] h-[33px] md:h-[44px] border-l-[1px] border-black mx-[8px] md:mx-[5px]"></div>
            <Image
              src="https://api.idda.az/resized/resize392/center/pages/1/logo-15-1.png"
              alt="logo-2"
              className="h-[37px] w-[80px]"
              width={60}
              height={50}
              quality={100}
              unoptimized
            />
          </div>

          <div className="flex gap-[53px] ml-[180px] text-[13px] font-semibold leading-none uppercase opacity-80">
            <a href="/haqqimizda">Haqqımızda</a>
            <a href="/activity">Fəaliyyətimiz</a>
            <a href="/xeberler">Xəbərlər</a>
            <a href="/karyera">Karyera</a>
            <a href="/elaqe">Əlaqə</a>
          </div>

          <div className="flex items-center">
            <div className="flex items-center border-none rounded-full bg-[#F0F3FA] h-[30px] w-[30px] ml-10 justify-center">
              <IoIosSearch />
            </div>

            <button className="burger hidden bg-none border-none cursor-pointer ml-2"></button>
          </div>
        </div>
        <BreadCrumb />
      </div>
    </div>
  );
}
