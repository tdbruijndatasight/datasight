
import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the expected request body schema
const inquirySchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  question: z.string().min(10, { message: "Question must be at least 10 characters." }),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = inquirySchema.safeParse(body);

    if (!parsedData.success) {
      return new Response(JSON.stringify({ message: 'Invalid input.', errors: parsedData.error.flatten().fieldErrors }), { status: 400 });
    }

    const { email, phone, question } = parsedData.data;
    const adminEmail = process.env.ADMIN_EMAIL || 'info.tomdebruijn@gmail.com'; // Fallback just in case

    // --- Nodemailer Transporter Configuration ---
    // IMPORTANT: Replace this with your actual email provider's configuration.
    // Store sensitive credentials in .env variables.
    // Make sure your .env file is in .gitignore
    
    // Example using a generic SMTP provider (recommended for production)
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports like 587
    //   auth: {
    //     user: process.env.SMTP_USER, // Your SMTP username
    //     pass: process.env.SMTP_PASS, // Your SMTP password or API key
    //   },
    // });

    // Example for Gmail (for testing/low volume, not recommended for production due to security/limits)
    // Ensure "Less secure app access" is ON or use an App Password if 2FA is enabled for your Gmail.
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or your provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address from .env
        pass: process.env.EMAIL_PASS, // Your email password or app password from .env
      },
    });

    const emailFrom = process.env.EMAIL_FROM || `"DataSight" <${process.env.EMAIL_USER}>`;

    // 1. Send email to admin
    await transporter.sendMail({
      from: emailFrom,
      to: adminEmail,
      subject: `New Project Inquiry from ${email} via DataSight`,
      html: `
        <h1>New Project Inquiry</h1>
        <p>You have received a new project inquiry with the following details:</p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
        </ul>
        <p><strong>Question/Message:</strong></p>
        <p style="white-space: pre-wrap;">${question}</p>
        <hr>
        <p><em>This email was sent from the DataSight contact form.</em></p>
      `,
    });

    // 2. Send confirmation email to the user
    await transporter.sendMail({
      from: emailFrom,
      to: email,
      subject: 'Your Inquiry to DataSight Has Been Received',
      html: `
        <h1>Thank You for Your Inquiry!</h1>
        <p>Dear User,</p>
        <p>Thank you for contacting DataSight. We have received your inquiry and appreciate your interest.</p>
        <p><strong>Your submitted details:</strong></p>
        <ul>
          <li><strong>Email:</strong> ${email}</li>
          ${phone ? `<li><strong>Phone:</strong> ${phone}</li>` : ''}
        </ul>
        <p><strong>Your Question/Message:</strong></p>
        <p style="white-space: pre-wrap;">${question}</p>
        <hr>
        <p>We will review your message and get back to you as soon as possible, typically within 5 business days.</p>
        <p>Best regards,<br>Tom de Bruijn<br>DataSight</p>
      `,
    });

    return new Response(JSON.stringify({ message: 'Inquiry submitted successfully! You will receive a confirmation email shortly.' }), { status: 200 });

  } catch (error) {
    console.error('Error processing inquiry:', error);
    let errorMessage = 'An unexpected error occurred while sending your message.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    // Avoid exposing detailed internal errors to the client unless necessary for debugging.
    return new Response(JSON.stringify({ message: 'Failed to submit inquiry. Please try again later or contact us directly.' , errorDetails: process.env.NODE_ENV === 'development' ? errorMessage : undefined }), { status: 500 });
  }
}
