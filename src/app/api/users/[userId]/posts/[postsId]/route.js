import { NextResponse } from "next/server";
export function GET(request, { params }) {
  const { userId, postsId } = params;
  console.log("userID:", userId);
  console.log("postsID:", postsId);
  return NextResponse.json(params);
}

export async function POST(request) {
  const data = request.body;
  console.log(data);

  //   console.log(request.cookies);
  //   console.log(request.method);
  //   console.log(request.cookies);

  //   const jsonData = await request.json(); // request.json()  returns  you promise
  const textData = await request.text();
  console.log(textData); // also you need to send the data from postman in text and returns the promise
  //   console.log(jsonData);
  return NextResponse.json({ message: "post kr diya hai mila?" });
}
