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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span className="text-xl font-medium text-black">
                Lifely
              </span>
            </a>
            <div className="flex items-center gap-4">
              <a
                href="/security"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Security
              </a>
              <a
                href="/"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe privacy is a fundamental right. This policy explains how we protect your personal information and what rights you have over your data.
            </p>

            <p className="text-sm text-gray-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="border-b border-gray-200 pb-8">
                <h2 className="text-2xl font-bold text-black mb-6">
                  {section.title}
                </h2>
                
                <div className="space-y-8">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="mb-6">
                      <h3 className="text-lg font-semibold text-black mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">Questions About Your Privacy?</h2>
            <p className="text-gray-600 mb-6">
              Our privacy team is here to help you understand and exercise your rights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@lifely.com"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
              >
                privacy@lifely.com
              </a>
              <span className="text-gray-400 text-sm hidden sm:block">|</span>
              <a
                href="/login"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm"
              >
                Manage in Settings
              </a>
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