import { Badge, TrendingUp, Settings, Code } from 'lucide-react';

const TrustFeatures = () => {
  const features = [
    {
      icon: Badge,
      title: "Verified seller badges",
      description: "Build reputation with verified identity and transaction history",
      highlight: "Identity verified"
    },
    {
      icon: TrendingUp,
      title: "Portable trust score",
      description: "Your reputation follows you across platforms and marketplaces",
      highlight: "Cross-platform"
    },
    {
      icon: Settings,
      title: "Enterprise compliance tools",
      description: "Advanced reporting, audit trails, and regulatory compliance",
      highlight: "Enterprise ready"
    },
    {
      icon: Code,
      title: "API and white-label escrow",
      description: "Integrate Middle directly into your platform or application",
      highlight: "Developer friendly"
    }
  ];

  return (
    <section id="features" className="py-20 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trust layer features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build trust and reduce fraud
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-trust-blue" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-trust-blue/10 text-trust-blue">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;