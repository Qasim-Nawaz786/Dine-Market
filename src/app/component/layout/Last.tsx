import Image from "next/image";
import logo from "@/app/accets/Logo.png";

import data from "../ui/Lastlist";

const Last = () => {
  return (
    <section>
      <div>
        <div className="mb-28 flex mt-32">
          {/* 1st div */}
          <div className="w-96 ml-6 space-y-8  ">
            <Image src={logo} alt="logo" width={100} />
            <p className="text-slate-600 pb-10 md:pb-0">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="flex gap-x-5 ">
              {data.map((item) => (
                <Image
                  key={item.id}
                  className="bg-gray-200 rounded-xl py-3 px-3 w-12 "
                  src={item.image}
                  alt={item.title}
                />
              ))}
            </div>
          </div>

          <div className="   space-x-10 md:space-x-32 flex md:ml-20 ">
            {data.map((product) => (
              <div key={product.id} className="space-y-4 ">
                <h2 className="text-xl font-bold  text-slate-600  ">
                  {product.name}
                </h2>
                <p className="text-lg text-slate-600 ">{product.points}</p>
                <p className="text-lg text-slate-600">{product.points1}</p>
                <p className="text-lg text-slate-600">{product.points2}</p>
                <p className="text-lg text-slate-600">{product.points3}</p>
                <p className="text-lg text-slate-600">{product.points4}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Last;
