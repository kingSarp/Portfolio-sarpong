import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// This connects to Resend using your API key from .env.local
const resend = new Resend(process.env.RESEND_API_KEY)

// This function runs when someone submits the contact form
export async function POST(req: NextRequest) {
  try {
    // 1. Get the form data that was sent
    const { name, email, subject, message } = await req.json()

    // 2. Check that required fields are filled in
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 } // 400 = "bad request"
      )
    }

    // 3. Use Resend to send the email to you
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'sarpongnana9@gmail.com',
      subject: subject || `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    // 4. If Resend had an error, tell the user
    if (error) {
      console.error('Resend error:', JSON.stringify(error))
      return NextResponse.json(
        { error: error.message || 'Failed to send message.' },
        { status: 500 }
      )
    }

    // 5. Success! Tell the user it worked
    return NextResponse.json({ success: true, id: data?.id })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}