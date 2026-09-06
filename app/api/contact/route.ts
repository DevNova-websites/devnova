import { NextRequest, NextResponse } from "next/server";
import { CONTACT_EMAIL } from "@/lib/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // TODO-DEVNOVA: reemplazar por un remitente en un dominio verificado en Resend.
      from: "DevNova website <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      reply_to: email,
      subject: `New inquiry from ${name} — DevNova website`,
      text: `${message}\n\n—\n${name} <${email}>`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
