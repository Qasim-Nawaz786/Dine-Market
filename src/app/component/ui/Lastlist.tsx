import { producttype } from "@/app/utils/Types"
import facebook from "@/app/accets/facebook.png"
import twitter from "@/app/accets/twitter.png"
import linkdin from "@/app/accets/linkedin.png"
import { lastproduct } from "@/app/utils/lasttype"



const data :lastproduct[] = [
{
    name: "Company",
    points: "About",
    points1: "Terms of Use",
    points2: "Privacy Policy",
    points3: "How it Works",
    points4: "Contact Us",
    id: 1,
    image: facebook,
    title: "facebook logo",
    
},
{
    name: "Support",
    points: "Support Carrer",
    points1: "24h Service",
    points2: "Quick Chat",
    id: 2,
    image: twitter,
    title: "twitter logo",
  
    
},
{
    name: "Contact",
    points: "Whatsapp",
    points1: "Support 24h",
    id: 3,
    image: linkdin,
    title: 'linkdin logo',
    
    
    
},




]

export default data