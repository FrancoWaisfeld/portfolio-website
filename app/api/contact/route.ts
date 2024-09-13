// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const {
    name,
    email,
    subject,
    message,
  }: { name: string; email: string; subject: string; message: string } =
    await req.json();

  console.log(process.env.EMAIL_SENDER_USER);
  console.log(process.env.EMAIL_SENDER_PASS);
  console.log(process.env.EMAIL_RECEIVER_USER);

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // SMTP server
    port: 587, // port for SMTP server
    auth: {
      user: process.env.EMAIL_SENDER_USER as string, // Username for email being used to send
      pass: process.env.EMAIL_SENDER_PASS as string, // Password for email being used to send
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_SENDER_USER as string, // Username for email being used to send
      to: process.env.EMAIL_RECEIVER_USER as string, // Username for email being used to receive
      subject: `New message from ${name}: ${subject}`,
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
