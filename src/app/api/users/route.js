import { connectDB } from "@/app/helper/db";
import { User } from "@/app/models/user.models";
import { NextResponse } from "next/server";

connectDB();
export async function GET(request) {
  let usersData;
  try {
    usersData = await User.find().select("-password"); //User.find() is a Mongoose method that retrieves all documents in the User collection. It returns an array of user objects.
    // The await keyword ensures that the code waits for the database operation to complete before moving to the next line.
    return NextResponse.json(
      { message: "get the user", users: usersData },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch the data", error: error.message },
      { status: 500 }
    );
  }
}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json({ message: "deleted" }, { status: 200 });
}

export async function POST(request) {
  const jsonData = await request.json();
  const { username, email, password } = jsonData;
  console.log(jsonData);

  const newUser = new User({
    // create a new instance of a Mongoose model (e.g., new User({...})), you're essentially creating a JavaScript object that adheres to the schema defined for that model.
    username,
    email,
    password,
  });

  try {
    const createdUser =
      await newUser.save(); /*When you call await newUser.save(), Mongoose attempts to insert the instance into the MongoDB database.
    During this step, Mongoose performs the validation checks. If the data passes validation, it is saved to the database. If it fails, an error is thrown, which can be caught and handled.*/
    return NextResponse.json(
      { message: "Successfully created the user", user: createdUser },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "Failed to create the user", error: error.message },
      { status: 500 }
    );
  }
}
