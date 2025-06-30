import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function TalkToSales() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    teamSize: "",
    message: "",
    useCase: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Info */}
            <div>
              <div className="sticky top-24">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 border border-lifeos-primary/20 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-lifeos-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-lifeos-primary uppercase tracking-wide">
                    Enterprise Ready
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-lifeos-dark mb-6">
                  Let's Build the Future of{" "}
                  <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
                    Team Productivity
                  </span>
                </h1>
                
                <p className="text-xl text-lifeos-gray-400 mb-8 leading-relaxed">
                  Join forward-thinking organizations already using Lifely to transform how their teams work. Schedule a personalized demo and discover how AI-powered productivity can revolutionize your workflow.
                </p>

                {/* Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-lifeos-dark mb-2">Dedicated Account Manager</h3>
                      <p className="text-lifeos-gray-400">Get personalized support with a dedicated success manager for your team's implementation and ongoing optimization.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-lifeos-secondary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-lifeos-dark mb-2">Custom Integrations</h3>
                      <p className="text-lifeos-gray-400">Seamlessly connect with your existing tools and workflows. We'll build custom integrations for your enterprise needs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-lifeos-dark mb-2">Enterprise Security</h3>
                      <p className="text-lifeos-gray-400">SOC 2 compliance, SSO integration, and advanced security features designed for enterprise environments.</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-lifeos-primary mb-2">40%</div>
                    <div className="text-sm text-lifeos-gray-400">Productivity Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-lifeos-secondary mb-2">2 hrs</div>
                    <div className="text-sm text-lifeos-gray-400">Daily Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-lifeos-primary mb-2">95%</div>
                    <div className="text-sm text-lifeos-gray-400">User Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-lifeos-dark mb-6">Schedule Your Demo</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-lifeos-dark mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-lifeos-dark mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-lifeos-dark mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                            placeholder="Acme Corp"
                          />
                        </div>

                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-lifeos-dark mb-2">
                            Your Role *
                          </label>
                          <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          >
                            <option value="">Select your role</option>
                            <option value="ceo">CEO/Founder</option>
                            <option value="cto">CTO/VP Engineering</option>
                            <option value="manager">Manager</option>
                            <option value="director">Director</option>
                            <option value="individual">Individual Contributor</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="teamSize" className="block text-sm font-medium text-lifeos-dark mb-2">
                            Team Size *
                          </label>
                          <select
                            id="teamSize"
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          >
                            <option value="">Select team size</option>
                            <option value="1-10">1-10 people</option>
                            <option value="11-50">11-50 people</option>
                            <option value="51-200">51-200 people</option>
                            <option value="201-1000">201-1000 people</option>
                            <option value="1000+">1000+ people</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="useCase" className="block text-sm font-medium text-lifeos-dark mb-2">
                            Primary Use Case
                          </label>
                          <select
                            id="useCase"
                            name="useCase"
                            value={formData.useCase}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          >
                            <option value="">Select use case</option>
                            <option value="team-productivity">Team Productivity</option>
                            <option value="project-management">Project Management</option>
                            <option value="knowledge-management">Knowledge Management</option>
                            <option value="executive-assistant">Executive Assistant</option>
                            <option value="sales-operations">Sales Operations</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-lifeos-dark mb-2">
                          Tell us about your needs
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                          placeholder="Tell us about your current workflow challenges and what you're hoping to achieve with Lifely..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Scheduling your demo...
                          </div>
                        ) : (
                          "Schedule Demo"
                        )}
                      </button>

                      <div className="text-xs text-lifeos-gray-400 text-center">
                        We'll reach out within 24 hours to schedule your personalized demo.
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-lifeos-success to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-lifeos-dark mb-4">
                      Thanks for Your Interest! 🚀
                    </h2>
                    
                    <p className="text-lifeos-gray-400 mb-6">
                      Our sales team will reach out within 24 hours to schedule your personalized demo. In the meantime, check out our documentation to learn more about Lifely's capabilities.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/documentation"
                        className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Explore Documentation
                      </a>
                      <a
                        href="/"
                        className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 py-3 px-6"
                      >
                        ← Back to Home
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}