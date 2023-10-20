import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { db, product } from "@/app/lib/drizzle";

export async function GET(req: NextRequest, res: NextResponse) {
  //   await client.sql`DROP TABLE studentdata`;  This is use for delete the table for in database
  // await sql`DROP TABLE productdata`;
  //   await sql`delete from productdata`         This is use for only delete the table data
  try {
    await sql`CREATE TABLE IF NOT EXISTS productdata(id serial PRIMARY KEY, user_id VARCHAR(255) NOT NULL, subcet VARCHAR(255) NOT NULL, total_price INT NOT NULL, image TEXT NOT NULL, size varchar(255), Name varchar(255), product_id VARCHAR(255) NOT NULL, price INT NOT NULL, quantity INT NOT NULL, category varchar(255), type varchar(255), productdiscripion text)`;
    // await sql`delete from productdata`;
    const res = await db.select().from(product);
    // console.log("The api can fetch this data", res);
    return NextResponse.json({ data: res });
  } catch (error) {
    console.log((error as { message: string }).message);
    return new NextResponse("Some thing went wrong");
  }
}

// export async function POST(request: NextRequest) {
//   try {
//     const req = await request.json();

//     // Insert a new row into the "product" table
//     const insertedData = await db
//       .insert(product)
//       .values({
//         // id: req.id,
//         user_id: req.user_id,
//         subcet: req.subcet,
//         total_price: req.total_price,
//         image: req.image,
//         price: req.price,
//         product_id: req.product_id,
//         quantity: req.quantity,
//         category: req.category,
//         Name: req.Name,
//         productdiscripion: req.productdiscripion,
//         size: req.size,
//         type: req.type,
//       })
//       .returning(); // Use "*" to return all columns of the inserted row(s)

//     if (insertedData.length > 0) {
//       console.log("Data added", insertedData);
//       return NextResponse.json({
//         message: "Data successfully added",
//         data: insertedData,
//       });
//     } else {
//       console.log("Something went wrong");
//       return new NextResponse("Failed to insert data", { status: 500 });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     return new NextResponse("Something went wrong", { status: 500 });
//   }
// }

export async function POST(request: Request) {
  try {
    const requestData = await request.json();

    // Check if requestData is an array
    if (Array.isArray(requestData)) {
      const insertedData = [];

      // Loop through each data entry in the array
      for (const entry of requestData) {
        const {
          user_id,
          subcet,
          total_price,
          image,
          price,
          product_id,
          quantity,
          category,
          Name,
          productdiscripion,
          size,
          type,
        } = entry;

        // Insert each data entry into the database
        const res = await db
          .insert(product)
          .values({
            user_id,
            subcet,
            total_price,
            image,
            price,
            product_id,
            quantity,
            category,
            Name,
            productdiscripion,
            size,
            type,
          })
          .returning();

        insertedData.push(res);
      }

      console.log("Data added successfully", insertedData);

      return NextResponse.json({
        message: "Data added successfully",
        data: insertedData,
      });
    } else {
      throw new Error("Invalid data format. Expected an array.");
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
