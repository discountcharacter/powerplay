'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

const emailSchema = z.string().email({ message: 'Invalid email address.' });

// Note: In a production environment, you would use a more robust storage solution
// like a database (e.g., Firestore, PostgreSQL) instead of a text file.
const emailsFilePath = path.join(process.cwd(), 'emails.txt');

type FormState = {
  message: string;
  error: boolean;
};

export async function captureEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email');

  const validatedEmail = emailSchema.safeParse(email);

  if (!validatedEmail.success) {
    return {
      message: 'Invalid email address. Please try again.',
      error: true,
    };
  }

  try {
    await fs.appendFile(emailsFilePath, `${validatedEmail.data}\n`);
    return {
      message: "Thanks for subscribing! We'll keep you updated.",
      error: false,
    };
  } catch (error) {
    console.error('Failed to save email:', error);
    return {
      message: 'Something went wrong on our end. Please try again later.',
      error: true,
    };
  }
}
