import { NextRequest, NextResponse } from "next/server";
import { getAuthUserId, handleApiError } from "@/lib/api-auth";
import { weeklyReviewRequestSchema } from "@/lib/validators";
import { db } from "@/lib/firebase/admin";

export async function POST(req: NextRequest) {
  try {
    const authResult = await getAuthUserId(req);
    if (typeof authResult !== "string") return authResult;
    const userId = authResult;

    const body = await req.json();
    const data = weeklyReviewRequestSchema.parse(body);

    const id = crypto.randomUUID();
    
    // Save the weekly review summary/notes to a separate collection
    await db.collection("weekly_reviews").doc(id).set({
      id,
      userId,
      ...data,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    
    return NextResponse.json({
      success: true,
      message: "Weekly review successfully submitted",
      data: { id }
    }, { status: 201 });

  } catch (error) {
    return handleApiError(error);
  }
}
