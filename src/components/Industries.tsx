import { Camera, ShoppingBag, Gem, Truck, Building, Home } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Camera,
      title: "Creators & Influencers",
      description: "Sponsored content, brand partnerships, and creator campaigns"
    },
    {
      icon: ShoppingBag,
      title: "Marketplaces & Reselling",
      description: "High-value items, collectibles, and peer-to-peer transactions"
    },
    {
      icon: Gem,
      title: "Luxury Goods",
      description: "Watches, jewelry, art, and premium collectibles"
    },
    {
      icon: Truck,
      title: "Logistics & Freight",
      description: "Shipping, cargo, and transportation services"
    },
    {
      icon: Building,
      title: "Oil & Gas, B2B",
      description: "Industrial transactions and business-to-business deals"
    },
    {
      icon: Home,
      title: "Real Estate Pilots",
      description: "Property transactions and real estate services"
    }
  ];

  return (
    <section id="industries" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted across industries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Middle adapts to every vertical where trust matters
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-xl p-6 hover:bg-trust-blue/5 hover:border-trust-blue/20 border border-transparent transition-all duration-300"
            >
              <div className="w-12 h-12 bg-trust-blue/10 group-hover:bg-trust-blue/20 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300">
                <industry.icon className="h-6 w-6 text-trust-blue" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;