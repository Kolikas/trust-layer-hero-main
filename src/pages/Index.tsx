import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WhyTrust from '../components/WhyTrust';
import HowItWorks from '../components/HowItWorks';
import Industries from '../components/Industries';
import TrustFeatures from '../components/TrustFeatures';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <WhyTrust />
        <HowItWorks />
        <Industries />
        <TrustFeatures />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
