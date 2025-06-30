import { useState } from "react";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Voice Your Intent",
      description: "Simply speak or type what you want to accomplish. No complex commands needed.",
      details: "Lifely understands natural language, so you can say things like 'Schedule 30 basketball training sessions starting next week' or 'Create a note about today's meeting with Sarah'.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
        </svg>
      ),
      color: "from-blue-500 to-lifeos-primary"
    },
    {
      title: "AI Understands Context",
      description: "Our AI analyzes your request, understands the context, and determines the best actions.",
      details: "Lifely considers your existing calendar, preferences, goals, and patterns to provide intelligent suggestions and automations that fit your lifestyle.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      color: "from-lifeos-primary to-lifeos-secondary"
    },
    {
      title: "Smart Execution",
      description: "Watch as Lifely automatically creates, schedules, and organizes everything for you.",
      details: "Tasks are created, calendar events are scheduled, notes are organized into the right categories, and routines are established - all without you lifting a finger.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "from-lifeos-secondary to-purple-600"
    },
    {
      title: "Continuous Learning",
      description: "Lifely learns from your patterns and preferences to get smarter over time.",
      details: "The more you use Lifely, the better it becomes at predicting your needs, suggesting optimizations, and automating routine tasks without being asked.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5 10c.83 0 1.5-.67 1.5-1.5v-16c0-.83-.67-1.5-1.5-1.5h-15c-.83 0-1.5.67-1.5 1.5v16c0 .83.67 1.5 1.5 1.5h15z"/>
        </svg>
      ),
      color: "from-purple-600 to-pink-600"
    }
  ];

  const features = [
    {
      title: "Natural Language Processing",
      description: "Speak or type naturally - no command syntax to memorize",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
        </svg>
      )
    },
    {
      title: "Cross-Platform Sync",
      description: "All your data syncs seamlessly across all devices",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Smart Integrations",
      description: "Connect with tools you already use daily",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      title: "Privacy First",
      description: "Your data stays secure with end-to-end encryption",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      )
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
              How It Works
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-lifeos-dark mb-8">
            AI That Actually{" "}
            <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
              Understands You
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-lifeos-gray-400 mb-12 leading-relaxed">
            Forget complex workflows and endless clicking. Lifely works the way you think - through natural conversation and intelligent automation.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              Four Simple Steps to Transform Your Productivity
            </h2>
            <p className="text-xl text-lifeos-gray-400 max-w-3xl mx-auto">
              Watch how Lifely turns your thoughts into organized action in seconds
            </p>
          </div>

          {/* Interactive Steps */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Steps Navigation */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-white shadow-xl border-lifeos-primary/30 scale-105'
                      : 'bg-white/60 border-white/20 hover:bg-white/80 hover:scale-102'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.color} flex-shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-lifeos-primary">Step {index + 1}</span>
                        <div className={`w-2 h-2 rounded-full ${activeStep === index ? 'bg-lifeos-primary animate-pulse' : 'bg-gray-300'}`}></div>
                      </div>
                      <h3 className="text-xl font-semibold text-lifeos-dark mb-2">{step.title}</h3>
                      <p className="text-lifeos-gray-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Active Step Details */}
            <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-3xl p-8 text-white">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${steps[activeStep].color} mb-6`}>
                {steps[activeStep].icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {steps[activeStep].details}
              </p>
              
              <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                <p className="text-sm text-white/60 mb-2">Example:</p>
                <p className="text-white font-medium">
                  {activeStep === 0 && '"Schedule 30 basketball training sessions starting next week"'}
                  {activeStep === 1 && 'AI analyzes your calendar, finds optimal times, and considers your fitness goals'}
                  {activeStep === 2 && '30 calendar events created, reminders set, progress tracking enabled'}
                  {activeStep === 3 && 'AI learns you prefer morning workouts and suggests earlier times next month'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              Built for Real People, Real Life
            </h2>
            <p className="text-xl text-lifeos-gray-400 max-w-3xl mx-auto">
              Every feature is designed around how you naturally think and work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:bg-white/80 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-lifeos-dark mb-2">{feature.title}</h3>
                <p className="text-lifeos-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-lifeos-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Watch how Lifely transforms a simple voice command into organized productivity
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 mb-12">
            <div className="aspect-video bg-gradient-to-br from-lifeos-primary/20 to-lifeos-secondary/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 text-lg">Interactive Demo Coming Soon</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Early Access
            </a>
            <a
              href="/sales"
              className="border border-white/20 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}