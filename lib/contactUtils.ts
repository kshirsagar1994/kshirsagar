export const WHATSAPP_NUMBER = "919595749597";
export const DISPLAY_PHONE = "+91-9595749597";
export const CONTACT_EMAIL = "ajaykshirsagar1208@gmail.com";

export interface RequirementPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export function formatWhatsAppRequirementMessage(data: RequirementPayload): string {
  const parts = [
    `🚀 *NEW PROJECT REQUIREMENT*`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Client Name:* ${data.name.trim()}`,
    `📧 *Email:* ${data.email.trim()}`,
  ];

  if (data.phone?.trim()) {
    parts.push(`📱 *Phone / WhatsApp:* ${data.phone.trim()}`);
  }
  if (data.service?.trim()) {
    parts.push(`🛠️ *Service:* ${data.service.trim()}`);
  }
  if (data.budget?.trim()) {
    parts.push(`💰 *Budget:* ${data.budget.trim()}`);
  }
  if (data.timeline?.trim()) {
    parts.push(`⏱️ *Timeline:* ${data.timeline.trim()}`);
  }

  parts.push(
    `\n📝 *Requirement & Brief:*`,
    `${data.message.trim()}`,
    `━━━━━━━━━━━━━━━━━━━━`,
    `_Sent via Kshirsagar Website_`
  );

  return parts.join("\n");
}

export function getWhatsAppRequirementUrl(data: RequirementPayload): string {
  const message = formatWhatsAppRequirementMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getMailtoRequirementUrl(data: RequirementPayload): string {
  const subject = `🚀 New Project Requirement from ${data.name} - ${data.service || "General Inquiry"}`;
  const body = `Hi Ajay,

Here is my project requirement submitted via the Kshirsagar website:

• Client Name: ${data.name}
• Email: ${data.email}
${data.phone ? `• Phone: ${data.phone}\n` : ""}${data.service ? `• Service: ${data.service}\n` : ""}${data.budget ? `• Budget: ${data.budget}\n` : ""}${data.timeline ? `• Timeline: ${data.timeline}\n` : ""}
Project Brief & Details:
${data.message}

---
Sent from Kshirsagar Website (Direct to ajaykshirsagar1208@gmail.com)`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
