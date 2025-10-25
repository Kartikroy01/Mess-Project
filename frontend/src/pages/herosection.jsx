import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const lottieContainer = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Load Lottie animation
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js";
    script.async = true;

    script.onload = () => {
      if (window.lottie && lottieContainer.current) {
        window.lottie.loadAnimation({
          container: lottieContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "https://lottie.host/4f0c5e3c-5e6e-4d8e-9c3e-8f3b8c7e5d4e/rKJqXzRzYE.json",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Main content */}
      <div className="relative h-full flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Text content */}
          <div
            className={`text-left space-y-6 transition-all duration-1000 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 rounded-full text-sky-200 text-sm font-medium">
                🍽️ Next Generation Mess Management
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Smart
              <span className="block bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Hostel Mess
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-sky-100 leading-relaxed max-w-xl">
              Efficient, transparent, and smart mess management at your
              fingertips. Track meals, manage bills, and stay connected.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold text-lg hover:bg-sky-50 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl">
                Get Started
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-sky-200">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-sky-200">Hostels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-sm text-sky-200">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Lottie Animation */}
          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Glowing effect behind animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

              {/* Lottie container */}
              <div
                ref={lottieContainer}
                className="relative w-full h-96 md:h-[500px]"
              ></div>

              {/* Fallback content if Lottie doesn't load */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-white/20 text-9xl">🍽️</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
