export default function Security() {
  const securityFeatures = [
    {
      title: "End-to-End Encryption",
      description: "All your data is encrypted using AES-256 encryption before it leaves your device. Even we can't access your personal information.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V12z"/>
        </svg>
      ),
      color: "from-blue-500 to-lifeos-primary"
    },
    {
      title: "Zero-Knowledge Architecture",
      description: "We designed our systems so that even our engineers cannot access your personal data, notes, or calendar information.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        </svg>
      ),
      color: "from-lifeos-primary to-lifeos-secondary"
    },
    {
      title: "SOC 2 Type II Compliant",
      description: "Independently audited and certified for security, availability, and confidentiality of customer data.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "from-lifeos-secondary to-purple-600"
    },
    {
      title: "GDPR & CCPA Compliant",
      description: "Full compliance with global privacy regulations. You own your data and can export or delete it anytime.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Multi-Factor Authentication",
      description: "Protect your account with SMS, authenticator apps, or hardware security keys for enterprise users.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1l3 3 4-1.5v4.5c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V2.5L5 4l3-3 4 1.5z"/>
        </svg>
      ),
      color: "from-pink-600 to-red-500"
    },
    {
      title: "Regular Security Audits",
      description: "Quarterly penetration testing and security assessments by leading cybersecurity firms.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </svg>
      ),
      color: "from-red-500 to-orange-500"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", logo: "🛡️" },
    { name: "GDPR Compliant", logo: "🇪🇺" },
    { name: "CCPA Compliant", logo: "🏛️" },
    { name: "ISO 27001", logo: "📋" },
    { name: "HIPAA Ready", logo: "🏥" },
    { name: "Enterprise Grade", logo: "🏢" }
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
              Security & Privacy
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-lifeos-dark mb-8">
            Your Data.{" "}
            <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
              Your Control.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-lifeos-gray-400 mb-12 leading-relaxed">
            Enterprise-grade security meets personal privacy. We've built Lifely with security-first principles to protect what matters most to you.
          </p>

          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-lifeos-success to-green-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-lifeos-dark">Bank-Level Security</p>
              <p className="text-sm text-lifeos-gray-400">AES-256 encryption & zero-knowledge architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              Security That Never Sleeps
            </h2>
            <p className="text-xl text-lifeos-gray-400 max-w-3xl mx-auto">
              Multiple layers of protection keep your personal information safe and secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/90 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-lifeos-dark mb-4">{feature.title}</h3>
                <p className="text-lifeos-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-lifeos-gray-400">
              Built on trust, transparency, and user control
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-lifeos-dark mb-3">Minimal Data Collection</h3>
                  <p className="text-lifeos-gray-400 leading-relaxed">
                    We only collect data that's essential for Lifely to function. No tracking, no selling, no unnecessary data harvesting. Your productivity insights stay private and are used solely to improve your experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-secondary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-lifeos-dark mb-3">Transparent AI Processing</h3>
                  <p className="text-lifeos-gray-400 leading-relaxed">
                    Our AI processes your data locally whenever possible. When cloud processing is needed for advanced features, your data is encrypted, processed, and immediately deleted. No long-term storage of personal content.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-lifeos-dark mb-3">Your Data, Your Choice</h3>
                  <p className="text-lifeos-gray-400 leading-relaxed">
                    Export your data in standard formats anytime. Delete your account and all associated data with one click. We believe you should own and control your personal information completely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-lifeos-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by Enterprises Worldwide
            </h2>
            <p className="text-xl text-white/80">
              Independently verified security and compliance certifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{cert.logo}</div>
                <p className="text-white/80 text-sm font-medium">{cert.name}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security Features</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-white font-semibold mb-2">🔐 SSO Integration</h4>
                <p className="text-white/80 text-sm">SAML, OIDC, and LDAP support for seamless enterprise authentication</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">📊 Audit Logs</h4>
                <p className="text-white/80 text-sm">Comprehensive activity tracking and reporting for compliance</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">🏢 Private Cloud</h4>
                <p className="text-white/80 text-sm">Dedicated infrastructure options for maximum security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Team */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
            Our Security Team
          </h2>
          <p className="text-xl text-lifeos-gray-400 mb-12">
            Led by former security engineers from Apple, Google, and Tesla
          </p>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lifeos-dark">Sarah Chen</h3>
                <p className="text-sm text-lifeos-gray-400">Head of Security</p>
                <p className="text-xs text-lifeos-gray-400 mt-2">Former Apple Security</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-lifeos-secondary to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lifeos-dark">Marcus Rodriguez</h3>
                <p className="text-sm text-lifeos-gray-400">Security Architect</p>
                <p className="text-xs text-lifeos-gray-400 mt-2">Former Google Cloud Security</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-4"></div>
                <h3 className="font-semibold text-lifeos-dark">Alex Kim</h3>
                <p className="text-sm text-lifeos-gray-400">Compliance Officer</p>
                <p className="text-xs text-lifeos-gray-400 mt-2">Former Tesla Legal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
            Questions About Security?
          </h2>
          <p className="text-xl text-lifeos-gray-400 mb-12">
            Our security team is here to address any concerns
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:security@lifely.com"
              className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Security Team
            </a>
            <a
              href="/sales"
              className="border border-lifeos-primary text-lifeos-primary py-4 px-8 rounded-xl font-semibold transition-all duration-300 hover:bg-lifeos-primary hover:text-white hover:scale-105"
            >
              Enterprise Security Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}