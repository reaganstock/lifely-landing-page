import { useState } from "react";

export default function Documentation() {
  const [activeSection, setActiveSection] = useState("getting-started");

  const sections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: "🚀",
      content: {
        title: "Getting Started with Lifely",
        description: "Welcome to Lifely! This guide will help you set up your AI-powered life management system in minutes.",
        subsections: [
          {
            title: "1. Create Your Account",
            content: "Sign up for Lifely using your email address. You'll get immediate access to our free tier with core AI features."
          },
          {
            title: "2. Connect Your First Integration",
            content: "Start by connecting your primary calendar (Google Calendar, Apple Calendar, or Outlook) to begin understanding your schedule patterns."
          },
          {
            title: "3. Try Your First Voice Command",
            content: "Say or type: 'Schedule a 30-minute workout tomorrow at 7 AM' and watch Lifely create the event automatically."
          },
          {
            title: "4. Set Up Your Life Categories",
            content: "Organize your life into categories like Work, Health, Learning, and Relationships. Lifely will automatically categorize future tasks and events."
          }
        ]
      }
    },
    {
      id: "voice-commands",
      title: "Voice Commands",
      icon: "🎤",
      content: {
        title: "Natural Language Commands",
        description: "Lifely understands natural language, so you can speak or type as you normally would. Here are some examples:",
        subsections: [
          {
            title: "Calendar Management",
            content: "• 'Schedule a dentist appointment next Tuesday at 2 PM'\n• 'Move my 3 PM meeting to tomorrow'\n• 'Block out 2 hours for deep work every morning'\n• 'Cancel all meetings on Friday afternoon'"
          },
          {
            title: "Task & Note Creation", 
            content: "• 'Remind me to call mom this weekend'\n• 'Create a note about today's client meeting'\n• 'Add buy groceries to my shopping list'\n• 'Set a goal to read 24 books this year'"
          },
          {
            title: "Routine & Habit Building",
            content: "• 'Create a morning routine: meditation, workout, and journaling'\n• 'Track my water intake daily'\n• 'Remind me to take a walk every day at 3 PM'\n• 'Set up a weekly review every Sunday'"
          }
        ]
      }
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: "🔗",
      content: {
        title: "Connect Your Favorite Tools",
        description: "Lifely works with the tools you already use. Here's how to set up integrations:",
        subsections: [
          {
            title: "Calendar Integration",
            content: "Connect Google Calendar, Apple Calendar, or Outlook in Settings > Integrations. Lifely will sync events bidirectionally and understand your scheduling patterns."
          },
          {
            title: "Note-Taking Apps",
            content: "Import notes from Notion, Apple Notes, or OneNote. Lifely will organize them into your life categories and make them searchable with AI."
          },
          {
            title: "Productivity Tools",
            content: "Connect Todoist, Asana, or other task managers. Lifely will intelligently schedule your tasks based on your calendar and energy patterns."
          },
          {
            title: "Health & Fitness",
            content: "Sync with Apple Health, Fitbit, or other fitness trackers to let Lifely optimize your schedule around your energy levels and recovery needs."
          }
        ]
      }
    },
    {
      id: "api-reference",
      title: "API Reference",
      icon: "📡",
      content: {
        title: "Lifely API",
        description: "Build custom integrations with Lifely's REST API. Perfect for developers who want to extend Lifely's capabilities.",
        subsections: [
          {
            title: "Authentication",
            content: "```bash\ncurl -X POST https://api.lifely.com/auth/token \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"email\": \"your@email.com\",\n    \"password\": \"your_password\"\n  }'\n```\n\nReturns a JWT token for API authentication."
          },
          {
            title: "Create Event",
            content: "```bash\ncurl -X POST https://api.lifely.com/events \\\n  -H 'Authorization: Bearer YOUR_TOKEN' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"title\": \"Team Meeting\",\n    \"start_time\": \"2024-01-15T14:00:00Z\",\n    \"duration\": 60,\n    \"category\": \"work\"\n  }'\n```"
          },
          {
            title: "Natural Language Processing",
            content: "```bash\ncurl -X POST https://api.lifely.com/nlp/parse \\\n  -H 'Authorization: Bearer YOUR_TOKEN' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"text\": \"Schedule a dentist appointment next Tuesday at 2 PM\"\n  }'\n```\n\nReturns structured data from natural language input."
          }
        ]
      }
    },
    {
      id: "webhooks",
      title: "Webhooks",
      icon: "🔔",
      content: {
        title: "Real-time Event Notifications",
        description: "Set up webhooks to receive real-time notifications when events occur in Lifely.",
        subsections: [
          {
            title: "Webhook Configuration",
            content: "Configure webhook endpoints in Settings > Developer > Webhooks. Lifely will send POST requests to your specified URLs when events occur."
          },
          {
            title: "Event Types",
            content: "• event.created - New calendar event created\n• task.completed - Task marked as done\n• goal.achieved - Goal milestone reached\n• routine.missed - Routine not completed\n• integration.connected - New integration added"
          },
          {
            title: "Payload Example",
            content: "```json\n{\n  \"event_type\": \"event.created\",\n  \"timestamp\": \"2024-01-15T14:30:00Z\",\n  \"user_id\": \"user_123\",\n  \"data\": {\n    \"event_id\": \"evt_456\",\n    \"title\": \"Team Meeting\",\n    \"category\": \"work\",\n    \"start_time\": \"2024-01-15T14:00:00Z\"\n  }\n}\n```"
          }
        ]
      }
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: "🛠️",
      content: {
        title: "Common Issues & Solutions",
        description: "Having trouble? Here are solutions to the most common issues:",
        subsections: [
          {
            title: "Calendar Sync Issues",
            content: "If your calendar isn't syncing:\n• Check that you've granted calendar permissions\n• Verify your calendar app is up to date\n• Try disconnecting and reconnecting the integration\n• Contact support if sync delays exceed 5 minutes"
          },
          {
            title: "Voice Commands Not Working",
            content: "If Lifely isn't understanding your commands:\n• Speak clearly and at normal pace\n• Try rephrasing with simpler language\n• Check microphone permissions in your browser/app\n• Use text input as an alternative"
          },
          {
            title: "Performance Issues",
            content: "If Lifely feels slow:\n• Clear your browser cache and cookies\n• Ensure you have a stable internet connection\n• Close other resource-intensive applications\n• Try the mobile app if using web browser"
          }
        ]
      }
    }
  ];

  const currentSection = sections.find(section => section.id === activeSection);

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
                href="/help-center"
                className="text-lifeos-primary hover:text-lifeos-secondary transition-all duration-300 hover:scale-105"
              >
                Help Center
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-lg">
                <h2 className="text-xl font-bold text-lifeos-dark mb-6">Documentation</h2>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                        activeSection === section.id
                          ? 'bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white shadow-lg'
                          : 'text-lifeos-gray-400 hover:text-lifeos-dark hover:bg-white/50'
                      }`}
                    >
                      <span className="text-lg">{section.icon}</span>
                      <span className="font-medium">{section.title}</span>
                    </button>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-lifeos-primary/10 border border-lifeos-primary/20 rounded-xl">
                  <h3 className="font-semibold text-lifeos-primary mb-2">Need Help?</h3>
                  <p className="text-sm text-lifeos-primary/80 mb-3">
                    Can't find what you're looking for?
                  </p>
                  <a
                    href="/help-center"
                    className="text-sm text-lifeos-primary font-medium hover:underline"
                  >
                    Visit Help Center →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{currentSection.icon}</span>
                <h1 className="text-3xl font-bold text-lifeos-dark">{currentSection.content.title}</h1>
              </div>

              <p className="text-xl text-lifeos-gray-400 mb-8 leading-relaxed">
                {currentSection.content.description}
              </p>

              <div className="space-y-8">
                {currentSection.content.subsections.map((subsection, index) => (
                  <div key={index} className="border-l-4 border-lifeos-primary/30 pl-6">
                    <h3 className="text-xl font-semibold text-lifeos-dark mb-4">
                      {subsection.title}
                    </h3>
                    <div className="prose prose-lifeos max-w-none">
                      {subsection.content.includes('```') ? (
                        <pre className="bg-lifeos-dark text-white p-4 rounded-xl overflow-x-auto">
                          <code>{subsection.content.replace(/```\w*\n?/g, '').replace(/```/g, '')}</code>
                        </pre>
                      ) : (
                        <div className="text-lifeos-gray-400 leading-relaxed whitespace-pre-line">
                          {subsection.content}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(sections[currentIndex - 1].id);
                    }
                  }}
                  className="flex items-center gap-2 text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={sections.findIndex(s => s.id === activeSection) === 0}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>

                <button
                  onClick={() => {
                    const currentIndex = sections.findIndex(s => s.id === activeSection);
                    if (currentIndex < sections.length - 1) {
                      setActiveSection(sections[currentIndex + 1].id);
                    }
                  }}
                  className="flex items-center gap-2 text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={sections.findIndex(s => s.id === activeSection) === sections.length - 1}
                >
                  Next
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* API Status */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lifeos-dark mb-2">API Status</h3>
                  <p className="text-sm text-lifeos-gray-400">All systems operational</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-lifeos-success rounded-full animate-pulse"></div>
                  <span className="text-sm text-lifeos-success font-medium">99.9% Uptime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}