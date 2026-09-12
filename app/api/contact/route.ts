import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, timeline, message } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "ajaykshirsagar1208@gmail.com";
    const { SMTP_HOST: host, SMTP_USER: user, SMTP_PASS: pass, SMTP_PORT: portStr } = process.env;

    const emailSubject = `🚀 New Project Inquiry from ${name} - ${service || "General Inquiry"}`;
    const row = (label: string, val: string | undefined, isHighlight = false) =>
      val?.trim()
        ? `<tr><td style="padding:8px 0;color:#a1a1aa;width:140px;font-weight:500;">${label}:</td>
           <td style="padding:8px 0;color:${isHighlight ? '#c4b5fd' : '#ffffff'};font-weight:600;">${val}</td></tr>`
        : "";

    const emailHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:650px;margin:0 auto;background:#0d0d12;color:#fff;padding:32px;border-radius:12px;border:1px solid #27272a;">
        <div style="border-bottom:2px solid #8b5cf6;padding-bottom:16px;margin-bottom:24px;">
          <h2 style="color:#fff;margin:0 0 6px;font-size:24px;font-weight:700;">KSHIRSAGAR TECHNOLOGY</h2>
          <p style="color:#8b5cf6;margin:0;font-size:14px;font-weight:600;text-transform:uppercase;">New Project Lead Received</p>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
          ${row("Client Name", name)}
          ${row("Email", `<a href="mailto:${email}" style="color:#a78bfa;text-decoration:none;">${email}</a>`)}
          ${row("Phone / WhatsApp", phone ? `<a href="tel:${phone}" style="color:#fff;text-decoration:none;">${phone}</a>` : undefined)}
          ${row("Service Required", service, true)}
          ${row("Estimated Budget", budget)}
          ${row("Target Timeline", timeline)}
        </table>
        <div style="background:#18181b;padding:20px;border-radius:8px;border:1px solid #27272a;margin-bottom:24px;">
          <h4 style="color:#a1a1aa;margin:0 0 10px;font-size:13px;text-transform:uppercase;">Project Brief:</h4>
          <p style="color:#f4f4f5;margin:0;line-height:1.6;white-space:pre-wrap;font-size:15px;">${message}</p>
        </div>
        <div style="border-top:1px solid #27272a;padding-top:16px;font-size:12px;color:#71717a;text-align:center;">
          Sent from Kshirsagar Website • ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
        </div>
      </div>
    `;

    if (host && user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port: portStr ? parseInt(portStr, 10) : 587,
        secure: portStr === "465",
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"Kshirsagar Website" <${user}>`,
        to: receiverEmail,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
      });
      console.log(`[Contact API] Dispatched to ${receiverEmail}`);
    } else {
      console.log(`📩 INQUIRY: ${name} <${email}> | Phone: ${phone || "N/A"} | Srv: ${service || "N/A"}`);
    }

    // CallMeBot / Webhook WhatsApp alert if configured
    const callmebotKey = process.env.CALLMEBOT_API_KEY;
    const webhookUrl = process.env.WHATSAPP_WEBHOOK_URL;

    if (callmebotKey) {
      const waText = encodeURIComponent(`*New Kshirsagar Lead*\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nService: ${service || "General"}\nMessage: ${message}`);
      fetch(`https://api.callmebot.com/whatsapp.php?phone=919595749597&text=${waText}&apikey=${callmebotKey}`).catch(() => {});
    } else if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ receiverPhone: "+919595749597", receiverEmail, name, email, phone, service, budget, timeline, message }),
      }).catch(() => {});
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your project requirement has been dispatched to Ajay Kshirsagar.",
      receiverEmail: "ajaykshirsagar1208@gmail.com",
      receiverPhone: "+91-9595749597",
    });
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json({ error: error.message || "Failed to process inquiry." }, { status: 500 });
  }
}
