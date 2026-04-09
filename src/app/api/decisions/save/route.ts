import { NextRequest, NextResponse } from "next/server";
import { getAuthUserId, handleApiError } from "@/lib/api-auth";
import { saveDecisionRequestSchema } from "@/lib/validators";
import { decisionService } from "@/lib/services/decision.service";

export async function POST(req: NextRequest) {
  try {
    const authResult = await getAuthUserId(req);
    if (typeof authResult !== "string") return authResult;
    const userId = authResult;

    const body = await req.json();
    const data = saveDecisionRequestSchema.parse(body);

    let id = data.id;
    if (id) {
      const { id: _id, ...updateData } = data;
      await decisionService.update(id, updateData);
      
      return NextResponse.json({
        success: true,
        message: "Decision successfully updated",
        data: { id }
      }, { status: 200 });
    } else {
      id = crypto.randomUUID();
      const { id: _id, ...createData } = data;
      
      await decisionService.create(id, {
        ...createData,
        userId,
      });
      
      return NextResponse.json({
        success: true,
        message: "Decision successfully created",
        data: { id }
      }, { status: 201 });
    }
  } catch (error) {
    return handleApiError(error);
  }
}
