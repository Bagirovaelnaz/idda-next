"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const NewsSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/posts/posts");
      const json = await res.json();
      console.log("API-dən gələn data:", json); 
      setData(json);
    }

    load();
  }, []);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] ml-auto mr-auto mt-[30px] max-sm:overflow-x-hidden max-[600px]:mt-[-90px]">

    {data.map((group, index) =>
      group.map((item, i) => (
        <div key={`${index}-${i}`} className="grid-item">
          <div className="h-[210px]">
            <Image
              src={item.img}
              alt=""
              width={330}
              height={160}
            />
          </div>
          <div>
            <p>{item.date}</p>
            <h2>{item.text}</h2>
          </div>
        </div>
      ))
    )}

  </div>
  );
};

export default NewsSection;
