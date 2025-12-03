const posts = [
    [
      {
        img: "https://api.idda.az/resized/resize800/center/pages/643/0h7a8055.jpg",
        date: "26 Noyabr 2025",
        text: "Azərbaycan və Çin ekspertlərinin iştirakı ilə innovasiya ekosistemində imkanlar və çağırışlar müzakirə edilib"
      },
      {
        img: "https://api.idda.az/resized/resize800/center/pages/644/img-7329.PNG",
        date: "26 Noyabr 2025",
        text: "Rəqəmsal İnkişaf və Nəqliyyat Nazirliyi tərəfindən Kənd Təsərrüfatı Nazirliyinin rəqəmsallaşma səviyyəsi qiymətləndirilib"
      }
    ],
    [
      {
        img: "https://api.idda.az/resized/resize800/center/pages/641/img-7304.JPG",
        date: "26 Noyabr 2025",
        text: "İRİA rəhbər şəxslər üçün növbəti kibermaarifləndirmə təlimi təşkil edib"
      },
      {
        img: "https://api.idda.az/resized/resize800/center/pages/642/0h7a9529.jpg",
        date: "26 Noyabr 2025",
        text: "“Holberton School Azerbaijan”ın yeni təlim proqramları başladı"
      }
    ],
    [
      {
        img: "https://api.idda.az/resized/resize800/center/pages/639/img-7294.PNG",
        date: "26 Noyabr 2025",
        text: "“mygov” platformasından istifadə edən vətəndaşların sayı 2 milyonu ötüb"
      },
      {
        img: "https://api.idda.az/resized/resize800/center/pages/640/dsc08887-enhanced-nr.jpg",
        date: "26 Noyabr 2025",
        text: "Azərbaycan Dövlət Neft və Sənaye Universitetinin tərkibində Azərbaycan İnnovasiya Mərkəzi fəaliyyətə başlayıb"
      }
    ],
    [
      {
        img: "https://api.idda.az/resized/resize800/center/pages/637/9z5a0333.jpg",
        date: "26 Noyabr 2025",
        text: "Azərbaycan Dövlət Neft və Sənaye Universitetinin tərkibində Azərbaycan İnnovasiya Mərkəzi fəaliyyətə başlayıb"
      },
      {
        img: "https://api.idda.az/resized/resize800/center/pages/638/0h7a8264.jpg",
        date: "26 Noyabr 2025",
        text: "Afrika ölkələri Azərbaycanın rəqəmsal dövlət məhsullarına böyük maraq göstərir"
      }
    ],
    [
      {
        img: "https://api.idda.az/resized/resize800/center/pages/631/img-7245.PNG",
        date: "26 Noyabr 2025",
        text: "Dövlət qurumları arasında məlumat mübadiləsinin həcmi 2 milyardı keçib"
      }
    ]
  ];
  
  
  export async function GET() {
    return Response.json(posts);3
  }
  
  
  