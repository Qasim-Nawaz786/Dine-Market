import { NextResponse } from "next/server";
import { GetData } from "./product/fetchdata";
import Hero from "./views/Hero";
import Newsletter from "./views/Newsletter";
import Product_list from "./views/Product_list";
import Promotion from "./views/Promotion";
import Unique from "./views/Unique";
import { products } from "./lib/drizzle";

export default async function Home() {
  // const res = await GetData();
  // console.log("This data is an error", res);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Promotion />
      <Product_list />
      <Unique />
      <Newsletter />
    </div>
  );
}
