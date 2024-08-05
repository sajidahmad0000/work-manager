import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      name: "Durgesh Tiwari",
      course: "Java",
      price: "4999",
    },
    {
      name: "Ankit Tiwari",
      course: "Nextjs",
      price: "3999",
    },
    {
      name: "Mahesh Tiwari",
      course: "Javascript",
      price: "1999",
    },
  ];

  return NextResponse.json(users);
}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json({ message: "deleted" }, { status: 200 });
}
