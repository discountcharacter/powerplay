'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { ArrowRight, LoaderCircle, Mail } from 'lucide-react';
import { captureEmail } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const initialState = {
  message: '',
  error: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className="absolute right-1 top-1/2 h-[calc(100%-0.5rem)] -translate-y-1/2"
      size="icon"
    >
      {pending ? (
        <LoaderCircle className="h-5 w-5 animate-spin" />
      ) : (
        <ArrowRight className="h-5 w-5" />
      )}
      <span className="sr-only">Submit</span>
    </Button>
  );
}

export function EmailCaptureForm() {
  const [state, formAction] = useFormState(captureEmail, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.error ? 'Oops!' : 'Success!',
        description: state.message,
        variant: state.error ? 'destructive' : 'default',
      });
      if (!state.error) {
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="relative mx-auto mt-8 max-w-lg"
    >
      <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="email"
        name="email"
        placeholder="Drop your email for updates..."
        required
        className="w-full rounded-full border-2 border-secondary bg-background/50 py-6 pl-11 pr-14 text-base focus:border-primary focus:ring-primary"
      />
      <SubmitButton />
    </form>
  );
}
