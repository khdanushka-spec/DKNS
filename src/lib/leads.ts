import { mkdir, appendFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");

/**
 * Phase-1 placeholder persistence: appends to a local JSONL file instead of a
 * database. Replace with Prisma once the Phase 2 CMS/admin backend is wired up.
 *
 * Best-effort only — Vercel's serverless filesystem is read-only outside
 * /tmp, so this write fails in production. It's swallowed here (and logged
 * for visibility in Vercel's function logs) rather than thrown, so it never
 * blocks the actual user-facing action (email send, form success, etc.).
 * Locally it still writes real files for dev-time testing.
 */
export async function appendLead(file: "leads" | "newsletter" | "applications", entry: Record<string, unknown>) {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    const line = JSON.stringify({ ...entry, receivedAt: new Date().toISOString() }) + "\n";
    await appendFile(path.join(DATA_DIR, `${file}.jsonl`), line, "utf8");
  } catch (error) {
    console.error(`appendLead(${file}) failed — likely a read-only filesystem in production`, error);
  }
}
