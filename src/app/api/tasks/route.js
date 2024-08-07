import { Task } from "@/app/models/task.models";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = await Task.find();
    return NextResponse.json({
      message: "successfully fetch the data",
      taskList: data,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "failed to fetch the data" },
      { status: 400 }
    );
  }
}

// to post the task

export async function POST(request, { params }) {
  const data = await request.json();

  const { title, content, addDate, status, createdBy } = data;
  const newTask = new Task({
    title,
    content,
    addDate,
    status,
    createdBy,
  });

  try {
    const savedTask = await newTask.save();
    return NextResponse.json({
      message: "successfully created the task",
      task: savedTask,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to post the task", success: false },
      { status: 500 }
    );
  }
}
