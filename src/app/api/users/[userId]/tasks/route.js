import { Task } from "@/app/models/task.models";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    // Assuming userId is the ID of the task created by the user.
    const userTask = await Task.find({
      createdBy: userId,
    });

    // if (!userTask) {
    //   return NextResponse.json(
    //     { message: "Task not found for the given user ID" },
    //     { status: 404 }
    //   );
    // }

    return NextResponse.json({
      message: "Successfully fetched the user's task",
      task: userTask,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to fetch the user's task" },
      { status: 400 }
    );
  }
}
