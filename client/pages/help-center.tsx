import { useState } from "react";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", icon: "📚" },
    { id: "getting-started", name: "Getting Started", icon: "🚀" },
    { id: "voice-commands", name: "Voice Commands", icon: "🎤" },
    { id: "integrations", name: "Integrations", icon: "🔗" },
    { id: "billing", name: "Billing & Plans", icon: "💳" },
    { id: "troubleshooting", name: "Troubleshooting", icon: "🛠️" },
    { id: "privacy", name: "Privacy & Security", icon: "🔐" }
  ];

  const articles = [
    {
      id: 1,
      title: "How to set up your first calendar integration",
      category: "getting-started",
      views: "12.3k",
      difficulty: "Beginner",
      content: "Learn how to connect Google Calendar, Apple Calendar, or Outlook to Lifely in just a few steps. This guide covers permissions, sync settings, and troubleshooting common issues.",
      tags: ["calendar", "setup", "integration"]
    },
    {
      id: 2,
      title: "Understanding Lifely's natural language processing",
      category: "voice-commands",
      views: "8.7k",
      difficulty: "Intermediate",
      content: "Discover how to speak naturally to Lifely and get the best results. Includes examples of complex commands and tips for training the AI to understand your preferences.",
      tags: ["voice", "ai", "commands"]
    },
    {
      id: 3,
      title: "Setting up automated routines and habits",
      category: "getting-started",
      views: "15.2k",
      difficulty: "Beginner",
      content: "Create powerful automated routines that adapt to your lifestyle. Learn how to set up morning routines, workout schedules, and habit tracking.",
      tags: ["routines", "habits", "automation"]
    },
    {
      id: 4,
      title: "Connecting Notion, Apple Notes, and other note-taking apps",
      category: "integrations",
      views: "6.1k",
      difficulty: "Intermediate",
      content: "Import and sync your existing notes from popular note-taking applications. Includes setup guides for Notion, Apple Notes, OneNote, and more.",
      tags: ["notes", "notion", "import"]
    },
    {
      id: 5,
      title: "Managing your subscription and billing",
      category: "billing",
      views: "4.8k",
      difficulty: "Beginner",
      content: "Everything you need to know about Lifely's pricing plans, how to upgrade or downgrade, and managing your billing information.",
      tags: ["billing", "subscription", "pricing"]
    },
    {
      id: 6,
      title: "Why isn't my calendar syncing?",
      category: "troubleshooting",
      views: "9.4k",
      difficulty: "Beginner",
      content: "Common calendar sync issues and their solutions. Covers permission problems, two-way sync, and what to do when events aren't appearing.",
      tags: ["calendar", "sync", "troubleshooting"]
    },
    {
      id: 7,
      title: "Understanding Lifely's privacy and data protection",
      category: "privacy",
      views: "3.2k",
      difficulty: "Beginner",
      content: "Learn about how Lifely protects your personal data, our encryption practices, and your rights regarding data privacy and deletion.",
      tags: ["privacy", "security", "data"]
    },
    {
      id: 8,
      title: "Advanced voice commands for power users",
      category: "voice-commands",
      views: "5.5k",
      difficulty: "Advanced",
      content: "Master complex voice commands including conditional statements, batch operations, and custom shortcuts for maximum productivity.",
      tags: ["voice", "advanced", "productivity"]
    }
  ];

  const faqs = [
    {
      question: "How does Lifely's AI understand my voice commands?",
      answer: "Lifely uses advanced natural language processing to understand context, intent, and preferences from your speech. The AI learns from your patterns over time to provide more accurate responses and suggestions."
    },
    {
      question: "Can I use Lifely offline?",
      answer: "Core features work offline, including viewing your schedule, creating basic notes, and voice input (processed when you reconnect). Advanced AI features require an internet connection."
    },
    {
      question: "How secure is my personal data in Lifely?",
      answer: "We use bank-level AES-256 encryption and zero-knowledge architecture. Your data is encrypted before leaving your device, and even our engineers cannot access your personal information."
    },
    {
      question: "Can I import my existing calendar and notes?",
      answer: "Yes! Lifely supports importing from Google Calendar, Apple Calendar, Outlook, Notion, Apple Notes, OneNote, and many other popular productivity tools."
    },
    {
      question: "What makes Lifely different from other productivity apps?",
      answer: "Lifely is the only app that truly understands natural language for life management. Instead of learning complex interfaces, you simply speak or type naturally, and Lifely handles the rest."
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            <div className="flex items-center gap-4">
              <a
                href="/documentation"
                className="text-lifeos-primary hover:text-lifeos-secondary transition-all duration-300 hover:scale-105"
              >
                Documentation
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
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 border border-lifeos-primary/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-lifeos-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-lifeos-primary uppercase tracking-wide">
              Help Center
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-lifeos-dark mb-8">
            How can we{" "}
            <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
              help you?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-lifeos-gray-400 mb-12 leading-relaxed">
            Find answers, tutorials, and guides to get the most out of Lifely
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for help articles, guides, and FAQs..."
              className="w-full px-6 py-4 pl-12 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-lifeos-primary focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
            />
            <svg className="w-6 h-6 text-lifeos-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white shadow-lg scale-105'
                    : 'bg-white/80 text-lifeos-dark hover:bg-white/90 hover:scale-105'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/90 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    article.difficulty === 'Beginner' ? 'bg-lifeos-success/10 text-lifeos-success' :
                    article.difficulty === 'Intermediate' ? 'bg-lifeos-primary/10 text-lifeos-primary' :
                    'bg-lifeos-secondary/10 text-lifeos-secondary'
                  }`}>
                    {article.difficulty}
                  </span>
                  <span className="text-sm text-lifeos-gray-400">{article.views} views</span>
                </div>

                <h3 className="text-lg font-semibold text-lifeos-dark mb-3 group-hover:text-lifeos-primary transition-colors duration-300">
                  {article.title}
                </h3>

                <p className="text-lifeos-gray-400 mb-4 line-clamp-3">
                  {article.content}
                </p>

                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-lifeos-primary/10 text-lifeos-primary text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-lifeos-dark mb-2">No articles found</h3>
              <p className="text-lifeos-gray-400">Try adjusting your search or browse different categories</p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-lifeos-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-lifeos-gray-400">
              Quick answers to common questions about Lifely
            </p>
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
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Still need help?</h2>
            <p className="text-xl text-white/80 mb-8">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-white/80 text-sm mb-4">Get help via email within 24 hours</p>
                <a
                  href="mailto:support@lifely.com"
                  className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 text-sm font-medium"
                >
                  support@lifely.com
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-lifeos-secondary to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Live Chat</h3>
                <p className="text-white/80 text-sm mb-4">Chat with our team in real-time</p>
                <button className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 text-sm font-medium">
                  Start Chat
                </button>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-white/80 text-sm mb-4">Join our Discord community</p>
                <a
                  href="#"
                  className="text-lifeos-primary hover:text-lifeos-secondary transition-colors duration-300 text-sm font-medium"
                >
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}