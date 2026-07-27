import { mkdir, appendFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), ".data");

/**
 * Phase-1 placeholder persistence: appends to a local JSONL file instead of a
 * database. Replace with Prisma once the Phase 2 CMS/admin backend is wired up.
 */
export async function appendLead(file: "leads" | "newsletter", entry: Record<string, unknown>) {
  await mkdir(DATA_DIR, { recursive: true });
  const line = JSON.stringify({ ...entry, receivedAt: new Date().toISOString() }) + "\n";
  await appendFile(path.join(DATA_DIR, `${file}.jsonl`), line, "utf8");
}
