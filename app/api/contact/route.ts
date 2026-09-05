import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "ajaykshirsagar1208@gmail.com";
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;

    const emailSubject = `🚀 New Project Inquiry from ${name} - ${service || "General Inquiry"}`;
    
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #0d0d12; color: #ffffff; padding: 32px; border-radius: 12px; border: 1px solid #27272a;">
        <div style="border-bottom: 2px solid #8b5cf6; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #ffffff; margin: 0 0 6px 0; font-size: 24px; font-weight: 700; letter-spacing: 0.05em;">KSHIRSAGAR TECHNOLOGY</h2>
          <p style="color: #8b5cf6; margin: 0; font-size: 14px; font-weight: 600; text-transform: uppercase;">New Project Lead Received</p>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; width: 140px; font-weight: 500;">Client Name:</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; font-weight: 500;">Email:</td>
            <td style="padding: 10px 0; color: #8b5cf6; font-weight: 600;"><a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a></td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; font-weight: 500;">Phone / WhatsApp:</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: 600;"><a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a></td>
          </tr>` : ""}
          ${service ? `
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; font-weight: 500;">Service Required:</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: 600;"><span style="background: rgba(139, 92, 246, 0.2); color: #c4b5fd; padding: 4px 10px; border-radius: 9999px; border: 1px solid rgba(139, 92, 246, 0.4);">${service}</span></td>
          </tr>` : ""}
          ${budget ? `
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; font-weight: 500;">Estimated Budget:</td>
            <td style="padding: 10px 0; color: #34d399; font-weight: 600;">${budget}</td>
          </tr>` : ""}
          ${timeline ? `
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; font-weight: 500;">Target Timeline:</td>
            <td style="padding: 10px 0; color: #ffffff; font-weight: 500;">${timeline}</td>
          </tr>` : ""}
        </table>

        <div style="background-color: #18181b; padding: 20px; border-radius: 8px; border: 1px solid #27272a; margin-bottom: 24px;">
          <h4 style="color: #a1a1aa; margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Project Brief / Message:</h4>
          <p style="color: #f4f4f5; margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 15px;">${message}</p>
        </div>

        <div style="border-top: 1px solid #27272a; padding-top: 16px; font-size: 12px; color: #71717a; text-align: center;">
          Sent from Kshirsagar Website Interactive Contact System • ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </div>
      </div>
    `;

    // Check if SMTP is configured
    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Kshirsagar Website" <${smtpUser}>`,
        to: receiverEmail,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
      });

      console.log(`[Contact API] Email successfully dispatched to ${receiverEmail}`);
    } else {
      // Development / unconfigured SMTP mode: log full structured details
      console.log("--------------------------------------------------");
      console.log("📩 NEW PROJECT INQUIRY RECEIVED (SMTP not configured, logging to console):");
      console.log(`From: ${name} <${email}>`);
      console.log(`Phone: ${phone || "N/A"}`);
      console.log(`Service: ${service || "N/A"}`);
      console.log(`Budget: ${budget || "N/A"}`);
      console.log(`Timeline: ${timeline || "N/A"}`);
      console.log(`Message:\n${message}`);
      console.log("--------------------------------------------------");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your project inquiry has been received. Our team will contact you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to process inquiry.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
