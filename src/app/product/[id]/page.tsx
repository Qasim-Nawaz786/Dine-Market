"use client";
import React, { useEffect, useState } from "react";
import Product from "@/app/utils/Mock";
import Image from "next/image";
import cartimage from "@/app/accets/cart_hero.png";
import { product, products } from "@/app/lib/drizzle";
import second from "@/app/accets/2nd.png";

const Getdata = async () => {
  const res = await fetch("http://localhost:3000/api/dine-market/");
  const data = await res.json();
  // console.log(data);
  return data;
};

export const GetById = async (id: number | string) => {
  const data: { data: products[] } = await Getdata();
  return data.data.filter((data) => data.user_id == id);
};

async function Page({ params }: { params: { id: number } }) {
  const [cart, setCart] = useState(0);
  const result = await GetById(params.id);

  return (
    <div className=" justify-evenly flex">
      {result.map((product) => (
        <div key={product.id} className="flex">
          <div className="pr-6 pl-0">
            <Image src={second} alt={product.Name} width={150} />
          </div>
          <div>
            <Image src={second} alt={product.Name} width={650} />
          </div>

          <div className="ml-6 ">
            <div className="text-2xl font-semibold mt-10">{product.Name}</div>
            <div className="     text-2xl font-semibold text-gray-400">
              {product.type}
            </div>
            <div>
              <h3 className="text-sm font-bold mt-12 ">SELECT SIZE</h3>
            </div>
            <div className="space-x-5 ">
              <button className="mt-6 font-extrabold opacity-60 hover:bg-white hover:rounded-full hover:shadow-slate-400 hover:shadow-lg w-8 h-8 ">
                XS
              </button>
              <button className="mt-6 font-extrabold opacity-60 hover:bg-white hover:rounded-full hover:shadow-slate-400 hover:shadow-lg w-8 h-8 ">
                S
              </button>
              <button className="mt-6 font-extrabold opacity-60 hover:bg-white hover:rounded-full hover:shadow-slate-400 hover:shadow-lg w-8 h-8 ">
                M
              </button>
              <button className="mt-6 font-extrabold opacity-60 hover:bg-white hover:rounded-full hover:shadow-slate-400 hover:shadow-lg w-8 h-8 ">
                L
              </button>
              <button className="mt-6 font-extrabold opacity-60 hover:bg-white hover:rounded-full hover:shadow-slate-400 hover:shadow-lg w-8 h-8 ">
                XL
              </button>
            </div>
            <div className="mt-12 flex ">
              <h2 className="font-bold text-lg">Quantity:</h2>
              <div className="space-x-5 flex ml-6 items-center">
                <button
                  onClick={() => setCart((prev) => (prev == 0 ? 0 : prev - 1))}
                  className="ml-6 bg-slate-100 font-light   text-4xl w-8 h-8 rounded-full"
                >
                  -
                </button>
                <h3>{cart}</h3>
                <button
                  onClick={() => setCart((prev) => prev + 1)}
                  className="ml-6 border-[2px] border-black font-light   text-2xl w-8 h-8 rounded-full"
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-10 flex">
              <button className="hover:scale-105 flex animate-pulse bg-gray-800 px-5 gap-x-3 font-semibold items-center shadow-inner  py-2 text-white">
                <Image src={cartimage} alt="cart logo" width={40} />
                Add to Cart
              </button>
              <h3 className="text-2xl font-bold pt-2 pl-4 text-justify">
                ${product.price * cart}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
