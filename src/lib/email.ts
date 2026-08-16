import { Resend } from "resend";

/**
 * Lazily-constructed Resend client — only initialized if RESEND_API_KEY is
 * set, so the app still builds/runs without it (see appendLead fallback in
 * the /api/apply route). Get a key at https://resend.com and add it to
 * Vercel project env vars to turn on real email delivery.
 */
export function getResendClient() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

/**
 * Defaults to Resend's shared onboarding domain, which sends immediately
 * with zero setup. Once dkns.ai is verified in Resend (Domains -> Add
 * Domain), set APPLICATIONS_FROM_EMAIL to a dkns.ai address instead — no
 * other code change needed.
 */
export const APPLICATIONS_FROM = process.env.APPLICATIONS_FROM_EMAIL ?? "DKNS Digital Careers <onboarding@resend.dev>";
