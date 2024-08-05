import { NextResponse } from "next/server";
export function GET(request, { params }) {
  const { userId, postsId } = params;
  console.log("userID:", userId);
  console.log("postsID:", postsId);
  return NextResponse.json(params);
}
