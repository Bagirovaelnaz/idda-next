'use client';
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";

const breadcrumbs = {
  activity: "Fəaliyyətimiz",
};

const BreadCrumb = () => {
  const pathname = usePathname();
  const breadcrumb = breadcrumbs[pathname?.split("/")[1]];

  return (
    <div className="ml-10">
      <div className="flex items-center text-white text-[12px]">
        <span>Əsas</span>
        <IoIosArrowForward />
        <span>{breadcrumb}</span>
      </div>
      <h1 className="text-white text-[30px] font-semibold">
        {breadcrumb}
      </h1>
    </div>
  );
};

export default BreadCrumb;
