import { Task } from "@/app/models/task.models";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    const task = await Task.findById(taskId);
    return NextResponse.json({
      message: "Successfully fetched the data",
      specific_task: task,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to fetch the task",
      success: false,
    });
  }
}

export async function PUT(request, { params }) {
  const { taskId } = params;

  const { title, content, addDate, status, createdBy } = await request.json();

  try {
    const task = await Task.findById(taskId);

    task.title = title;
    task.content = content;
    task.addDate = addDate;
    task.status = status;
    task.createdBy = createdBy;

    const updatedTask = await task.save();
    return NextResponse.json({
      message: "Successfully updated the tasks",
      updatedTask: updatedTask,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to update the tasks" },
      { status: 400 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { taskId } = params;

  try {
    await Task.deleteOne({
      _id: taskId,
    });
    return NextResponse.json({
      message: "successfully deleted the task",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "failed to delete the task" },
      { status: 400 }
    );
  }
}
