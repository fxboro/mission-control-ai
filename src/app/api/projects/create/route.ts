import { NextRequest, NextResponse } from "next/server";
import { getAuthUserId, handleApiError } from "@/lib/api-auth";
import { createProjectRequestSchema } from "@/lib/validators";
import { projectService } from "@/lib/services/project.service";

export async function POST(req: NextRequest) {
  try {
    const authResult = await getAuthUserId(req);
    if (typeof authResult !== "string") return authResult;
    const userId = authResult;

    const body = await req.json();
    const data = createProjectRequestSchema.parse(body);

    const id = crypto.randomUUID();
    
    await projectService.create(id, {
      ...data,
      userId,
    });
    
    return NextResponse.json({
      success: true,
      message: "Project successfully created",
      data: { id }
    }, { status: 201 });

  } catch (error) {
    return handleApiError(error);
  }
}
