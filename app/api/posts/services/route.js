// app/api/services/route.js
export async function GET() {
    const services = [
      {
        img: "https://api.idda.az/storage/pages/248/mygov-main-page.svg",
        title: "mygov",
        desc: "Artıq fiziki müraciətlər, uzun növbələr və kağız sənədlərlə bağlı çətinliklər keçmişdə qaldı. mygov sayəsində bütün bu proseslər onlayn, sürətli və rahat şəkildə həll edilir.",
        link: "https://my.gov.az/"
      },
      {
        img: "https://api.idda.az/resized/resize624/center/pages/333/dijital-bridgeee.png",
        title: "digital.bridge",
        desc: "“digital.bridge” dövlət və özəl qurumlar arasında təhlükəsiz və səmərəli inteqrasiyanı təmin edən, informasiya axınını “bir dəfə məlumat” prinsipi əsasında standartlaşdıran və təkrarlanan məlumat girişinə ehtiyacı aradan qaldıran milli məlumat mübadiləsi platformasıdır.",
        link: "https://my.gov.az/"
      },
      {
        img: "https://api.idda.az/resized/resize624/center/pages/249/mygov-id-main-page.png",
        title: "mygov ID",
        desc: "mygov ID dövlət və özəl qurumlar tərəfindən təqdim olunan elektron xidmətlərə vahid giriş imkanı verən rəqəmsal identifikasiya sistemidir.",
        link: "https://my.gov.az/"
      },
      {
        img: "https://api.idda.az/storage/pages/251/digimate-main-page.svg",
        title: "digiMATE",
        desc: "Azərbaycanda xüsusi olaraq Kiçik və Orta Bizneslərə (KOB-lar) uyğunlaşdırılmış digiMATE biznesinizin rəqəmsal dünyadakı mövqeyini müəyyən etməyə imkan yaradır.",
        link: "https://my.gov.az/"
      },
      {
        img: "https://api.idda.az/resized/resize624/center/pages/336/open-data12.png",
        title: "Açıq Məlumatlar",
        desc: "Açıq məlumatlar hökumətlər və digər qurumlar tərəfindən heç bir məhdudiyyət olmadan ictimaiyyətə təqdim edilən, geniş istifadə imkanlarına sahib məlumatlardır. Bu məlumatlar innovasiya proseslərini sürətləndirərək, məlumat əsaslı qərarların qəbulunu asanlaşdırır.",
        link: "https://my.gov.az/"
      },
      {
        img: "https://api.idda.az/resized/resize624/center/pages/334/digital-finance-0.png",
        title: "digital.finance",
        desc: "“digital.finance” layihəsi, maliyyə təşkilatlarına dövlət informasiya ehtiyatlarına elektron çıxış imkanı yaradır, vətəndaş məlumatlarının vahid sistemdə toplanmasını və onların sürətli təhlilini təmin edərək sənədlərin rəqəmsal əldə olunmasını asanlaşdırır.",
        link: "https://my.gov.az/"
      },
      {
        img: "https://api.idda.az/storage/pages/261/rsd-main-page.svg",
        title: "Rəqəmsal Sənəd Dövriyyəsi",
        desc: "Rəqəmsal Sənəd Dövriyyəsi (RSD) dövlət qurumları arasında sənədlərin elektron mübadiləsini təmin edən altsistemdir və bu, sənəd dövriyyəsini daha səmərəli edərək kağız istifadəsini minimuma endirir, eyni zamanda qurumlararası məlumat mübadiləsini asanlaşdırır.",
        link: "https://my.gov.az/"
      },
      {
        img: "https://api.idda.az/resized/resize624/center/pages/546/digital-leadership-01.png",
        title: "digital.leadership",
        desc: "digital.leadership proqramı rəqəmsal hökumətə sürətli keçidin təmin edilməsini, rəqəmsal hökumət və rəqəmsal innovasiyalar sahəsində beynəlxalq rəqabətliliyin artırılması, rəqəmsal hökumətin inkişafı və təşviqi üzrə dövlət orqanlarının məqsədilə İnnovasiya və Rəqəmsal İnkişaf Agentliyinin təşəbbüsü həyata keçirilir.",
        link: "https://my.gov.az/"
      }
    ];
  
    return Response.json(services);
  }
  