import { NextResponse } from "next/server";
import { loadEnvConfig } from "@next/env";
import nodemailer from "nodemailer";
import { company } from "@/lib/data/company";

// Ensure .env.local is loaded for this route (needed if server started before keys were added)
loadEnvConfig(process.cwd());

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const business = String(body.company ?? "").trim();
    const country = String(body.country ?? "").trim();
    const email = String(body.email ?? "").trim();
    const product = String(body.product ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !business || !country || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();
    const to = process.env.INQUIRY_TO_EMAIL?.trim() || company.email;

    if (!user || !pass) {
      return NextResponse.json(
        {
          error:
            "Email is not configured. Add SMTP_USER and SMTP_PASS in .env.local, then restart npm run dev.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user, pass },
    });

    const subject = `New Buyer Inquiry — ${name}${product ? ` · ${product}` : ""}`;

    const text = [
      "New buyer inquiry from the Kristone Global website",
      "",
      `Name: ${name}`,
      `Company: ${business}`,
      `Country: ${country}`,
      `Email: ${email}`,
      `Product Interest: ${product || "Not specified"}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
        <h2 style="margin-bottom: 8px;">New Buyer Inquiry</h2>
        <p style="margin-top: 0; color: #666;">Submitted from the Kristone Global website contact form.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(business)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Country</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(country)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Product Interest</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${escapeHtml(product || "Not specified")}</td></tr>
        </table>
        <h3 style="margin-top: 24px;">Message</h3>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Kristone Global Website" <${user}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Inquiry email failed:", error);
    return NextResponse.json(
      { error: "Failed to send inquiry. Please try again or contact us by WhatsApp." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
