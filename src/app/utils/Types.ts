import { StaticImageData } from "next/image";

export type producttype = {
id : number,
name : string,
price : number,
category : string,
image : StaticImageData,
type : string,
size ? :  string,



};