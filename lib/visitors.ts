import { promises as fs } from "fs";
import path from "path";
import { loadEnvConfig } from "@next/env";
import nodemailer from "nodemailer";
import { company } from "@/lib/data/company";

loadEnvConfig(process.cwd());

export type GoogleVisitor = {
  email: string;
  name: string | null;
  image: string | null;
  source: string;
  loggedInAt: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const VISITORS_FILE = path.join(DATA_DIR, "google-visitors.json");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readVisitors(): Promise<GoogleVisitor[]> {
  try {
    const raw = await fs.readFile(VISITORS_FILE, "utf8");
    const parsed = JSON.parse(raw) as GoogleVisitor[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeVisitors(visitors: GoogleVisitor[]) {
  await ensureDir();
  await fs.writeFile(VISITORS_FILE, JSON.stringify(visitors, null, 2), "utf8");
}

async function notifyNewVisitor(visitor: GoogleVisitor) {
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const to = process.env.INQUIRY_TO_EMAIL?.trim() || company.email;

  if (!user || !pass) return;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Kristone Global Website" <${user}>`,
    to,
    subject: `New Google login — ${visitor.name || visitor.email}`,
    text: [
      "A visitor signed in with Google on the Kristone Global website.",
      "",
      `Name: ${visitor.name || "Not provided"}`,
      `Email: ${visitor.email}`,
      `Time: ${visitor.loggedInAt}`,
      "",
      "Stored in: data/google-visitors.json",
    ].join("\n"),
  });
}

/**
 * Saves Google login leads for future contact.
 * File location: project-root/data/google-visitors.json
 * Also emails INQUIRY_TO_EMAIL when SMTP is configured (new emails only).
 */
export async function saveGoogleVisitor(input: {
  email: string;
  name: string | null;
  image: string | null;
  source: string;
}) {
  const email = input.email.trim().toLowerCase();
  if (!email) return { created: false as const };

  const visitors = await readVisitors();
  const existing = visitors.find((v) => v.email === email);

  const record: GoogleVisitor = {
    email,
    name: input.name,
    image: input.image,
    source: input.source,
    loggedInAt: new Date().toISOString(),
  };

  if (existing) {
    Object.assign(existing, record);
    await writeVisitors(visitors);
    return { created: false as const, visitor: existing };
  }

  visitors.push(record);
  await writeVisitors(visitors);

  try {
    await notifyNewVisitor(record);
  } catch (error) {
    console.error("Failed to email Google visitor notification:", error);
  }

  return { created: true as const, visitor: record };
}

export async function listGoogleVisitors() {
  return readVisitors();
}
