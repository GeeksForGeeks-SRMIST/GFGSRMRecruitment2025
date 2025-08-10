import React from 'react'
import './App.css'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const handleApplyNow = () => {
    // Replace this URL with your actual Luma form URL
    window.open('https://forms.lu.ma/gfg-srmist-recruitment', '_blank')
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
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <img src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64" alt="" />
            </div>
            <div>
              <h1 className="text-white text-xl font-bold">GFG</h1>
              <p className="text-green-400 text-sm">SRMIST Club</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
            <a href="#domains" className="text-gray-300 hover:text-green-400 transition-colors">Domains</a>
            <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Join the
              <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                GFG Family
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Be part of SRMIST's premier technical community. Learn, grow, and innovate with like-minded developers.
            </p>
            <button
              onClick={handleApplyNow}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-green-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-green-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-green-400">Events Organized</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">About GFG SRMIST Club</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              GeeksforGeeks SRMIST Club is a vibrant technical community that fosters innovation, 
              learning, and collaboration. We bring together passionate students to work on exciting 
              projects, participate in hackathons, and build a strong foundation for their tech careers.
            </p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Why Join GFG SRMIST Club?</h2>
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
          <button
            onClick={handleApplyNow}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-12 border-t border-green-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <span className="text-white font-bold">GFG SRMIST Club</span>
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
              <p className="text-gray-400">Location: SRM Institute of Science and Technology</p>
            </div>
          </div>
          
          <div className="border-t border-green-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 GFG SRMIST Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
