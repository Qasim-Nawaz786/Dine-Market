import { NextRequest, NextResponse } from "next/server";
import { product, db } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";

type Props = {
  params: {
    category: string;
  };
};
export async function GET(
  request: NextRequest,
  { params: { category } }: Props
) {
  const res = await db
    .select()
    .from(product)
    .where(eq(product.category, category));
  console.log(res);
  return NextResponse.json({ res });
}
