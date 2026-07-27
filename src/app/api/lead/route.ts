import { NextResponse } from "next/server";
import { appendLead } from "@/lib/leads";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.name !== "string" || typeof body.email !== "string" || !body.name || !body.email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  await appendLead("leads", {
    name: body.name,
    email: body.email,
    company: typeof body.company === "string" ? body.company : "",
    phone: typeof body.phone === "string" ? body.phone : "",
    projectType: typeof body.projectType === "string" ? body.projectType : "",
    features: Array.isArray(body.features) ? body.features.filter((f: unknown) => typeof f === "string") : [],
    budget: typeof body.budget === "string" ? body.budget : "",
    timeline: typeof body.timeline === "string" ? body.timeline : "",
    message: typeof body.message === "string" ? body.message : "",
  });

  return NextResponse.json({ ok: true });
}
