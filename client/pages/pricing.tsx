import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Core Features",
      description: "All essential AI productivity features available during beta",
      priceMonthly: "Free",
      priceAnnual: "Free",
      featured: true,
      features: [
        "Voice commands & natural language AI",
        "Full calendar integration",
        "Unlimited notes & tasks",
        "Advanced AI automation",
        "Smart goal tracking & routines",
        "Voice-to-notes transcription",
        "All integrations available",
        "Mobile & desktop apps",
        "Community support",
        "Data export"
      ],
      limitations: [],
      cta: "Get Started Free",
      ctaLink: "/signup"
    },
    {
      name: "Coming Soon",
      description: "Additional premium features in development",
      priceMonthly: "TBA",
      priceAnnual: "TBA",
      featured: false,
      features: [
        "Everything in Core Features",
        "Advanced team collaboration",
        "Custom AI model selection",
        "Advanced analytics & insights",
        "Priority support",
        "SSO & enterprise security",
        "Custom integrations",
        "API access"
      ],
      limitations: [
        "Available after beta period",
        "Pricing to be announced"
      ],
      cta: "Join Waitlist",
      ctaLink: "/signup"
    }
  ];

  const addOns = [
    {
      name: "AI Voice Assistant Premium",
      price: "$5/month",
      description: "Advanced voice recognition with 50+ languages"
    },
    {
      name: "Advanced Analytics",
      price: "$8/month", 
      description: "Detailed productivity insights and reporting"
    },
    {
      name: "Custom Integrations",
      price: "$25/month",
      description: "Connect with any tool via custom API development"
    }
  ];

  const faqs = [
    {
      question: "How long will the beta be free?",
      answer: "We're committed to keeping Lifely free throughout our public beta period. We'll give plenty of advance notice before introducing any paid features, and early beta users will receive special pricing."
    },
    {
      question: "What happens to my data after beta?",
      answer: "Your data is yours forever. When we transition out of beta, you'll have the option to continue with a free tier or upgrade to access premium features. Your data will never be held hostage."
    },
    {
      question: "Will I get special pricing as a beta user?",
      answer: "Absolutely! Beta users will receive exclusive early adopter pricing and access to features before they're available to the general public."
    },
    {
      question: "Can I use Lifely for my team during beta?",
      answer: "Yes! All collaboration and team features are available during beta. This helps us test and improve the team experience before launch."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lifeos-light via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg">
                <svg
                  className="w-4 h-4 text-white transition-transform duration-300 group-hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="text-xl font-medium text-black tracking-tight transition-all duration-300 group-hover:text-lifeos-primary">
                Lifely
              </span>
            </a>
            <a
              href="/"
              className="text-lifeos-gray-400 hover:text-lifeos-primary transition-all duration-300 hover:scale-105"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 border border-lifeos-primary/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-lifeos-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-lifeos-primary uppercase tracking-wide">
              Pricing
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-lifeos-dark mb-8">
            <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
              Free
            </span>{" "}
            While in Beta
          </h1>
          
          <p className="text-xl md:text-2xl text-lifeos-gray-400 mb-12 leading-relaxed">
            Get full access to all Lifely features completely free during our public beta period.
          </p>

          {/* Beta Notice */}
          <div className="inline-flex items-center bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 border border-lifeos-primary/20 rounded-2xl px-6 py-3 shadow-lg">
            <div className="w-3 h-3 bg-lifeos-primary rounded-full animate-pulse mr-3"></div>
            <span className="text-lifeos-primary font-semibold">
              🎉 All features free during beta - No credit card required
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 ${
                  plan.featured
                    ? 'ring-2 ring-lifeos-primary shadow-2xl scale-105'
                    : 'hover:shadow-xl'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Free Beta Access
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-lifeos-dark mb-2">{plan.name}</h3>
                  <p className="text-lifeos-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-lifeos-dark">{plan.priceMonthly}</span>
                    {plan.priceMonthly === "Free" && (
                      <div className="text-sm text-lifeos-success mt-2 font-medium">
                        🎉 Beta Access - No Payment Required
                      </div>
                    )}
                    {plan.priceMonthly === "TBA" && (
                      <div className="text-sm text-lifeos-gray-400 mt-2">
                        Pricing announced post-beta
                      </div>
                    )}
                  </div>

                  <a
                    href={plan.ctaLink}
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block ${
                      plan.featured
                        ? 'bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white'
                        : 'border border-lifeos-primary text-lifeos-primary hover:bg-lifeos-primary hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lifeos-dark">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-gradient-to-br from-lifeos-success to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <span className="text-lifeos-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold text-lifeos-gray-400 mb-3">Limitations:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, limitIndex) => (
                          <li key={limitIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 bg-lifeos-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                              </svg>
                            </div>
                            <span className="text-lifeos-gray-400 text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Features */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              What You Get During Beta
            </h2>
            <p className="text-xl text-lifeos-gray-400">
              Access to our complete feature set while we fine-tune the experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lifeos-dark mb-2">Full Feature Access</h3>
              <p className="text-lifeos-gray-400">Experience all current and upcoming features without any limitations</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lifeos-secondary to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lifeos-dark mb-2">Shape the Future</h3>
              <p className="text-lifeos-gray-400">Your feedback directly influences our roadmap and feature development</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lifeos-dark mb-2">Early Adopter Benefits</h3>
              <p className="text-lifeos-gray-400">Special pricing and exclusive features when we launch paid plans</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-lifeos-secondary to-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-lifeos-dark mb-2">Community Access</h3>
              <p className="text-lifeos-gray-400">Direct access to our team and exclusive beta community</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-primary/50 hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-primary transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-lifeos-gray-400 mb-6">Still have questions?</p>
            <a
              href="/help-center"
              className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 font-medium"
            >
              Visit our Help Center →
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lifeos-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Beta?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Get early access to the future of AI productivity - completely free during beta
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Join Beta - Free Access
            </a>
            <a
              href="/sales"
              className="border border-white/20 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Questions? Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}