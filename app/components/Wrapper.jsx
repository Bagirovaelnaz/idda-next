"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Wrapper() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/posts/services");
      const data = await res.json();
      setServices(data);
    }
    load();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="absolute mt-[-80px] max-sm:overflow-x-hidden">
        {services.map((item, index) => (
          <div key={index} className="wrapper-box">
            <div>
              <Image src={item.img} alt={item.title} width={300} height={200} />
            </div>
            <div className="wrapper-txt">
              <h4>{item.title}</h4>
              <div >{item.desc}</div>
              <a
                href={item.link}
                target="_blank"
              >
                Ətraflı
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
