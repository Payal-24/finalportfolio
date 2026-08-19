import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const formId = process.env.FORMSPREE_FORM_ID;

    if (!formId) {
      console.error('Formspree Form ID (FORMSPREE_FORM_ID) is not configured.');
      return NextResponse.json(
        { error: 'Formspree Form ID is missing on the server.' },
        { status: 500 }
      );
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await response.json();

    if (response.ok && data.ok) {
      return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } else {
      return NextResponse.json(
        { error: data.error || 'Failed to submit form to Formspree.' },
        { status: response.status }
      );
    }
  } catch (error: any) {
    console.error('Error submitting to Formspree:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
