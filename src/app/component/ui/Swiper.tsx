"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

export default function Swiperr() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          src={"https://content-cdn.zameen.com/Islamabad_fc75daa1c7.jpg"}
          alt="Image"
          width={400}
          height={400}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://content-cdn.zameen.com/Islamabad_fc75daa1c7.jpg"}
          alt="Image"
          width={400}
          height={400}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://content-cdn.zameen.com/Islamabad_fc75daa1c7.jpg"}
          alt="Image"
          width={400}
          height={400}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://content-cdn.zameen.com/Islamabad_fc75daa1c7.jpg"}
          alt="Image"
          width={400}
          height={400}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={"https://content-cdn.zameen.com/Islamabad_fc75daa1c7.jpg"}
          alt="Image"
          width={400}
          height={400}
        />
      </SwiperSlide>
    </Swiper>
  );
}
