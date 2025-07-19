'use server';

import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  const emailsFilePath = path.join(process.cwd(), 'emails.txt');

  try {
    const data = await fs.readFile(emailsFilePath, 'utf-8');
    const emails = data.split('\n').filter(email => email.trim() !== '');
    return NextResponse.json({ emails });
  } catch (error) {
    console.error('Failed to read emails file:', error);
    // If the file doesn't exist, return an empty array.
    if (error instanceof Error && (error as NodeJS.ErrnoException).code === 'ENOENT') {
      return NextResponse.json({ emails: [] });
    }
    return NextResponse.json(
      { message: 'Something went wrong on our end.' },
      { status: 500 }
    );
  }
}
