import { NextRequest, NextResponse } from "next/server";
import { getAuthUserId, handleApiError } from "@/lib/api-auth";
import { createProposalDraftRequestSchema } from "@/lib/validators";
import { proposalService } from "@/lib/services/proposal.service";

export async function POST(req: NextRequest) {
  try {
    const authResult = await getAuthUserId(req);
    if (typeof authResult !== "string") return authResult;
    const userId = authResult;

    const body = await req.json();
    const data = createProposalDraftRequestSchema.parse(body);

    const id = crypto.randomUUID();
    
    await proposalService.create(id, {
      userId,
      leadId: data.leadId,
      title: "Draft Proposal",
      status: "draft",
      problemSummary: data.contextNotes || "Pending problem summary...",
      scope: "Pending scope definition...",
      deliverables: [],
      timeline: data.timelineExpectation || "Pending timeline...",
      pricing: "Pending pricing...",
    });
    
    return NextResponse.json({
      success: true,
      message: "Proposal drafted successfully",
      data: { id }
    }, { status: 201 });

  } catch (error) {
    return handleApiError(error);
  }
}
