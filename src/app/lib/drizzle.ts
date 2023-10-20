import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { InferSelectModel } from "drizzle-orm";
import { sql } from "@vercel/postgres";
import { numeric } from "drizzle-orm/pg-core";

export const product = pgTable("productdata", {
  // We can use the database key inside the brackets in below is in must small leters
  id: serial("id").primaryKey().notNull(),
  user_id: integer("user_id").notNull(),
  subcet: varchar("subcet", { length: 255 }).notNull(),
  total_price: integer("total_price").notNull(),
  image: text("image").notNull(),
  size: varchar("size", { length: 255 }),
  Name: varchar("name", { length: 255 }).notNull(),
  product_id: varchar("product_id", { length: 255 }).notNull(),
  price: integer("price").notNull(),
  quantity: integer("quantity").notNull(),
  category: varchar("category", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }),
  productdiscripion: text("productdiscripion"),
});

export type products = InferSelectModel<typeof product>;
// export type Newproducts = InferSelectModel<typeof product, "insert">; // insert type

export const db = drizzle(sql);
