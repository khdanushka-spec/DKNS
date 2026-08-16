import { NextResponse } from "next/server";
import { appendLead } from "@/lib/leads";
import { getResendClient, APPLICATIONS_FROM } from "@/lib/email";
import { site } from "@/content/site";

const MAX_RESUME_BYTES = 4 * 1024 * 1024; // 4MB — stays under Vercel's serverless request-body ceiling
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const jobTitle = String(form.get("jobTitle") ?? "");
  const jobSlug = String(form.get("jobSlug") ?? "");
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const phone = String(form.get("phone") ?? "").trim();
  const linkedin = String(form.get("linkedin") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  const resume = form.get("resume");

  if (!jobTitle || !jobSlug || !name || !email) {
    return NextResponse.json({ error: "Name, email, and job are required." }, { status: 400 });
  }

  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "A resume file is required." }, { status: 400 });
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: "Resume must be under 4MB." }, { status: 400 });
  }
  if (!ALLOWED_RESUME_TYPES.has(resume.type)) {
    return NextResponse.json({ error: "Resume must be a PDF or Word document." }, { status: 400 });
  }

  await appendLead("applications", {
    jobTitle,
    jobSlug,
    name,
    email,
    phone,
    linkedin,
    message,
    resumeFilename: resume.name,
    resumeSize: resume.size,
  });

  const resend = getResendClient();
  if (!resend) {
    // No RESEND_API_KEY configured yet — the application is still safely
    // logged above; email delivery turns on the moment the key is added.
    return NextResponse.json({ ok: true, emailed: false });
  }

  const resumeBuffer = Buffer.from(await resume.arrayBuffer());

  const { error } = await resend.emails.send({
    from: APPLICATIONS_FROM,
    to: site.email,
    replyTo: email,
    subject: `New Application: ${jobTitle} — ${name}`,
    html: `
      <h2>New application for ${jobTitle}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${linkedin ? `<p><strong>LinkedIn / Portfolio:</strong> ${linkedin}</p>` : ""}
      ${message ? `<p><strong>Note:</strong><br />${message.replace(/\n/g, "<br />")}</p>` : ""}
    `,
    attachments: [{ filename: resume.name, content: resumeBuffer }],
  });

  if (error) {
    // Logged to applications.jsonl above regardless, so nothing is lost.
    return NextResponse.json({ ok: true, emailed: false, emailError: error.message });
  }

  return NextResponse.json({ ok: true, emailed: true });
}
