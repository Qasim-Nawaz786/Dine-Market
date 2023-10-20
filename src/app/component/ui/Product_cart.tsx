import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

function Product_cart(props: {
  title: string;
  price: number;
  image: string;
  category?: string;
  id: number;
}) {
  return (
    <Link href={`/product/${props.id}`}>
      <div className="hover:scale-110 mt-16 ml-10 w-[350px]  ">
        <Image
          src={props.image}
          alt="product cart"
          width={300}
          height={385}
          className=" bg-slate-200 "
        />
        <h2 className="font-bold mt-4">{props.title}</h2>
        <h3 className="font-bold text-lg">{props.price}</h3>
        <h3 className="font-bold text-lg flex items-center capitalize">
          {" "}
          Category{" "}
          <span className="font-bold text-base text-slate-500 pl-4">
            {props.category}
          </span>
        </h3>
      </div>
    </Link>
  );
}

export default Product_cart;
