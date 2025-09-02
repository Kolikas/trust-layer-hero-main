import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Contract Details",
      image: "/lovable-uploads/446ad130-e248-44af-9165-80874f9e49a0.png",
      alt: "Contract details form showing client and freelancer email fields, project title, and description",
      description: "Enter the client and freelancer emails, add a project title, and write a short description of the work. Click Continue to Payment Terms."
    },
    {
      number: "02", 
      title: "Payment Terms and AI Contract Generator",
      image: "/lovable-uploads/0c6da208-abc6-4b88-8ee6-2b6476b76ac6.png",
      alt: "Payment terms form with amount, currency, and AI contract generator",
      description: "Set the project amount, choose currency, and decide the payment schedule (for example, 50 percent upfront and 50 percent on completion). Click Generate Contract with AI to automatically draft a professional contract."
    },
    {
      number: "03",
      title: "Contract Preview",
      image: "/lovable-uploads/a038916f-081f-4386-a863-f9f1edd9bf54.png",
      alt: "Contract preview showing generated agreement terms and details",
      description: "Review the auto generated contract including deliverables, payment terms, and timeline. Make edits if needed, then click Proceed to Sign."
    },
    {
      number: "04",
      title: "Sign and Lock Funds",
      image: "/lovable-uploads/6a80aff8-b735-4992-a3b4-c5511e396f26.png",
      alt: "Sign and lock funds page showing escrow amount and fees",
      description: "Both parties sign the agreement. The client's funds are securely locked in escrow and only released when both agree or a dispute is resolved."
    }
  ];

  const dashboard = {
    title: "Dashboard",
    image: "/lovable-uploads/6025a45b-7dcb-4b37-819b-5941b4d92a80.png",
    alt: "Middle dashboard showing balance, active contracts, and recent activity",
    description: "From the dashboard, users can quickly see balances, contracts, recent activity, and manage agreements all in one place."
  };

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, secure, and automated escrow in four easy steps
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Steps */}
          <div className="space-y-16 mb-20">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 order-2 lg:order-1">
                  <div className="text-sm font-medium text-trust-blue mb-2">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
                
                <div className="flex-1 order-1 lg:order-2">
                  <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                    <img 
                      src={step.image} 
                      alt={step.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dashboard */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
            <div className="flex-1 order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {dashboard.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {dashboard.description}
              </p>
            </div>
            
            <div className="flex-1 order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                <img 
                  src={dashboard.image} 
                  alt={dashboard.alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg">
              Start a Contract
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;