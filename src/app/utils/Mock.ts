import Image from "next/image";
import fifteen from "@/app/accets/15th.png";
import sixteen from "@/app/accets/16th.png";
import savteen from "@/app/accets/17th.png";
import eighteen from "@/app/accets/18.png";
import ninteen from "@/app/accets/19.png";
import twenty from "@/app/accets/20.png";
import twentyone from "@/app/accets/21.png";
import twentytwo from "@/app/accets/22.png";
import twentythree from "@/app/accets/23.png";
import twentyfour from "@/app/accets/24.png";
import twentyfive from "@/app/accets/25.png";
import { producttype } from "./Types";

const Product: producttype[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    price: 2500,
    category: "female",
    image: fifteen,
    type: "Sweater",
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    price: 3500,
    category: "female",
    image: sixteen,
    type: "Dress",
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    price: 4000,
    category: "female",
    image: savteen,
    type: "Sweater",
    size: "M",
  },
  {
    id: 4,
    name: "Flex Sweatpants",
    price: 6000,
    category: "female",
    image: eighteen,
    type: "Pants",
  },
  {
    id: 5,
    name: "Pink Fleece Sweatpants",
    price: 7500,
    category: "female",
    image: ninteen,
    type: "Pants",
  },
  {
    id: 6,
    name: "Lite Sweatpants",
    price: 9500,
    category: "kids",
    image: twenty,
    type: "Pants",
  },
  {
    id: 7,
    name: "Imperial Alpaca Hoodie",
    price: 2500,
    category: "female",
    image: twentyone,
    type: "Jackets",
  },
  {
    id: 8,
    name: "Flex Push Button Bomber",
    price: 10500,
    category: "male",
    image: twentytwo,
    type: "Jackets",
  },
  {
    id: 9,
    name: "Muscle Tank",
    price: 3500,
    category: "female",
    image: twentythree,
    type: "T Shirts",
  },
  {
    id: 10,
    name: "Brushed Bomber",
    price: 2500,
    category: "female",
    image: twentyfour,
    type: "Jackets",
  },
  {
    id: 11,
    name: "Raglan Sweatshirt",
    price: 6500,
    category: "male",
    image: twentyfive,
    type: "Sweater",
  },
  // {
  //   "id": 11,
  //   "Name": "Raglan Sweatshirt",
  //   "price": 6500,
  //   "category": "male",
  //   "type": "Sweater",
  //   "size": "L",
  //   "productdiscripion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  // }
];

export default Product;
