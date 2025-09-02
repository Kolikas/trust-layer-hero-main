import { Shield, Zap, Link, Users } from 'lucide-react';

const WhyTrust = () => {
  const features = [
    {
      icon: Shield,
      title: "Legal Day One",
      description: "Stripe compliance, KYC, AML built-in from the start"
    },
    {
      icon: Zap,
      title: "AI Dispute Resolution",
      description: "AI handles 90% of disputes in hours, always overseen by our human team. Any case can be escalated to human operatives for final resolution."
    },
    {
      icon: Link,
      title: "Platform Interlinking",
      description: "APIs, plugins, and integrations for any workflow"
    },
    {
      icon: Users,
      title: "Proven in Niches",
      description: "Already running at scale for DMCA and creator campaigns"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why trust Middle?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built on enterprise-grade infrastructure with AI-powered automation
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-trust-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;