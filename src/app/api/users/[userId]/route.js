import { NextResponse } from "next/server";
export function GET(request, { params }) {
  const { userId } = params;
  console.log("userId", userId);
  return NextResponse.json({ message: "got the params" });
}
