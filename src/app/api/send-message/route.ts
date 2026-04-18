import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, business, phone, email, city, services, description, message } = body;

    if (!phone) {
      return NextResponse.json({ error: "Phone is required" }, { status: 400 });
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json({ error: "Telegram configuration missing" }, { status: 500 });
    }

    const lines: string[] = ["🔔 New Strategy Call Request\n"];
    if (name)     lines.push(`👤 Name: ${name}`);
    if (business) lines.push(`🏢 Business: ${business}`);
                  lines.push(`📞 Phone: ${phone}`);
    if (email)    lines.push(`📧 Email: ${email}`);
    if (city)     lines.push(`📍 City: ${city}`);
    if (services?.length) lines.push(`🎯 Services: ${(services as string[]).join(", ")}`);
    if (description) lines.push(`\n📝 About their business:\n${description}`);
    if (message)  lines.push(`\n💬 Note: ${message}`);

    const text = lines.join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to send to Telegram" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
