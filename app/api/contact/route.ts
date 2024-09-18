// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const {
    name,
    email,
    subject,
    message,
  }: { name: string; email: string; subject: string; message: string } =
    await req.json();

  // Configure Mailgun
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY as string,
  });

  try {
    await mg.messages.create(process.env.MAILGUN_DOMAIN as string, {
      from: process.env.EMAIL_SENDER_USER as string,
      to: [process.env.EMAIL_RECEIVER_USER as string],
      subject: `francowaisfeld.com Contact Form submission`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
