import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { CreateIssueSchema } from "../../ValidationSchemas";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const valiation = CreateIssueSchema.safeParse(body);

  if (!valiation.success)
    return NextResponse.json(valiation.error.format(), { status: 400 });

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description }
  });

  return NextResponse.json(newIssue, { status: 201 });
}