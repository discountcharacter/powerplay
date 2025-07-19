import { Dumbbell, ShieldCheck, Users } from 'lucide-react';
import Image from 'next/image';
import { Logo } from '@/components/logo';
import { EmailCaptureForm } from '@/components/email-capture-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Dumbbell className="h-8 w-8 text-primary-foreground" />,
    title: 'Expert Coaching',
    description:
      'Our certified coaches bring years of professional experience to help you master every aspect of the game.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary-foreground" />,
    title: 'Advanced Facilities',
    description:
      'Train in our state-of-the-art facility with modern equipment, video analysis tools, and pristine pitches.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary-foreground" />,
    title: 'Community & Culture',
    description:
      'Join a supportive community of passionate cricketers and build connections that last a lifetime.',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-3">
          <Logo className="h-12 w-12" />
          <h1 className="font-headline text-2xl font-bold tracking-tight text-foreground">
            Powerplay Cricket Academy
          </h1>
        </div>
        <Button asChild variant="secondary">
          <a href="#features">Get Started</a>
        </Button>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-20 text-center lg:py-32">
          <div className="relative inline-block">
            <div className="absolute -z-10 -translate-x-1/2 -translate-y-1/2 top-0 left-1/2 h-48 w-48 rounded-full bg-primary/20 blur-3xl"></div>
            <h2 className="font-headline text-5xl font-bold leading-tight tracking-tighter text-foreground md:text-7xl">
              Shape Your{' '}
              <span className="relative">
                Cricket
                <Image
                  src="https://images.unsplash.com/photo-1587385789097-0197a7fbd179?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwYmFsbCUyMHpvb21lZHxlbnwwfHx8fDE3NTI5Mzc1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bouncing cricket ball"
                  width={40}
                  height={40}
                  className="absolute -top-5 right-5 inline-block animate-bounce"
                  data-ai-hint="cricket ball"
                />
              </span>
              <br />
              Legacy
            </h2>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Join Powerplay Cricket Academy, where passion meets performance. We
            provide top-tier training to forge the next generation of cricket
            champions.
          </p>
          <EmailCaptureForm />
        </section>

        <section id="features" className="bg-secondary/30 py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h3 className="font-headline text-4xl font-bold text-foreground">
                Why Powerplay?
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
                We're not just an academy; we're a launchpad for your cricket
                career.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="transform-gpu border-secondary bg-card/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20"
                >
                  <CardHeader>
                    <div className="mb-4 w-fit rounded-full bg-primary/20 p-3">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-headline text-xl">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto mt-12 border-t border-secondary px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()} Powerplay Cricket Academy. All
              rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
