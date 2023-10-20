import Product_cart from "../component/ui/Product_cart";
import { products } from "../lib/drizzle";

import { GetData } from "./fetchdata";

const Page = async () => {
  const res: { data: products[] } = await GetData();

  // console.log("The product data is defined here:", res);

  return (
    <div className=" flex justify-evenly flex-wrap">
      {res.data.map((product) => (
        <Product_cart
          // key={product.id}
          title={product.Name}
          price={product.price}
          category={product.category}
          id={product.user_id}
          image={product.image}
        />
      ))}
    </div>
  );
};
export default Page;
