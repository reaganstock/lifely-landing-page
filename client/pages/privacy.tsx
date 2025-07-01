export default function Privacy() {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you create a Lifely account, we collect your name, email address, and basic profile information. This helps us provide personalized AI recommendations and communicate important updates about your account."
        },
        {
          subtitle: "Usage Data",
          text: "We collect information about how you use Lifely, including voice commands, calendar patterns, and productivity preferences. This data is processed locally on your device whenever possible and is used to improve our AI's understanding of your needs."
        },
        {
          subtitle: "Integration Data",
          text: "When you connect third-party services (like Google Calendar or Notion), we only access the specific data you authorize. We never store your passwords or login credentials for these services."
        },
        {
          subtitle: "Device Information",
          text: "We collect basic device information such as operating system, browser type, and app version to ensure Lifely works properly across all your devices and to provide technical support when needed."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "AI-Powered Features",
          text: "Your data is used to train and improve Lifely's AI models specifically for your personal use. The AI learns your preferences, scheduling patterns, and productivity habits to provide better suggestions and automation."
        },
        {
          subtitle: "Service Improvement",
          text: "We analyze aggregated, anonymized usage patterns to improve Lifely's features and performance. Your individual data is never shared or used in ways that could identify you personally."
        },
        {
          subtitle: "Communication",
          text: "We use your email to send important account updates, security notifications, and feature announcements. You can opt out of marketing communications at any time while still receiving essential service updates."
        },
        {
          subtitle: "Security and Compliance",
          text: "We process your information to maintain security, prevent fraud, and comply with legal obligations. This includes monitoring for suspicious activity and maintaining audit logs as required by law."
        }
      ]
    },
    {
      title: "Data Protection & Security",
      content: [
        {
          subtitle: "End-to-End Encryption",
          text: "All your personal data is encrypted using AES-256 encryption before leaving your device. Your calendar events, notes, tasks, and voice recordings are protected with bank-level security."
        },
        {
          subtitle: "Zero-Knowledge Architecture",
          text: "We've designed our systems so that even Lifely employees cannot access your personal content. Your data is encrypted with keys that only you control, ensuring complete privacy."
        },
        {
          subtitle: "Local Processing",
          text: "Whenever possible, AI processing happens locally on your device. This means your voice commands and personal patterns stay on your device rather than being sent to our servers."
        },
        {
          subtitle: "Secure Infrastructure",
          text: "Our servers are hosted on enterprise-grade cloud infrastructure with SOC 2 compliance, regular security audits, and 24/7 monitoring to protect against threats."
        }
      ]
    },
    {
      title: "Your Privacy Rights",
      content: [
        {
          subtitle: "Access Your Data",
          text: "You can request a complete copy of all personal data we have about you at any time. This export includes your account information, settings, and any data we've processed for AI features."
        },
        {
          subtitle: "Delete Your Data",
          text: "You can delete your Lifely account and all associated data with one click in your account settings. Once deleted, your data is permanently removed from our systems within 30 days."
        },
        {
          subtitle: "Correct Your Information",
          text: "You can update or correct any personal information in your account settings at any time. Changes are synchronized across all your devices immediately."
        },
        {
          subtitle: "Data Portability",
          text: "You can export your data in standard formats (JSON, CSV, iCal) to migrate to other services or maintain your own backups. Your data belongs to you, not us."
        }
      ]
    },
    {
      title: "Third-Party Integrations",
      content: [
        {
          subtitle: "Integration Permissions",
          text: "When you connect services like Google Calendar or Notion, you grant specific permissions through their official APIs. We only access the data you explicitly authorize and never store your login credentials."
        },
        {
          subtitle: "Data Synchronization",
          text: "Integrated data is synchronized securely and encrypted during transit and storage. You can disconnect any integration at any time, and we'll stop accessing that service immediately."
        },
        {
          subtitle: "Third-Party Privacy",
          text: "Each integrated service has its own privacy policy. We encourage you to review their policies to understand how your data is handled by these services."
        }
      ]
    },
    {
      title: "Cookies & Tracking",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies to maintain your login session and remember your preferences. These cookies are necessary for Lifely to function properly and cannot be disabled."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We use privacy-focused analytics to understand how users interact with Lifely. This data is anonymized and aggregated, and you can opt out in your privacy settings."
        },
        {
          subtitle: "No Tracking",
          text: "We don't use tracking pixels, social media widgets, or third-party advertising trackers. Your browsing behavior outside of Lifely is never monitored or recorded."
        }
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        {
          subtitle: "Global Infrastructure",
          text: "Lifely operates globally with data centers in the US, EU, and other regions. Your data is stored in the region closest to you to ensure optimal performance while maintaining privacy protections."
        },
        {
          subtitle: "Cross-Border Safeguards",
          text: "When data crosses borders, we use appropriate safeguards including Standard Contractual Clauses (SCCs) and adequacy decisions to ensure your privacy rights are protected regardless of location."
        }
      ]
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
            <div className="flex items-center gap-4">
              <a
                href="/security"
                className="text-lifeos-primary hover:text-lifeos-secondary transition-all duration-300 hover:scale-105"
              >
                Security
              </a>
              <a
                href="/"
                className="text-lifeos-gray-400 hover:text-lifeos-primary transition-all duration-300 hover:scale-105"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 border border-lifeos-primary/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-lifeos-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-lifeos-primary uppercase tracking-wide">
                Privacy Policy
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-lifeos-dark mb-8">
              Your Privacy is{" "}
              <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
                Our Priority
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-lifeos-gray-400 mb-8 leading-relaxed">
              We believe privacy is a fundamental right. This policy explains how we protect your personal information and what rights you have over your data.
            </p>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-lg">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-success to-green-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lifeos-dark">GDPR & CCPA Compliant</p>
                  <p className="text-sm text-lifeos-gray-400">Last updated: {lastUpdated}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-lifeos-dark mb-8 border-b border-gray-200 pb-4">
                  {section.title}
                </h2>
                
                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-xl font-semibold text-lifeos-dark mb-4">
                        {item.subtitle}
                      </h3>
                      <p className="text-lifeos-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-white/80 mb-8">
              Our privacy team is here to help you understand and exercise your rights.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Privacy Officer</h3>
                <p className="text-white/80 text-sm mb-4">Contact our Data Protection Officer</p>
                <a
                  href="mailto:privacy@lifely.com"
                  className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 text-sm font-medium"
                >
                  privacy@lifely.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-secondary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Data Requests</h3>
                <p className="text-white/80 text-sm mb-4">Request, export, or delete your data</p>
                <a
                  href="/login"
                  className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 text-sm font-medium"
                >
                  Manage in Settings
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 border border-white/20 rounded-xl">
              <h3 className="font-semibold text-white mb-2">🇪🇺 EU Residents</h3>
              <p className="text-white/80 text-sm">
                You have additional rights under GDPR including the right to object to processing, 
                data portability, and the right to lodge a complaint with your local supervisory authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/terms"
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 px-6 py-3 text-lifeos-dark hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Terms of Service
            </a>
            <a
              href="/security"
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 px-6 py-3 text-lifeos-dark hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Security Details
            </a>
            <a
              href="/help-center"
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 px-6 py-3 text-lifeos-dark hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Help Center
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}