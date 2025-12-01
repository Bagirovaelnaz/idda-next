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
  

  export async function POST(request) {
    try {
      const body = await request.json();
      const { imgs, text, s } = body;
  
      const newPost = {
        id: Date.now(), 
        imgs: imgs || [],
        text: text || "",
        s: s ?? null
      };
  
      posts.push(newPost);
  
      return Response.json({
        message: "Post created",
        data: newPost
      });
    } catch (error) {
      return new Response("Invalid POST data", { status: 400 });
    }
  }
  
  
  export async function PUT(request) {
    try {
      const body = await request.json();
      const { id, imgs, text, s } = body;
  
      const index = posts.findIndex((p) => p.id === id);
      if (index === -1) {
        return new Response("Post not found", { status: 404 });
      }
  
      posts[index] = {
        ...posts[index],
        imgs: imgs ?? posts[index].imgs,
        text: text ?? posts[index].text,
        s: s ?? posts[index].s
      };
  
      return Response.json({
        message: "Post updated",
        data: posts[index]
      });
    } catch (error) {
      return new Response("Invalid PUT data", { status: 400 });
    }
  }
 
  export async function DELETE(request) {
    try {
      const { id } = await request.json();
  
      const index = posts.findIndex((p) => p.id === id);
      if (index === -1) {
        return new Response("Post not found", { status: 404 });
      }
  
      const deleted = posts[index];
      posts.splice(index, 1);
  
      return Response.json({
        message: "Post deleted",
        data: deleted
      });
    } catch (error) {
      return new Response("Invalid DELETE data", { status: 400 });
    }
  }
  