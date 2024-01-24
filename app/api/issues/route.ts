import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const CreateIssueSchema = z.object({
  title: z.string().min(1, 'Title is required.').max(255),
  description: z.string().min(1, 'Description is required.')
})

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