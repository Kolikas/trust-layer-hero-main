import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* Background subtle shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-trust-blue opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-60 h-60 bg-trust-blue-light opacity-10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            The universal trust layer for 
            <span className="text-trust-blue"> online commerce</span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
            Middle makes every transaction safe with instant contracts, AI-powered dispute resolution overseen by humans, 
            and legal payments built on Stripe. We're the first proper legal middleman and the quickest service available.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="https://middle-easy-trust-main-69fv.vercel.app/">
                <Play className="mr-2 h-5 w-5" />
                See How It Works
              </a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-trust-blue rounded-full"></div>
              <span>Stripe-powered payments</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-trust-blue rounded-full"></div>
              <span>AI dispute resolution</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-trust-blue rounded-full"></div>
              <span>Legal compliance built-in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;