import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

export default function Index() {
  const [showDemo, setShowDemo] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hideSecurityBar, setHideSecurityBar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [heroVersion, setHeroVersion] = useState(1);

  // Randomly assign hero version on component mount
  useEffect(() => {
    const randomVersion = Math.floor(Math.random() * 3) + 1; // Random number 1-3
    setHeroVersion(randomVersion);
  }, []);

  // Integration data with categories
  const integrations = [
    {
      name: "Google Calendar",
      category: "Calendar", 
      description: "Import calendar events from Google Calendar",
      icon: <img src="/google-calendar.svg" alt="Google Calendar" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "Notion",
      category: "Notes",
      description: "Import notes from Notion",
      icon: <img src="/notion (1).svg" alt="Notion" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "Apple Calendar",
      category: "Calendar",
      description: "Import calendar events from Apple Calendar",
      icon: <img src="/applecal.png" alt="Apple Calendar" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "Todoist",
      category: "Productivity",
      description: "Import todos from Todoist",
      icon: <img src="/svgviewer-output.svg" alt="Todoist" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "Apple Notes",
      category: "Notes",
      description: "Import notes from Apple Notes",
      icon: <img src="/apple-notes.svg" alt="Apple Notes" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "YouTube",
      category: "AI Tools",
      description: "Import transcripts and notes from YouTube videos",
      icon: <img src="/youtube.svg" alt="YouTube" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "Outlook Calendar",
      category: "Calendar",
      description: "Import calendar events from Outlook Calendar",
      icon: <img src="/outlook.png" alt="Outlook" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "OneNote",
      category: "Notes",
      description: "Import notes from OneNote",
      icon: <img src="/Microsoft_Office_OneNote_Logo_512px.png" alt="OneNote" className="w-7 h-7" />,
      bgColor: "bg-white"
    },
    {
      name: "Google Drive",
      category: "AI Tools",
      description: "Add context to Lifely AI from Google Drive",
      icon: <img src="/google-drive-svgrepo-com (1).svg" alt="Google Drive" className="w-7 h-7" />,
      bgColor: "bg-white"
    }
  ];

  // Filter integrations based on active filter
  const filteredIntegrations = activeFilter === "All" 
    ? integrations 
    : integrations.filter(integration => integration.category === activeFilter);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Hide security bar quickly after any scroll
      setHideSecurityBar(scrollY > 10);
      // Change header background from light blue to white when scrolling starts
      setHasScrolled(scrollY > 0);
      // Hide header after demo video section (around 600px)
      setIsScrolled(scrollY > 600);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-lifeos-50 via-lifeos-100 to-lifeos-200 font-sans overflow-x-hidden">
      {/* Security & Privacy Notification Bar */}
      <div
        className={`fixed top-0 w-full bg-lifeos-dark text-white py-2 px-4 text-center text-sm z-50 transition-transform duration-300 ${hideSecurityBar ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="flex items-center justify-center gap-1">
          <svg
            className="w-4 h-4 text-lifeos-success"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <span>
            All data secured at rest & in transit · You own your content.
          </span>
        </div>
      </div>

      {/* Fixed Header */}
      <header
        className={`fixed w-full z-40 backdrop-blur-md transition-all duration-300 ${
          hasScrolled ? "bg-white/90 shadow-sm" : "bg-lifeos-50/90"
        } ${
          isScrolled
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        } ${hideSecurityBar ? "top-0" : "top-8"}`}
      >
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3 group cursor-pointer">
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
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#features"
                className="px-4 py-2 text-sm text-gray-600 hover:text-black transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 hover:scale-105 hover:shadow-sm"
              >
                Features
              </a>
              <a
                href="#integrations"
                className="px-4 py-2 text-sm text-gray-600 hover:text-black transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 hover:scale-105 hover:shadow-sm"
              >
                Integrations
              </a>
              <a
                href="#demo"
                className="px-4 py-2 text-sm text-gray-600 hover:text-black transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 hover:scale-105 hover:shadow-sm"
              >
                Demo
              </a>
              <Link
                to="/pricing"
                className="px-4 py-2 text-sm text-gray-600 hover:text-black transition-all duration-300 rounded-lg hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 hover:scale-105 hover:shadow-sm"
              >
                Pricing
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-3">
                <a href={`${getAppUrl()}/auth`} className="px-4 py-2 text-sm text-gray-600 hover:text-black transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 rounded-lg hover:scale-105 hover:shadow-sm">
                  Sign In
                </a>
                <a href={`${getAppUrl()}/auth`} className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gradient-to-r hover:from-lifeos-primary hover:to-lifeos-secondary transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:-translate-y-0.5">
                  Get Started
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center space-y-1">
                  <span
                    className={`block h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
                  ></span>
                  <span
                    className={`block h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  ></span>
                </div>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-6 space-y-1 bg-white/90 backdrop-blur-xl border-t border-gray-100/50">
              <a
                href="#features"
                className="block px-4 py-3 text-gray-600 hover:text-lifeos-primary hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                Features
              </a>
              <a
                href="#integrations"
                className="block px-4 py-3 text-gray-600 hover:text-lifeos-primary hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                Integrations
              </a>
              <a
                href="#demo"
                className="block px-4 py-3 text-gray-600 hover:text-lifeos-primary hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                Demo
              </a>
              <Link
                to="/pricing"
                className="block px-4 py-3 text-gray-600 hover:text-lifeos-primary hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-sm"
              >
                Pricing
              </Link>
              <div className="pt-4 space-y-3 border-t border-gray-200/50">
                <a href={`${getAppUrl()}/auth`} className="block w-full px-4 py-3 text-left text-gray-600 hover:text-lifeos-primary hover:bg-gradient-to-r hover:from-lifeos-primary/10 hover:to-lifeos-secondary/10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-sm">
                  Sign In
                </a>
                <a href={`${getAppUrl()}/auth`} className="block w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gradient-to-r hover:from-lifeos-primary hover:to-lifeos-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative pt-24">
        <div
          className={`absolute bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 blur-3xl transition-opacity duration-1000 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{ left: "138px", top: "-241px", right: "0px", bottom: "0px" }}
        ></div>

        {/* Purple Fire Effect - Throughout entire light blue section */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Outer gentle layer */}
          <div 
            className="absolute w-[500px] h-[500px] transition-all duration-700 ease-out animate-fire-pulse"
            style={{
              left: mousePosition.x - 250,
              top: mousePosition.y - 250,
              background: `radial-gradient(circle, 
                rgba(138, 43, 226, 0.2) 0%, 
                rgba(106, 13, 173, 0.15) 30%, 
                rgba(75, 0, 130, 0.1) 60%, 
                transparent 100%)`,
              filter: 'blur(50px)'
            }}
          />
          {/* Middle flowing layer */}
          <div 
            className="absolute w-80 h-80 transition-all duration-400 ease-out animate-fire-flow"
            style={{
              left: mousePosition.x - 160,
              top: mousePosition.y - 160,
              background: `radial-gradient(circle, 
                rgba(147, 0, 211, 0.4) 0%, 
                rgba(138, 43, 226, 0.3) 40%, 
                rgba(106, 13, 173, 0.2) 80%, 
                transparent 100%)`,
              filter: 'blur(30px)',
              animationDelay: '0.5s'
            }}
          />
          {/* Inner gentle layer */}
          <div 
            className="absolute w-48 h-48 transition-all duration-300 ease-out animate-fire-gentle"
            style={{
              left: mousePosition.x - 96,
              top: mousePosition.y - 96,
              background: `radial-gradient(circle, 
                rgba(186, 85, 211, 0.5) 0%, 
                rgba(147, 0, 211, 0.4) 50%, 
                rgba(138, 43, 226, 0.3) 100%)`,
              filter: 'blur(15px)',
              animationDelay: '1s'
            }}
          />
          {/* Core layer */}
          <div 
            className="absolute w-24 h-24 transition-all duration-200 ease-out animate-fire-flow"
            style={{
              left: mousePosition.x - 48,
              top: mousePosition.y - 48,
              background: `radial-gradient(circle, 
                rgba(186, 85, 211, 0.7) 0%, 
                rgba(147, 0, 211, 0.5) 70%, 
                transparent 100%)`,
              filter: 'blur(8px)',
              animationDelay: '1.5s'
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Blue Gradient Background with Weight */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Main Blue Gradient Orbs with Strong Presence */}
            <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/30 via-blue-500/25 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s'}}></div>
            <div className="absolute -top-20 -right-20 w-[700px] h-[700px] bg-gradient-to-l from-indigo-500/25 via-blue-600/20 to-sky-500/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '15s', animationDelay: '3s'}}></div>
            <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-t from-blue-700/20 via-blue-600/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDuration: '18s', animationDelay: '6s'}}></div>
            
            {/* Deep Blue Mesh Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-indigo-600/10 opacity-80"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-sky-500/8 via-transparent to-blue-700/12 opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/6 via-blue-600/8 to-indigo-500/10 opacity-70"></div>
            
            {/* Blue Floating Elements */}
            <div className="absolute top-1/4 left-16 w-20 h-20 bg-gradient-to-br from-blue-500/40 to-indigo-600/30 rounded-2xl blur-sm animate-float" style={{animationDelay: '0s'}}></div>
            <div className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/35 to-blue-600/25 rounded-full blur-md animate-bounce" style={{animationDelay: '2s', animationDuration: '10s'}}></div>
            <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-br from-blue-600/45 to-blue-800/35 rounded-xl blur-sm animate-ping" style={{animationDelay: '4s', animationDuration: '8s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-400/30 to-blue-700/25 rounded-3xl blur-lg animate-float-delayed"></div>
            
            {/* Blue Light Rays */}
            <div className="absolute top-0 left-1/4 w-px h-96 bg-gradient-to-b from-blue-400/50 via-blue-500/30 to-transparent animate-pulse" style={{animationDuration: '6s'}}></div>
            <div className="absolute top-0 right-1/3 w-px h-80 bg-gradient-to-b from-indigo-400/45 via-blue-600/25 to-transparent animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
            <div className="absolute top-0 left-1/2 w-px h-72 bg-gradient-to-b from-sky-400/40 via-blue-500/20 to-transparent animate-pulse" style={{animationDuration: '7s', animationDelay: '4s'}}></div>
          </div>

          {/* Hero Section */}
          <div className="max-w-7xl mx-auto px-6 lg:px-4 py-32 lg:py-24 relative">
            <div className="text-center max-w-5xl mx-auto mb-16">
              {/* Split Test Versions */}
              {/* VERSION 1 */}
              {heroVersion === 1 && (
                <div className="version-1">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-lifeos-dark leading-tight mb-8">
                    The AI Agent that
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">builds</span> your life.
                  </h1>
                  <p className="text-lg md:text-xl text-lifeos-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Talk to your apps. Get things done. Stay organized.
                  </p>
                </div>
              )}

              {/* VERSION 2 */}
              {heroVersion === 2 && (
                <div className="version-2">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-lifeos-dark leading-tight mb-8">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vibespeak</span> with your
                    <br />
                    personal productivity agent.
                  </h1>
                  <p className="text-lg md:text-xl text-lifeos-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Natural conversation that controls your calendar, tasks, notes, and goals.
                  </p>
                </div>
              )}

              {/* VERSION 3 */}
              {heroVersion === 3 && (
                <div className="version-3">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-lifeos-dark leading-tight mb-8">
                    The AI Agent that
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">vibecodes</span> your life.
                  </h1>
                  <p className="text-lg md:text-xl text-lifeos-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Talk to your apps. Get things done. Stay organized.
                    <br />
                    Finally, an AI that builds your life.
                  </p>
                </div>
              )}

              {/* Primary CTA - Blue Theme */}
              <div className="mb-16 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href={`${getAppUrl()}/auth`} className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/25 active:scale-95 inline-flex items-center gap-3">
                    <span className="relative z-10">Get Started Free</span>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-blue-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                  
                  <a href="#demo" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-gray-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Watch Demo
                  </a>
                </div>
                <p className="text-sm text-lifeos-gray-400">Free to use, no credit card required • 30-day trial</p>
              </div>

              {/* Hero Demo Video - Prominent 2025 Style */}
              <div id="demo" className="relative mb-32">
                {/* Video Container with Modern Glass Effect */}
                <div className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl max-w-6xl mx-auto group hover:shadow-4xl hover:scale-[1.01] transition-all duration-700 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-600/20 rounded-3xl blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Main Video Container */}
                  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl m-2 overflow-hidden">
                    {/* Video Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
                      ✨ Live Demo
                    </div>
                    
                    {/* Video */}
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                      <iframe
                        src="https://player.vimeo.com/video/1099560675?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=0&controls=1&title=0&byline=0&portrait=0&dnt=1&transparent=0"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        allowFullScreen
                        title="Lifely_Official_Demo"
                      />
                    </div>
                    
                    {/* Hover Overlay with Blue Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
                  </div>
                  
                  {/* Floating Action Button - More visible and below the video */}
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-30">
                    <a 
                      href="https://player.vimeo.com/video/1099560675?dnt=1&transparent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-2 flex items-center gap-3 border-2 border-white/20"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Watch Full Demo
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Stats Section - Modern 2025 Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
                <div className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
                      40+
                    </div>
                    <div className="text-gray-600 text-sm font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-violet-600">
                      AI Voices
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
                      9
                    </div>
                    <div className="text-gray-600 text-sm font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-cyan-600">
                      Integrations
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center hover:scale-105 transition-all duration-500 cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-fuchsia-500 to-pink-600 bg-clip-text text-transparent mb-2 transition-all duration-300 group-hover:scale-110">
                      5
                    </div>
                    <div className="text-gray-600 text-sm font-semibold uppercase tracking-wider transition-all duration-300 group-hover:text-fuchsia-600">
                      AI Models
                    </div>
                  </div>
                </div>
              </div>

              {/* Waitlist Signup */}
              <div className="max-w-lg mx-auto mt-12 text-center">
                <h3 className="text-3xl font-bold text-lifeos-dark mb-3">
                  Get Pre-Beta Premiums
                </h3>

                <form className="flex gap-3 mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-lg border border-lifeos-gray-600 focus:outline-none focus:ring-2 focus:ring-lifeos-primary bg-white/80 transition-all duration-300 hover:bg-white hover:shadow-md focus:scale-105"
                  />
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="bg-lifeos-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-lifeos-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    {submitted ? "✓" : "Join"}
                  </button>
                </form>

                <p className="text-sm text-lifeos-gray-400">
                  Can't wait?{" "}
                  <a
                    href="#"
                    className="text-lifeos-primary hover:text-lifeos-secondary font-medium transition-all duration-300 hover:scale-105 hover:translate-x-1 inline-block"
                  >
                    Join our Discord community
                  </a>{" "}
                  to secure access now.
                </p>

                {submitted && (
                  <Alert className="mt-4 border-lifeos-success bg-green-50">
                    <AlertDescription className="text-green-800">
                      Thanks! We'll send you early access when it's ready.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div
          id="features"
          className="bg-white max-w-7xl mx-auto px-6 lg:px-4 py-24"
        >
          <div className="text-center mb-20 lg:mb-16 relative">
            {/* Floating elements for visual interest */}
            <div className="absolute -top-10 left-1/4 w-20 h-20 bg-gradient-to-br from-lifeos-primary/20 to-lifeos-secondary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -top-5 right-1/3 w-16 h-16 bg-gradient-to-br from-lifeos-secondary/30 to-purple-400/30 rounded-full blur-lg animate-pulse" style={{animationDelay: '1s'}}></div>
            
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-lifeos-primary/10 to-lifeos-secondary/10 border border-lifeos-primary/20 rounded-full px-6 py-3 mb-8 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
              <span className="text-sm font-medium text-lifeos-primary uppercase tracking-wide">
                The Complete Life OS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lifeos-dark mb-8 leading-tight group cursor-default">
              <span className="inline-block transition-all duration-500 hover:text-lifeos-primary hover:scale-105">Everything you need.</span>
              <br />
              <span className="inline-block transition-all duration-500 hover:text-lifeos-secondary hover:scale-105">Nothing you don't.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-lifeos-gray-400 max-w-3xl mx-auto leading-relaxed mb-8 hover:text-lifeos-dark transition-colors duration-300">
              Four core modules that work together seamlessly, all controlled by natural language AI.
            </p>
            
          </div>

          <div className="grid grid-cols-1 gap-16">
            {/* Life Categories Feature */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 p-8 lg:pl-10 lg:p-6 group hover:bg-white/80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-lifeos-dark mb-6 transition-colors duration-300 group-hover:text-lifeos-primary">
                    Life Categories
                  </h3>
                  <p className="text-lg md:text-xl text-lifeos-gray-400 mb-8 leading-relaxed transition-colors duration-300 group-hover:text-lifeos-dark max-w-md">
                    Organize everything around what matters most. Create categories that reflect your actual life.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-lifeos-primary hover:text-white transition-all duration-300 cursor-pointer">
                      Business
                    </div>
                    <div className="bg-lifeos-secondary/10 text-lifeos-secondary px-3 py-1 rounded-full text-sm font-medium hover:bg-lifeos-secondary hover:text-white transition-all duration-300 cursor-pointer">
                      Health
                    </div>
                    <div className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-sm font-medium hover:bg-lifeos-primary hover:text-white transition-all duration-300 cursor-pointer">
                      Learning
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-2xl overflow-hidden relative group/video hover:scale-105 hover:shadow-xl transition-all duration-300" style={{ paddingBottom: '66.5%', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1107535099?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="LifeCategories"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lifeos-primary/20 to-lifeos-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Smart Calendar Feature */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 p-8 lg:pl-10 lg:p-6 group hover:bg-white/80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-lifeos-dark mb-6 transition-colors duration-300 group-hover:text-lifeos-primary">
                    Smart Calendar
                  </h3>
                  <p className="text-lg md:text-xl text-lifeos-gray-400 mb-8 leading-relaxed transition-colors duration-300 group-hover:text-lifeos-dark max-w-md">
                    Voice commands create complex schedules. "Schedule 30 basketball training sessions" and watch it happen automatically.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Google Calendar</span>
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Apple Calendar</span>
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Outlook</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-2xl overflow-hidden relative group/video hover:scale-105 hover:shadow-xl transition-all duration-300" style={{ aspectRatio: '1.5/1' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1107537014?badge=0&autopause=0&player_id=0&app_id=58479" 
                    className="w-full h-full"
                    style={{ border: 'none' }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lifely"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lifeos-primary/20 to-lifeos-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* AI Notes Editor Feature */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 p-8 lg:pl-10 lg:p-6 group hover:bg-white/80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-lifeos-dark mb-6 transition-colors duration-300 group-hover:text-lifeos-primary">
                    AI Notes Editor
                  </h3>
                  <p className="text-lg md:text-xl text-lifeos-gray-400 mb-8 leading-relaxed transition-colors duration-300 group-hover:text-lifeos-dark max-w-md">
                    Real-time AI editing and voice-to-notes. Import from anywhere.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Live AI Editing</span>
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Voice-to-Notes</span>
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Universal Import</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-2xl overflow-hidden relative group/video hover:scale-105 hover:shadow-xl transition-all duration-300" style={{ paddingBottom: '62.65%', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1107535283?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lifely_Notes"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lifeos-primary/20 to-lifeos-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Goals & Routines Feature */}
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 p-8 lg:pl-10 lg:p-6 group hover:bg-white/80 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-12 h-12 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <svg
                      className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-lifeos-dark mb-6 transition-colors duration-300 group-hover:text-lifeos-primary">
                    Goals & Routines
                  </h3>
                  <p className="text-lg md:text-xl text-lifeos-gray-400 mb-8 leading-relaxed transition-colors duration-300 group-hover:text-lifeos-dark max-w-md">
                    AI tracks progress and builds routines automatically.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Agentic Automation</span>
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">Smart Progress</span>
                    <span className="bg-lifeos-primary/10 text-lifeos-primary px-3 py-1 rounded-full text-xs font-medium">KPI Integration</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-lifeos-dark via-gray-900 to-lifeos-dark rounded-2xl overflow-hidden relative group/video hover:scale-105 hover:shadow-xl transition-all duration-300" style={{ paddingBottom: '64.06%', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1107535374?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lifely_Goals+Routine"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-lifeos-primary/20 to-lifeos-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Integrations Section */}
          <div
            id="integrations"
            className="bg-lifeos-dark py-32 lg:py-24 mt-20 rounded-3xl"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-4">
              <div className="text-center mb-16">
                <p className="text-lifeos-gray-400 text-lg font-medium mb-8 uppercase tracking-wide">
                  Seamless Integrations
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                  Lifely connects with{' '}
                  <span className="bg-gradient-to-r from-lifeos-primary to-lifeos-secondary bg-clip-text text-transparent">
                    everything
                  </span>
                  <br />
                  you already use.
                </h2>
              </div>

              {/* Animated Integration Grid */}
              <div className="relative h-48 overflow-hidden">
                {/* Top Row */}
                <div className="absolute top-0 left-0 right-0 flex items-center">
                  <div className="flex gap-3 animate-scroll-right">
                    {[
                      { name: 'Google Calendar', bg: '#ffffff', icon: <img src="/google-calendar.svg" alt="Google Calendar" className="w-7 h-7" /> },
                      { name: 'Outlook', bg: '#ffffff', icon: <img src="/outlook.png" alt="Outlook" className="w-7 h-7" /> },
                      { name: 'Apple Calendar', bg: '#ffffff', icon: <img src="/applecal.png" alt="Apple Calendar" className="w-7 h-7" /> },
                      { name: 'Notion', bg: '#ffffff', icon: <img src="/notion (1).svg" alt="Notion" className="w-7 h-7" /> },
                      { name: 'Apple Notes', bg: '#ffffff', icon: <img src="/apple-notes.svg" alt="Apple Notes" className="w-7 h-7" /> },
                      { name: 'OneNote', bg: '#ffffff', icon: <img src="/Microsoft_Office_OneNote_Logo_512px.png" alt="OneNote" className="w-7 h-7" /> },
                      { name: 'Todoist', bg: '#ffffff', icon: <img src="/svgviewer-output.svg" alt="Todoist" className="w-7 h-7" /> },
                      { name: 'YouTube', bg: '#ffffff', icon: <img src="/youtube.svg" alt="YouTube" className="w-7 h-7" /> },
                      { name: 'Google Drive', bg: '#ffffff', icon: <img src="/google-drive-svgrepo-com (1).svg" alt="Google Drive" className="w-7 h-7" /> },
                      // Duplicates for seamless loop
                      { name: 'Google Calendar', bg: '#ffffff', icon: <img src="/google-calendar.svg" alt="Google Calendar" className="w-7 h-7" /> },
                      { name: 'Outlook', bg: '#ffffff', icon: <img src="/outlook.png" alt="Outlook" className="w-7 h-7" /> },
                      { name: 'Apple Calendar', bg: '#ffffff', icon: <img src="/applecal.png" alt="Apple Calendar" className="w-7 h-7" /> },
                      { name: 'Notion', bg: '#ffffff', icon: <img src="/notion (1).svg" alt="Notion" className="w-7 h-7" /> },
                      { name: 'Apple Notes', bg: '#ffffff', icon: <img src="/apple-notes.svg" alt="Apple Notes" className="w-7 h-7" /> },
                      { name: 'OneNote', bg: '#ffffff', icon: <img src="/Microsoft_Office_OneNote_Logo_512px.png" alt="OneNote" className="w-7 h-7" /> },
                    ].map((tool, index) => (
                      <div key={index} className="flex-shrink-0 w-48 h-20 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: tool.bg}}>
                          {tool.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="absolute top-24 left-0 right-0 flex items-center">
                  <div className="flex gap-3 animate-scroll-left">
                    {[
                      { name: 'OneNote', bg: '#ffffff', icon: <img src="/Microsoft_Office_OneNote_Logo_512px.png" alt="OneNote" className="w-7 h-7" /> },
                      { name: 'Todoist', bg: '#ffffff', icon: <img src="/svgviewer-output.svg" alt="Todoist" className="w-7 h-7" /> },
                      { name: 'YouTube', bg: '#ffffff', icon: <img src="/youtube.svg" alt="YouTube" className="w-7 h-7" /> },
                      { name: 'Google Drive', bg: '#ffffff', icon: <img src="/google-drive-svgrepo-com (1).svg" alt="Google Drive" className="w-7 h-7" /> },
                      { name: 'Google Calendar', bg: '#ffffff', icon: <img src="/google-calendar.svg" alt="Google Calendar" className="w-7 h-7" /> },
                      { name: 'Outlook', bg: '#ffffff', icon: <img src="/outlook.png" alt="Outlook" className="w-7 h-7" /> },
                      { name: 'Apple Calendar', bg: '#ffffff', icon: <img src="/applecal.png" alt="Apple Calendar" className="w-7 h-7" /> },
                      { name: 'Notion', bg: '#ffffff', icon: <img src="/notion (1).svg" alt="Notion" className="w-7 h-7" /> },
                      { name: 'Apple Notes', bg: '#ffffff', icon: <img src="/apple-notes.svg" alt="Apple Notes" className="w-7 h-7" /> },
                      // Duplicates for seamless loop
                      { name: 'OneNote', bg: '#ffffff', icon: <img src="/Microsoft_Office_OneNote_Logo_512px.png" alt="OneNote" className="w-7 h-7" /> },
                      { name: 'Todoist', bg: '#ffffff', icon: <img src="/svgviewer-output.svg" alt="Todoist" className="w-7 h-7" /> },
                      { name: 'YouTube', bg: '#ffffff', icon: <img src="/youtube.svg" alt="YouTube" className="w-7 h-7" /> },
                      { name: 'Google Drive', bg: '#ffffff', icon: <img src="/google-drive-svgrepo-com (1).svg" alt="Google Drive" className="w-7 h-7" /> },
                      { name: 'Google Calendar', bg: '#ffffff', icon: <img src="/google-calendar.svg" alt="Google Calendar" className="w-7 h-7" /> },
                      { name: 'Outlook', bg: '#ffffff', icon: <img src="/outlook.png" alt="Outlook" className="w-7 h-7" /> },
                    ].map((tool, index) => (
                      <div key={index} className="flex-shrink-0 w-48 h-20 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: tool.bg}}>
                          {tool.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fade gradients */}
                <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-lifeos-dark to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-lifeos-dark to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Integration Details Section - Builder.io inspired */}
              <div className="mt-16">
                {/* MCP Ready Badge */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white rounded-full text-sm font-semibold">
                    Discover our integrations
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-20">
                  <button
                    onClick={() => setActiveFilter("All")}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer pointer-events-auto relative z-30 hover:scale-105 hover:shadow-lg ${
                      activeFilter === "All"
                        ? "bg-lifeos-primary text-white shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveFilter("Calendar")}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer pointer-events-auto relative z-30 hover:scale-105 hover:shadow-lg ${
                      activeFilter === "Calendar"
                        ? "bg-lifeos-primary text-white shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    Calendar
                  </button>
                  <button
                    onClick={() => setActiveFilter("Productivity")}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer pointer-events-auto relative z-30 hover:scale-105 hover:shadow-lg ${
                      activeFilter === "Productivity"
                        ? "bg-lifeos-primary text-white shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    Productivity
                  </button>
                  <button
                    onClick={() => setActiveFilter("Notes")}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer pointer-events-auto relative z-30 hover:scale-105 hover:shadow-lg ${
                      activeFilter === "Notes"
                        ? "bg-lifeos-primary text-white shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    Notes
                  </button>
                  <button
                    onClick={() => setActiveFilter("AI Tools")}
                    className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer pointer-events-auto relative z-30 hover:scale-105 hover:shadow-lg ${
                      activeFilter === "AI Tools"
                        ? "bg-lifeos-primary text-white shadow-lg scale-105"
                        : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    AI Tools
                  </button>
                </div>

                {/* Integration Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {filteredIntegrations.map((integration) => (
                    <div key={integration.name} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:bg-white/20 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                      <div className="mb-4">
                        <div className={`w-12 h-12 ${integration.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                          {integration.icon}
                        </div>
                      </div>
                      <h4 className="text-white font-semibold mb-2 group-hover:text-lifeos-primary transition-colors duration-300">{integration.name}</h4>
                      <p className="text-white/80 text-sm mb-4 group-hover:text-white transition-colors duration-300">{integration.description}</p>
                    </div>
                  ))}
                </div>

                {/* MCP Integration Special Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 mb-16 group hover:bg-white/15 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-lifeos-primary to-lifeos-secondary text-white text-xs font-semibold mb-4 group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">
                        ⚡ COMING SOON
                      </div>
                      <h3 className="text-white font-bold text-2xl mb-4 group-hover:text-lifeos-primary transition-colors duration-300">MCP Protocol Integration</h3>
                      <p className="text-white/80 mb-6 group-hover:text-white transition-colors duration-300">
                        Lifely will support the Model Context Protocol (MCP), enabling seamless connections with any tool or service that supports MCP.  Lifely will be compatible with virtually any software in your workflow.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-lifeos-primary to-lifeos-secondary rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-3xl transition-all duration-500">
                        <svg className="w-14 h-14 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-b from-white via-white to-lifeos-50/30 py-32 px-16 text-center group">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-5xl font-medium text-lifeos-dark mb-8 leading-tight tracking-tight hover:text-lifeos-primary transition-colors duration-500 cursor-default">
              "Finally, AI that gets my life."
            </h2>
            <a href={`${getAppUrl()}/auth`} className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-lifeos-primary hover:to-lifeos-secondary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-lifeos-primary/25 active:scale-105 inline-block">
              Try Lifely Today
            </a>
          </div>
        </div>

        {/* Founder Blurb */}
        <div className="bg-lifeos-50 py-24 -mt-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Image */}
              <div className="relative group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-lifeos-100 to-lifeos-200 rounded-3xl overflow-hidden border border-lifeos-gray-600/20 shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <img 
                        src="/Reagan.png" 
                        alt="Reagan" 
                        className="w-96 h-96 rounded-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 object-cover object-center"
                      />
                      <p className="text-lifeos-gray-400 text-sm group-hover:text-lifeos-dark transition-colors duration-300">
                         Reagan in his element; building Lifely
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="group">
                <h2 className="text-4xl font-medium text-lifeos-dark mb-8 leading-tight hover:text-lifeos-primary transition-colors duration-300 cursor-default">
                  Hey, I'm Reagan...
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-lifeos-gray-400 leading-relaxed mb-6">
                    I've always wanted to be a successful entrepreneur, but more
                    than that, I wanted to thrive in all aspects of life. That's why I
                    built Lifely.
                  </p>
                  <p className="text-xl text-lifeos-gray-400 leading-relaxed mb-8">
                    I can create routines or edit previous ones in seconds, and
                    have the ability to create executable systems for my life in
                    less time than I could have ever dreamed of.
                  </p>
                  <p className="text-xl text-lifeos-gray-400 leading-relaxed mb-8">
                    Do yourself a favor, help me make Lifely the best life
                    productivity app of the 21st century.
                  </p>
                </div>
                <a href={`${getAppUrl()}/auth`} className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-lifeos-primary hover:to-lifeos-secondary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-lifeos-primary/25 active:scale-105 inline-block">
                  Join the Movement
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-32 group">
          <div className="max-w-4xl mx-auto text-center px-6">
            <div className="text-lifeos-gray-400 text-lg font-medium mb-4 uppercase tracking-wide hover:text-lifeos-primary transition-colors duration-300 cursor-default">
              Ready to organize your life?
            </div>
            <h2 className="text-6xl md:text-7xl font-medium text-lifeos-dark mb-8 leading-tight tracking-tight hover:text-lifeos-primary transition-colors duration-500 cursor-default">
              Try Lifely today.
            </h2>
            <p className="text-xl text-lifeos-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed hover:text-lifeos-dark transition-colors duration-300">
              The only life management app that understands natural language.
              Organize calendars, tasks, notes, goals, and routines by simply
              talking to AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={`${getAppUrl()}/auth`} className="bg-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-gradient-to-r hover:from-lifeos-primary hover:to-lifeos-secondary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-lifeos-primary/25 active:scale-105 inline-block">
                Get Started Free
              </a>
              <a href="#demo" className="flex items-center gap-2 text-lifeos-dark/70 hover:text-lifeos-primary font-medium text-lg transition-all duration-300 group hover:scale-105">
                <svg
                  className="w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>Watch Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* AI Models Powered By */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-8 hover:text-lifeos-primary transition-colors duration-300 cursor-default">
              Powered by the world's leading AI models
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              <div className="flex items-center gap-3 text-gray-600 hover:text-lifeos-primary transition-all duration-300 cursor-pointer hover:scale-110 group">
                <img 
                  src="/openai.svg" 
                  alt="OpenAI" 
                  className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">OpenAI</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-lifeos-secondary transition-all duration-300 cursor-pointer hover:scale-110 group">
                <img 
                  src="/claude-color.svg" 
                  alt="Claude" 
                  className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">Claude</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-lifeos-primary transition-all duration-300 cursor-pointer hover:scale-110 group">
                <img 
                  src="/gemini-color.svg" 
                  alt="Google Gemini" 
                  className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">Gemini</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-lifeos-secondary transition-all duration-300 cursor-pointer hover:scale-110 group">
                <img 
                  src="/grok.svg" 
                  alt="Grok" 
                  className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">Grok</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600 hover:text-lifeos-primary transition-all duration-300 cursor-pointer hover:scale-110 group">
                <img 
                  src="/deepseek-color.svg" 
                  alt="DeepSeek" 
                  className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300"
                />
                <span className="font-medium">DeepSeek</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white py-24" id="faq" role="region" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 id="faq-heading" className="text-4xl md:text-5xl font-medium text-lifeos-dark mb-6 leading-tight hover:text-lifeos-primary transition-colors duration-300 cursor-default">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-lifeos-gray-400 max-w-2xl mx-auto hover:text-lifeos-dark transition-colors duration-300">
                Get answers to common questions about Lifely
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4 relative z-50" role="region" aria-label="Frequently Asked Questions">
              <AccordionItem
                value="what-is-lifely"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-primary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger 
                  className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-primary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lifeos-primary focus:ring-offset-2 rounded-md cursor-pointer relative z-50 pointer-events-auto"
                >
                  What is Lifely?
                </AccordionTrigger>
                <AccordionContent 
                  className="text-lifeos-gray-400 pb-6 hover:text-lifeos-dark transition-colors duration-300"
                >
                  Your personal operating system: one web & mobile dashboard where calendar, tasks, routines, goals, and notes all live—and can be edited by a built-in AI assistant.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="ai-help"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-secondary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-secondary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  How does the AI actually help me day-to-day?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  Type or speak natural language ("Shift my meetings 90 min and block a workout") and the assistant updates every connected view instantly—no manual dragging or copy-paste.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="categories"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-primary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-primary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  Why organize life into categories?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  Because juggling work, fitness, study, faith, etc. in one undifferentiated list gets messy fast. Categories keep context clear while still letting you view everything at a glance when you need the "big picture."
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="dashboard-control"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-secondary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-secondary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  What can I control from the dashboard right now?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  Five global views: Calendar, Todos, Routines, Goals, and Notes. Each one supports filters, bulk actions, and quick AI commands. Habits and additional views are coming next.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="current-tools"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-primary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-primary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  Do I have to give up my current tools?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  No. Lifely plugs into popular calendars, note apps, and task managers so your existing data stays where it is—Lifely just becomes the command center on top.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="voice-commands"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-secondary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-secondary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  Can I just talk instead of type?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  Yes. Real-time voice mode lets you speak commands or brainstorm ideas; the AI transcribes, understands intent, and executes or drafts content on the spot.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="notes-special"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-primary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-primary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  What's special about the Notes section?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  Full-screen editing plus quick uploads: drop an image, record a voice memo, or paste text. Everything becomes searchable—and the AI can generate summaries, study guides, or action items from any note.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="routines-special"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-secondary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-secondary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  What's special about the Routines section?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  You can print them out and display them. The printed copy employs a beautiful aesthetic so you stick to your routines.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="autonomous"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-primary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-primary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  Will Lifely act on its own?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  Only if you let it. By default every AI suggestion is preview-only; flipping the "Autonomous" switch gives it permission to apply changes automatically (only for safe functions).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="cost"
                className="border border-gray-200 rounded-lg px-6 hover:border-lifeos-secondary/50 hover:shadow-md transition-all duration-300 relative z-50 pointer-events-auto"
              >
                <AccordionTrigger className="text-left text-lg font-medium py-6 hover:no-underline hover:text-lifeos-secondary transition-colors duration-300 cursor-pointer relative z-50 pointer-events-auto">
                  How much does it cost?
                </AccordionTrigger>
                <AccordionContent className="text-lifeos-gray-400 pb-6">
                  Lifely is free while we're in public beta.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black text-white py-16 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium">Lifely</span>
                </div>
                <p className="text-gray-400 text-sm mb-8">
                  Your AI life assistant that actually works.
                  Talk to your apps, get things done, stay organized.
                </p>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-4">
                  Get Started
                </h4>
                <ul className="space-y-4">
                  <li>
                    <a
                      href={`${getAppUrl()}/auth`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Sign up
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/sales"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Talk to sales
                    </Link>
                  </li>
                  <li>
                    <a
                      href={`${getAppUrl()}/auth`}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-4">
                  Solutions
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/how-it-works"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/use-cases"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Use cases
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/security"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/pricing"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-400 text-sm font-medium mb-4">
                  Legal
                </h4>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/documentation"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/help-center"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm">
                    All Systems Operational
                  </span>
                </div>
                <p className="text-gray-400 text-sm">
                  © 2025 Lifely. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </footer>

      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Lifely Demo</h3>
              <button
                onClick={() => setShowDemo(false)}
                className="text-gray-500 hover:text-lifeos-primary transition-all duration-300 hover:scale-110 hover:rotate-12"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/vtS6pP_g4-c?autoplay=1&mute=1&loop=1&playlist=vtS6pP_g4-c&controls=1"
                title="Lifely Official Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
