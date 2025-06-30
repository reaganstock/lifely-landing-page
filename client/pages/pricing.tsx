import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started with AI productivity",
      priceMonthly: 0,
      priceAnnual: 0,
      featured: false,
      features: [
        "Voice commands & natural language AI",
        "Basic calendar integration",
        "Up to 100 notes & tasks",
        "Mobile & desktop apps",
        "Community support",
        "Data export"
      ],
      limitations: [
        "Limited to 3 integrations",
        "Basic AI features only",
        "Standard support"
      ],
      cta: "Get Started Free",
      ctaLink: "/signup"
    },
    {
      name: "Pro",
      description: "For power users who want advanced AI automation",
      priceMonthly: 15,
      priceAnnual: 12,
      featured: true,
      features: [
        "Everything in Starter",
        "Advanced AI automation",
        "Unlimited integrations",
        "Smart goal tracking & routines",
        "Voice-to-notes transcription",
        "Advanced calendar AI",
        "Priority support",
        "Team collaboration (up to 5)"
      ],
      limitations: [],
      cta: "Start Pro Trial",
      ctaLink: "/signup"
    },
    {
      name: "Enterprise",
      description: "For teams and organizations with advanced needs",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      featured: false,
      features: [
        "Everything in Pro",
        "SSO & SAML integration",
        "Advanced security & compliance",
        "Custom integrations",
        "Dedicated account manager",
        "SLA & uptime guarantees",
        "Advanced analytics",
        "Unlimited team members",
        "Custom AI training",
        "On-premise deployment"
      ],
      limitations: [],
      cta: "Contact Sales",
      ctaLink: "/sales"
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
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens to my data if I cancel?",
      answer: "Your data remains accessible for 30 days after cancellation. You can export everything in standard formats before deletion."
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes! Students get 50% off any paid plan with a valid student email address. Just reach out to our support team."
    },
    {
      question: "Is there a free trial for Pro?",
      answer: "Absolutely! All new users get a 14-day free trial of Pro features. No credit card required."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lifeos-light via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-lifeos-dark group-hover:text-lifeos-primary transition-colors duration-300">
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
            Choose Your{" "}
            <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
              AI Productivity
            </span>{" "}
            Plan
          </h1>
          
          <p className="text-xl md:text-2xl text-lifeos-gray-400 mb-12 leading-relaxed">
            Start free, upgrade when you need more power. All plans include our core AI features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-2 shadow-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                !isAnnual
                  ? 'bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white shadow-lg'
                  : 'text-lifeos-gray-400 hover:text-lifeos-dark'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                isAnnual
                  ? 'bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white shadow-lg'
                  : 'text-lifeos-gray-400 hover:text-lifeos-dark'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-lifeos-success text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
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
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-lifeos-dark mb-2">{plan.name}</h3>
                  <p className="text-lifeos-gray-400 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    {typeof plan.priceMonthly === 'number' ? (
                      <>
                        <span className="text-5xl font-bold text-lifeos-dark">
                          ${isAnnual ? plan.priceAnnual : plan.priceMonthly}
                        </span>
                        <span className="text-lifeos-gray-400 ml-2">/month</span>
                        {isAnnual && plan.priceAnnual !== plan.priceMonthly && (
                          <div className="text-sm text-lifeos-success mt-2">
                            Save ${(plan.priceMonthly - plan.priceAnnual) * 12}/year
                          </div>
                        )}
                      </>
                    ) : (
                      <span className="text-5xl font-bold text-lifeos-dark">{plan.priceMonthly}</span>
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

      {/* Add-ons */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              Optional Add-ons
            </h2>
            <p className="text-xl text-lifeos-gray-400">
              Enhance your Lifely experience with premium features
            </p>
          </div>

          <div className="space-y-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 flex items-center justify-between hover:bg-white/90 transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-semibold text-lifeos-dark mb-2">{addon.name}</h3>
                  <p className="text-lifeos-gray-400">{addon.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-lifeos-primary mb-2">{addon.price}</div>
                  <button className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 text-sm font-medium">
                    Add to Plan →
                  </button>
                </div>
              </div>
            ))}
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

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6"
              >
                <h3 className="text-lg font-semibold text-lifeos-dark mb-3">{faq.question}</h3>
                <p className="text-lifeos-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

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
            Ready to Transform Your Productivity?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands of users who've revolutionized their daily workflows with AI
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Free Trial
            </a>
            <a
              href="/sales"
              className="border border-white/20 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}