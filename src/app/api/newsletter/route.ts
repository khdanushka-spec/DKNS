import { NextResponse } from "next/server";
import { appendLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string" || !body.email) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
  }

  await appendLead("newsletter", { email: body.email });

  return NextResponse.json({ ok: true });
}
