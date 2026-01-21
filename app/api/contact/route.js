import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Create a JWT auth client and pass it to the GoogleSpreadsheet constructor
    const authClient = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY
        ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
        : undefined,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, authClient);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      Name: body.name,
      "Contact No": body.phone,
      Email: body.email,
      "Service Type": body.service,
      Description: body.description || "",
      Date: new Date().toLocaleString(),
    });

    // Attempt to send notification emails (owner + user) if SMTP is configured
    try {
      const smtpHost = process.env.SMTP_HOST;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
      const fromEmail = process.env.FROM_EMAIL;
      const notifyEmail = process.env.NOTIFY_EMAIL; // site owner / client

      if (smtpHost && smtpUser && smtpPass && fromEmail && notifyEmail) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const ownerText = `New contact submission:\n\nName: ${body.name}\nPhone: ${body.phone}\nEmail: ${body.email}\nService: ${body.service}\nDescription: ${body.description || "(none)"}\nDate: ${new Date().toLocaleString()}`;

        // Send email to site owner / client and Connect@socialmacha.com
        await transporter.sendMail({
          from: fromEmail,
          to: `${notifyEmail}, Connect@socialmacha.com`,
          subject: `New contact from ${body.name} — ${body.service}`,
          text: ownerText,
        });
      } else {
        console.warn("SMTP not configured — skipping email notifications.");
      }
    } catch (emailError) {
      console.error("Email send error:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Google Sheet Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save data" },
      { status: 500 }
    );
  }
}
