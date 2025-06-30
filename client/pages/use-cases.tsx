import { useState } from "react";

export default function UseCases() {
  const [activeUseCase, setActiveUseCase] = useState(0);

  const useCases = [
    {
      title: "The Busy Executive",
      persona: "Sarah, VP of Marketing",
      challenge: "Juggling multiple meetings, strategic planning, and team management while staying on top of personal goals",
      solution: "Lifely becomes Sarah's AI chief of staff, managing her complex calendar, preparing meeting briefs, and ensuring she never misses important personal commitments.",
      benefits: [
        "Automated meeting preparation with context from previous discussions",
        "Smart calendar optimization to find time for strategic thinking",
        "Personal goal tracking integrated with professional priorities",
        "Voice-controlled task management during commutes"
      ],
      stats: {
        timeSaved: "3.5 hours",
        efficiency: "65%",
        satisfaction: "94%"
      },
      color: "from-blue-500 to-lifeos-primary",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      title: "The Student Athlete",
      persona: "Marcus, College Basketball Player",
      challenge: "Balancing rigorous training schedules, academic deadlines, and recovery time while maintaining peak performance",
      solution: "Lifely coordinates Marcus's complex schedule, tracks his training progress, manages study sessions, and ensures proper rest periods.",
      benefits: [
        "Automatic scheduling of training, classes, and study time",
        "Performance tracking with integration to fitness wearables",
        "Study session optimization based on cognitive peak hours",
        "Recovery time management with sleep and nutrition tracking"
      ],
      stats: {
        timeSaved: "2.2 hours",
        efficiency: "58%",
        satisfaction: "91%"
      },
      color: "from-lifeos-primary to-lifeos-secondary",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "The Working Parent",
      persona: "Jennifer, Software Engineer & Mom",
      challenge: "Managing a demanding tech career while coordinating family schedules, school events, and maintaining work-life balance",
      solution: "Lifely helps Jennifer seamlessly blend professional and family responsibilities, ensuring nothing falls through the cracks.",
      benefits: [
        "Family calendar coordination with automatic conflict resolution",
        "School event reminders and preparation assistance",
        "Meal planning integrated with family schedules",
        "Work deadline management with family priority consideration"
      ],
      stats: {
        timeSaved: "4.1 hours",
        efficiency: "72%",
        satisfaction: "96%"
      },
      color: "from-lifeos-secondary to-purple-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.002 1.002 0 0 0 19 8h-2c-.55 0-1 .45-1 1v5.5c0 .28.22.5.5.5s.5-.22.5-.5V10h1l1.8 5.4H18v6.6h2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9.5C9 8.67 8.33 8 7.5 8S6 8.67 6 9.5V15H4v7h3.5z"/>
        </svg>
      )
    },
    {
      title: "The Entrepreneur",
      persona: "David, Startup Founder",
      challenge: "Wearing multiple hats while building a company, managing investor relations, product development, and personal well-being",
      solution: "Lifely acts as David's personal operating system, helping him stay focused on high-impact activities while managing the chaos of startup life.",
      benefits: [
        "Priority-based task management with impact scoring",
        "Investor update automation with progress tracking",
        "Product roadmap coordination with team schedules",
        "Personal health monitoring amid high-stress periods"
      ],
      stats: {
        timeSaved: "5.3 hours",
        efficiency: "81%",
        satisfaction: "93%"
      },
      color: "from-purple-600 to-pink-600",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2V8c0-1.11.89-2 2-2h16z"/>
        </svg>
      )
    },
    {
      title: "The Creative Professional",
      persona: "Alex, Freelance Designer",
      challenge: "Managing multiple client projects, creative deadlines, and business development while maintaining artistic inspiration",
      solution: "Lifely helps Alex balance the business side of freelancing with creative work, ensuring steady income while preserving creative flow.",
      benefits: [
        "Project timeline management with creative buffer time",
        "Client communication automation and follow-ups",
        "Invoice tracking and financial goal monitoring",
        "Inspiration capture and creative session scheduling"
      ],
      stats: {
        timeSaved: "3.8 hours",
        efficiency: "69%",
        satisfaction: "89%"
      },
      color: "from-pink-600 to-red-500",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    }
  ];

  const currentCase = useCases[activeUseCase];

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
              Use Cases
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-lifeos-dark mb-8">
            Built for{" "}
            <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
              Every Lifestyle
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-lifeos-gray-400 mb-12 leading-relaxed">
            See how people like you are transforming their productivity with Lifely's AI-powered life management.
          </p>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                onClick={() => setActiveUseCase(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeUseCase === index
                    ? 'bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white shadow-lg scale-105'
                    : 'bg-white/60 text-lifeos-dark hover:bg-white/80 hover:scale-105'
                }`}
              >
                {useCase.title}
              </button>
            ))}
          </div>

          {/* Active Use Case Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Details */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${currentCase.color}`}>
                    {currentCase.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-lifeos-dark">{currentCase.title}</h2>
                    <p className="text-lifeos-primary font-medium">{currentCase.persona}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-lifeos-dark mb-3">The Challenge</h3>
                    <p className="text-lifeos-gray-400 leading-relaxed">{currentCase.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-lifeos-dark mb-3">The Solution</h3>
                    <p className="text-lifeos-gray-400 leading-relaxed">{currentCase.solution}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center">
                  <div className="text-3xl font-bold text-lifeos-primary mb-2">{currentCase.stats.timeSaved}</div>
                  <div className="text-sm text-lifeos-gray-400">Daily Time Saved</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center">
                  <div className="text-3xl font-bold text-lifeos-secondary mb-2">{currentCase.stats.efficiency}</div>
                  <div className="text-sm text-lifeos-gray-400">Efficiency Boost</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center">
                  <div className="text-3xl font-bold text-lifeos-primary mb-2">{currentCase.stats.satisfaction}</div>
                  <div className="text-sm text-lifeos-gray-400">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column - Benefits */}
            <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Key Benefits</h3>
              
              <div className="space-y-6">
                {currentCase.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r ${currentCase.color} flex-shrink-0 mt-1`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <p className="text-white/90 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white/10 border border-white/20 rounded-xl">
                <p className="text-sm text-white/60 mb-2">💡 Pro Tip:</p>
                <p className="text-white/90">
                  {activeUseCase === 0 && "Use voice commands during commutes to stay productive without taking your hands off the wheel."}
                  {activeUseCase === 1 && "Integrate your fitness tracker to automatically adjust your schedule based on recovery needs."}
                  {activeUseCase === 2 && "Set up family shared calendars that automatically sync with everyone's devices."}
                  {activeUseCase === 3 && "Create automated investor update templates that pull data from your project management tools."}
                  {activeUseCase === 4 && "Schedule creative blocks when you're naturally most inspired, typically identified through pattern analysis."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-lifeos-dark mb-12">
            Real Results from Real People
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="text-4xl mb-4">⏰</div>
              <div className="text-2xl font-bold text-lifeos-primary mb-2">15+ hrs</div>
              <p className="text-lifeos-gray-400">Average weekly time saved across all user types</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="text-4xl mb-4">📈</div>
              <div className="text-2xl font-bold text-lifeos-secondary mb-2">85%</div>
              <p className="text-lifeos-gray-400">Users report significant improvement in work-life balance</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-2xl font-bold text-lifeos-primary mb-2">3x</div>
              <p className="text-lifeos-gray-400">Increase in goal completion rates within first month</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-lifeos-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Which Story Will Be Yours?
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Join thousands of people who've transformed their productivity with Lifely
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Start Your Transformation
            </a>
            <a
              href="/sales"
              className="border border-white/20 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Talk to Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}