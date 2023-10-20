import { NextRequest, NextResponse } from "next/server";
import { db, product } from "@/app/lib/drizzle";
import { eq } from "drizzle-orm";

type Props = {
  params: {
    id: number;
  };
};

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const res = await db.select().from(product).where(eq(product.id, id));
  console.log(res);
  return NextResponse.json({ data: res });
}

// Delete function

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const req = await request.json();
  if (req) {
    const res = await db.delete(product).where(eq(product.id, id));
    console.log(res);
    return NextResponse.json({ message: "Data successfully deleted" });
  } else {
    return NextResponse.json({ message: "Something went wrong" });
  }
}
