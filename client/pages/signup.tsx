import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Helper function to get the correct app URL
const getAppUrl = () => {
  // Check if we're in development (localhost)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:3002';
  }
  // Production URL
  return 'https://app.lifely.dev';
};

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setLoading(false);
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
      <main className="flex-1 py-20">
        <div className="max-w-md mx-auto px-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 border border-lifeos-primary/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-lifeos-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-lifeos-primary uppercase tracking-wide">
                  Early Access
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-lifeos-dark mb-4">
                Join the Future of{" "}
                <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
                  Personal Productivity
                </span>
              </h1>
              
              <p className="text-lg text-lifeos-gray-400 mb-8">
                Be among the first to experience Lifely. Get exclusive early access and help shape the future of AI-powered life management.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-lifeos-dark mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-lifeos-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Getting you in...
                    </div>
                  ) : (
                    "Get Early Access"
                  )}
                </button>

                <div className="text-xs text-lifeos-gray-400 text-center">
                  By signing up, you agree to our{" "}
                  <a href="/terms" className="text-lifeos-primary hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-lifeos-primary hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lifeos-success to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                
                <h2 className="text-2xl font-bold text-lifeos-dark mb-4">
                  Welcome to the Future! 🎉
                </h2>
                
                <p className="text-lifeos-gray-400 mb-6">
                  Thanks for joining! We'll send you early access when it's ready. Keep an eye on your inbox for updates and exclusive previews.
                </p>
                
                <div className="bg-lifeos-primary/10 border border-lifeos-primary/20 rounded-xl p-4 mb-6">
                  <p className="text-sm text-lifeos-primary font-medium">
                    💡 Pro tip: Join our{" "}
                    <a href="#" className="underline hover:no-underline">
                      Discord community
                    </a>{" "}
                    to get even earlier access and help shape Lifely's development!
                  </p>
                </div>
                
                                  <a
                    href={`${getAppUrl()}/auth`}
                    className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                  Continue to App →
                </a>
              </div>
            )}
          </div>

          {/* Features Preview */}
          <div className="mt-12 grid grid-cols-1 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:bg-white/80 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lifeos-dark mb-2">Voice-First Interface</h3>
              <p className="text-sm text-lifeos-gray-400">Control everything with natural language commands</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}