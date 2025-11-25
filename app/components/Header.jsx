import Image from "next/image";
export default function Header() {
  return (
    <div className="flex items-center justify-between bg-white rounded-[40px] font-poppins absolute z-10 h-[70px] p-[25px] top-[40px] left-1/2 -translate-x-1/2">
    <div className="flex gap-4">
      <Image
        src="https://api.idda.az/resized/resize392/center/pages/1/iria-ufuqi-mavi.png"
        alt="logo-header"
        className="h-[37px] w-[80px]"
        width={60}
        height={50}
      />
      <div className="w-[1px] h-9 bg-black"></div>
      <Image
        src="https://api.idda.az/resized/resize392/center/pages/1/logo-15-1.png"
        alt="logo-2"
        className="h-[37px] w-[80px]"
        width={60}
        height={50}
      />
    </div>
  
    <div className="flex gap-[53px] ml-[80px] text-[13px] font-semibold uppercase opacity-80">
      <a href="/haqqimizda">Haqqımızda</a>
      <a href="/fealiyyet">Fəaliyyətimiz</a>
      <a href="/xeberler">Xəbərlər</a>
      <a href="/karyera">Karyera</a>
      <a href="/elaqe">Əlaqə</a>
    </div>
  
    <div className="flex items-center">
      <button className="border-none rounded-full bg-[#F0F3FA] h-[30px] w-[30px] ml-10">
      </button>
  
      <button className="burger hidden bg-none border-none cursor-pointer ml-2">
      </button>
    </div>
  </div>
  
  );
}
