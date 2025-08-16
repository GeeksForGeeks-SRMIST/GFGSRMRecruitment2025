import React, { useState } from 'react'
import './App.css'
import AnimatedBackground from './components/AnimatedBackground'
import logo from './assets/Logo.png';
import { useEffect } from 'react';
import logo2 from './assets/logo2.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const script = document.createElement('script');
  script.id = 'luma-checkout';
  script.src = 'https://embed.lu.ma/checkout-button.js';
  script.async = true;
  document.body.appendChild(script);

  // Trigger animation after component mounts
  setTimeout(() => setIsVisible(true), 100);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleApplyNow = () => {
    // Replace this URL with your actual Luma form URL
    window.open('https://lu.ma/event/evt-kAW6MRTnxTImabb')
  }

  const domains = [
    {
      name: 'Technical',
      description: 'Build innovative solutions, work on cutting-edge projects, and master the latest technologies.',
      icon: '🚀',
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Management',
      description: 'Lead teams, organize events, and develop strategic planning skills for club operations.',
      icon: '⚡',
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'Creatives',
      description: 'Design stunning visuals, create engaging content, and bring ideas to life through creativity.',
      icon: '🎨',
      color: 'from-emerald-500 to-green-600'
    },
    {
      name: 'Corporate',
      description: 'Build industry connections, manage partnerships, and develop business acumen.',
      icon: '💼',
      color: 'from-green-400 to-green-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 rounded-lg flex items-center justify-center">
              <img src={logo} alt="GeeksForGeeks Logo" className="h-[3rem]"/>
            </div>
            <div>
              <h1 className="text-white text-2xl font-bold">GeeksforGeeks</h1>
              <p className="text-green-400 text-sm">Campus Body SRMIST</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors focus:outline-none focus:text-white">About</a>
            <a href="#domains" className="text-gray-300 hover:text-green-400 transition-colors focus:outline-none focus:text-white">Domains</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors focus:outline-none focus:text-white">Contact</a>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-green-400 transition-colors p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-current my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-5 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="pt-4 pb-2 space-y-2 border-t border-green-500/20">
            <a 
              href="#about" 
              className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#domains" 
              className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Domains
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-16 text-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5"></div>
          <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-300 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-40 left-20 w-1 h-1 bg-green-300 rounded-full opacity-25 animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-left space-y-8">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-green-500/15 border border-green-400/30 rounded-full text-green-400 text-sm font-medium backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Applications Open for 2025
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Join the
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                    GFG SRMIST Family
                  </span>
                </h1>
                
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  Be part of SRMIST's premier technical community. Learn, grow, and innovate with like-minded developers in an environment that fosters creativity and excellence.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className={`transition-all duration-1000 delay-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <button
                    className="flex-1 group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 border border-green-400/20 "
                    type="button"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-kAW6MRTnxTImabb"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a9b9b] to-[#26E8E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

                {/* Join WhatsApp Community */}
                <a
                  href="https://chat.whatsapp.com/Bs7EM7GP6VqDBiS2CjIqfP" // Replace with actual WhatsApp link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center text-green-400 hover:text-white border border-green-400/30 hover:border-green-400/60 font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-green-400/10"
                >
                  Join WhatsApp Community 📢
                </a>
              </div>



              {/* Quick Stats */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">70+</div>
                  <div className="text-sm text-green-400">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">7+</div>
                  <div className="text-sm text-green-400">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-sm text-green-400">Events</div>
                </div>
              </div>
            </div>

            {/* Right Column - Logo & Features */}
            <div className="space-y-8">
              {/* GFG Logo Card */}
              <div className="relative group">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-full flex items-center justify-center shadow-2xl border border-green-400/30 backdrop-blur-sm hover:border-green-300/50 transition-all duration-300">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg p-4">
                    <img src={logo2} alt="GeeksForGeeks Logo" />
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 w-48 h-48 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Feature Cards */}
              <div className="hidden sm:grid sm:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-4 text-center hover:border-green-400/40 transition-all duration-300">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm text-green-400 font-medium">Skill Development</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-4 text-center hover:border-green-400/40 transition-all duration-300">
                  <div className="text-2xl mb-2">🤝</div>
                  <div className="text-sm text-green-400 font-medium">Networking</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-4 text-center hover:border-green-400/40 transition-all duration-300">
                  <div className="text-2xl mb-2">🏆</div>
                  <div className="text-sm text-green-400 font-medium">Recognition</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-4 text-center hover:border-green-400/40 transition-all duration-300">
                  <div className="text-2xl mb-2">💡</div>
                  <div className="text-sm text-green-400 font-medium">Placement Training</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-green-500/20">
            <p className="text-gray-400 text-sm mb-6">Trusted by students across SRMIST</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-sm">Free Membership</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-sm">Industry Mentorship</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span className="text-sm">Career Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div
            className="group bg-gray-900/60 backdrop-blur-lg border border-green-400/10 rounded-2xl p-10 shadow-lg hover:shadow-green-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight">
                About <span className="text-green-400">GeeksforGeeks SRMIST</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                <span className="text-green-400 font-semibold">GeeksforGeeks SRMIST Club</span> is more than just a tech club — 
                it’s a <span className="text-green-300">thriving hub</span> of <span className="font-semibold">innovation</span>, learning, and limitless possibilities 🚀.
                <br /><br />
                We unite passionate minds from every corner of SRMIST to 
                <span className="text-green-300"> create impactful projects</span>, 
                <span className="text-green-300"> conquer hackathons</span>, and 
                <span className="text-green-300"> explore cutting-edge technologies</span>.
                <br /><br />
                Here, you don’t just <span className="font-semibold text-green-300">learn</span> — you 
                <span className="font-semibold text-green-400"> collaborate, build</span>, and 
                pave the way for a <span className="text-green-300">future-ready tech career</span> with guidance from industry experts and a vibrant peer community.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Domains Section */}
      <section id="domains" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Domain</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the domain that aligns with your interests and career goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative p-8 text-center">
                  <div className="text-6xl mb-4">{domain.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{domain.name}</h3>
                  <p className="text-gray-300 leading-relaxed">{domain.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      

      {/* Why Join Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Join GFG Campus Body?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Skill Development</h3>
              <p className="text-gray-300">Enhance your technical and soft skills through hands-on projects and workshops.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Networking</h3>
              <p className="text-gray-300">Connect with industry professionals, alumni, and fellow tech enthusiasts.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Recognition</h3>
              <p className="text-gray-300">Get certificates, awards, and recognition for your contributions and achievements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of students who have already transformed their careers with GFG SRMIST Club
          </p>
          <div className={`transition-all duration-1000 delay-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <button
                    className="flex-1 group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 border border-green-400/20 "
                    type="button"
                    data-luma-action="checkout"
                    data-luma-event-id="evt-kAW6MRTnxTImabb"
                  >
                    <span className="relative z-10">Apply Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1a9b9b] to-[#26E8E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-12 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <img src={logo} alt="" />
                </div>
                <span className="text-white font-bold">GFG Campus Body SRMIST</span>
              </div>
              <p className="text-gray-400">
                Empowering students through technology, innovation, and collaboration.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#domains" className="text-gray-400 hover:text-green-400 transition-colors">Domains</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4">Contact Info</h3>
              <p className="text-gray-400">Email: gfg@srmist.edu.in</p>
              <p className="text-gray-400">Whatsapp: +91 8918120382</p>
              <p className="text-gray-400">Location: SRM Institute of Science and Technology
SRM Nagar, Kattankulathur - 603 203
Chengalpattu District, Tamil Nadu</p>
            </div>
          </div>
          
          <div className="border-t border-green-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 GFG Campus Body SRMIST. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
