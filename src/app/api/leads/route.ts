import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, phone, email, projectName, configName, source } = body;

        if (!name || !phone) {
            return NextResponse.json(
                {
                    error: "Name and phone are required.",
                },
                { status: 400 },
            );
        }

        const { data, error } = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL!,
            to: [process.env.LEAD_EMAIL!],
            subject: `New Lead — ${projectName ?? "Website Enquiry"}`,
            replyTo: email || undefined,

            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="margin-bottom: 24px;">
                        Indiabulls Lead — ${projectName ?? "Website Enquiry"}
                    </h2>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px 0; color: #666;">
                                Name
                            </td>
                            <td style="padding: 10px 0;">
                                ${escapeHtml(name)}
                            </td>
                        </tr>

                        <tr>
                            <td style="padding: 10px 0; color: #666;">
                                Phone
                            </td>
                            <td style="padding: 10px 0;">
                                ${escapeHtml(phone)}
                            </td>
                        </tr>

                        ${
                            email
                                ? `
                            <tr>
                                <td style="padding: 10px 0; color: #666;">
                                    Email
                                </td>
                                <td style="padding: 10px 0;">
                                    ${escapeHtml(email)}
                                </td>
                            </tr>
                        `
                                : ""
                        }

                        <tr>
                            <td style="padding: 10px 0; color: #666;">
                                Project
                            </td>
                            <td style="padding: 10px 0;">
                                ${escapeHtml(projectName ?? "—")}
                            </td>
                        </tr>

                        ${
                            configName
                                ? `
                            <tr>
                                <td style="padding: 10px 0; color: #666;">
                                    Configuration
                                </td>
                                <td style="padding: 10px 0;">
                                    ${escapeHtml(configName)}
                                </td>
                            </tr>
                        `
                                : ""
                        }

                        <tr>
                            <td style="padding: 10px 0; color: #666;">
                                Source
                            </td>
                            <td style="padding: 10px 0;">
                                ${escapeHtml(source ?? "website")}
                            </td>
                        </tr>
                    </table>

                    <hr style="margin: 30px 0; border: 0; border-top: 1px solid #eee;" />

                    <p style="font-size: 12px; color: #888;">
                        This lead was submitted through the Indiabulls website.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                {
                    error: "Failed to send lead.",
                },
                { status: 500 },
            );
        }

        return NextResponse.json({
            success: true,
            id: data?.id,
        });
    } catch (error) {
        console.error("Lead API error:", error);

        return NextResponse.json(
            {
                error: "Something went wrong.",
            },
            { status: 500 },
        );
    }
}

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
