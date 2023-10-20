"use client";
import Product_cart from "../component/ui/Product_cart";

import Product from "../utils/Mock";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Swiperr from "../component/ui/Swiper";

function Product_list() {
  const productchunks = Product.slice(0, 10);
  return (
    <div className="mt-24">
      <div>
        <h3 className="text-blue-700 font-bold text-left md:text-center">
          PRODUCTS
        </h3>
        <h2 className="text-4xl font-bold mt-2 text-slate-800 text-left md:text-center">
          Check What We Have
        </h2>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="flex-col flex justify-evenly ">
          {productchunks.map((product) => (
            <SwiperSlide key={product.id}>
              <Product_cart
                title={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
                id={product.id}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default Product_list;
