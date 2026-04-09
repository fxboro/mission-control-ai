import { NextRequest, NextResponse } from "next/server";
import { getAuthUserId, handleApiError } from "@/lib/api-auth";
import { createTaskRequestSchema } from "@/lib/validators";
import { taskService } from "@/lib/services/task.service";

export async function POST(req: NextRequest) {
  try {
    const authResult = await getAuthUserId(req);
    if (typeof authResult !== "string") return authResult;
    const userId = authResult;

    const body = await req.json();
    const data = createTaskRequestSchema.parse(body);

    const id = crypto.randomUUID();
    
    await taskService.create(id, {
      ...data,
      userId,
    });
    
    return NextResponse.json({
      success: true,
      message: "Task successfully created",
      data: { id }
    }, { status: 201 });

  } catch (error) {
    return handleApiError(error);
  }
}
