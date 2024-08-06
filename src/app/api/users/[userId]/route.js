import { User } from "@/app/models/user.models";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const userData = await User.findById(userId).select("-password");
    return NextResponse.json({
      message: "successfully fetched the user",
      user: userData,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "user does not exist",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;

  const { username, email, password } = await request.json(); //The PUT request contains the new user data in the body, typically in JSON format. The await request.json() method is used to parse this JSON data:PUT request is expected to contain the updated data in its body. The data typically includes the fields that you want to update for the user, such as username, email, and password.
  try {
    const user = await User.findById(userId);

    user.username = username;
    user.email = email;
    user.password = password;

    const updatedUser = await user.save();
    return NextResponse.json({
      message: "Successfully updated the User",
      Updateduser: updatedUser,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Failed to update the user",
      success: false,
    });
  }
}

// this is for deleting the specific user using their ID
export async function DELETE(request, { params }) {
  const { userId } = params;

  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({ message: "user is deleted", success: true });
  } catch (error) {
    console.log(error);
    return NextResponse({
      message: "failed to delete the user",
      success: false,
    });
  }
}
