import Product_cart from "@/app/component/ui/Product_cart";
import { GetData } from "@/app/product/fetchdata";
import { products } from "@/app/lib/drizzle";

// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   return {
//     title: params.slug,
//   };
// };

const getproductbycategory = async (category: string) => {
  const data = await GetData(category);
  // console.log("The data is:", data);
  return data;
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result: { data: products[] } = await getproductbycategory(params.slug);
  // console.log("The result data:", result);
  if (!result) {
    return <p>no product found!</p>;
  }

  return (
    <div className="flex justify-evenly flex-wrap">
      {result.data.map((product) => (
        <Product_cart
          key={product.id}
          title={product.Name}
          price={product.price}
          image={product.image}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
}
