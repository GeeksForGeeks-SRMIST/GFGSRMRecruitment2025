import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              className="text-green-400 fill-current"
            >
              {i % 4 === 0 && (
                <polygon points="20,5 35,35 5,35" />
              )}
              {i % 4 === 1 && (
                <rect x="10" y="10" width="20" height="20" rx="2" />
              )}
              {i % 4 === 2 && (
                <circle cx="20" cy="20" r="15" />
              )}
              {i % 4 === 3 && (
                <polygon points="20,5 35,20 20,35 5,20" />
              )}
            </svg>
          </div>
        ))}
      </div>

      {/* Floating rings */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="absolute opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `rotate ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="text-green-400 fill-none stroke-current"
              style={{ strokeWidth: '1' }}
            >
              <circle cx="30" cy="30" r="25" />
            </svg>
          </div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full opacity-5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)`,
              animation: `pulse ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.05;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(10px) translateY(-15px);
          }
          50% {
            transform: translateX(-5px) translateY(-25px);
          }
          75% {
            transform: translateX(-15px) translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
