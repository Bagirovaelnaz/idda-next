import Image from "next/image";
import React from "react";

const NewsSection = () => {
  return (
    <div  className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] ml-auto mr-auto mt-[30px] max-sm:overflow-x-hidden max-[600px]:mt-[-50px]">
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/643/0h7a8055.jpg"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>  
            Azərbaycan və Çin ekspertlərinin iştirakı ilə innovasiya
            ekosistemində imkanlar və çağırışlar müzakirə edilib
          </h2>
        </div>
      </div>
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/644/img-7329.PNG"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi tərəfindən Kənd Təsərrüfatı
            Nazirliyinin rəqəmsallaşma səviyyəsi qiymətləndirilib
          </h2>
        </div>
      </div>{" "}
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/641/img-7304.JPG"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            İRİA rəhbər şəxslər üçün növbəti kibermaarifləndirmə təlimi təşkil
            edib
          </h2>
        </div>
      </div>{" "}
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/642/0h7a9529.jpg"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            “Holberton School Azerbaijan”ın yeni təlim proqramları başladı
          </h2>
        </div>
      </div>{" "}
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/639/img-7294.PNG"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            “mygov” platformasından istifadə edən vətəndaşların sayı 2 milyonu
            ötüb
          </h2>
        </div>
      </div>
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/640/dsc08887-enhanced-nr.jpg"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            Azərbaycan Dövlət Neft və Sənaye Universitetinin tərkibində
            Azərbaycan İnnovasiya Mərkəzi fəaliyyətə başlayıb
          </h2>
        </div>
      </div>{" "}
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/637/9z5a0333.jpg"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            Azərbaycan Dövlət Neft və Sənaye Universitetinin tərkibində
            Azərbaycan İnnovasiya Mərkəzi fəaliyyətə başlayıb
          </h2>
        </div>
      </div>{" "}
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/638/0h7a8264.jpg"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            Afrika ölkələri Azərbaycanın rəqəmsal dövlət məhsullarına böyük
            maraq göstərir
          </h2>
        </div>
      </div>{" "}
      <div className="grid-item">
        <div className="h-[210px]">
          <Image
            src="https://api.idda.az/resized/resize800/center/pages/631/img-7245.PNG"
            alt=""
            width={330}
            height={160}
          />
        </div>
        <div>
          <p>26 Noyabr 2025</p>
          <h2>
            Dövlət qurumları arasında məlumat mübadiləsinin həcmi 2 milyardı
            keçib
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
