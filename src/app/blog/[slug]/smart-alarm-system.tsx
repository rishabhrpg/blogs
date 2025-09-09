'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReadingProgress from '@/components/ReadingProgress';

export default function SmartAlarmPost() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string, title: string} | null>(null);

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: '🤖' },
    { id: 'why-sentinel', title: 'Why Sentinel AI?', icon: '💡' },
    { id: 'core-setup', title: 'Core Setup', icon: '⚙️' },
    { id: 'hardware', title: 'Hardware Overview', icon: '🔧' },
    { id: 'use-cases', title: 'Use Cases', icon: '🎯' },
    { id: 'demo', title: 'Live Demo', icon: '🎬' },
    { id: 'challenges', title: 'Challenges', icon: '⚡' },
    { id: 'future', title: "What's Next", icon: '🚀' },
    { id: 'source-code', title: 'Source Code', icon: '💻' },
    { id: 'conclusion', title: 'Conclusion', icon: '✨' }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <ReadingProgress />
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Sidebar Navigation */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <nav className="bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-gray-200 shadow-lg">
          <div className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-left transition-all duration-200 group ${
                  activeSection === section.id
                    ? 'bg-slate-700 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span className="text-xs">{section.icon}</span>
                <span className="text-xs font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex max-w-7xl mx-auto">
        {/* Content Column */}
        <div className="flex-1 max-w-4xl px-8 py-12 lg:ml-48">
          
          {/* Hero Section */}
          <section id="introduction" className="mb-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
                Sentinel AI System
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                An intelligent notification and security system powered by AI, combining RGB lighting, audio alerts, 
                and smart automation to transform how we interact with our digital world.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="relative rounded-2xl overflow-hidden group max-w-md shadow-lg">
                <Image
                  src="/images/ring_off.jpg"
                  alt="Sentinel AI Device - Complete Setup"
                  width={300}
                  height={300}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Key Features</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>AI-Powered Intelligence:</strong> Smart prioritization and context-aware notifications</li>
                <li><strong>Multi-Purpose Design:</strong> Work notifications, calendar alerts, and home security</li>
                <li><strong>Real-time Response:</strong> Instant visual and audio feedback for critical events</li>
              </ul>
            </div>
          </section>

          {/* Why Sentinel AI Section */}
          <section id="why-sentinel" className="mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span className="text-amber-500">💡</span>
              Why Sentinel AI?
            </h2>
            
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                AI is the future and it's not limited to phones and computers - it's coming to more and more devices.
                Sentinel AI utilizes IoT + AI technology to assist me in my daily life.
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                When most people think of alarms, they imagine a loud ringing clock or a simple door sensor. 
                But what if one device could monitor your home using a CCTV camera, run AI analytics and trigger an alarm if intrusion is detected, 
                send telegram messages with live footage of the intruder, ring the alarm and flash the lights in multiple locations?
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">What if one device could handle...</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-700 mb-3">🏢 Work & Productivity</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>Work urgent notifications</li>
                    <li>Calendar reminders</li>
                    <li>Meeting alerts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-700 mb-3">🏠 Home Security</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>AI-powered motion detection</li>
                    <li>Multi-location alerts</li>
                    <li>Immersive notifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Core Setup Section */}
          <section id="core-setup" className="mb-20">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <span className="text-slate-600">⚙️</span>
              The Core Setup
            </h2>

            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-gray-700 text-lg mb-8">
                The system consists of three main components working in harmony:
              </p>

              <h3 className="text-2xl font-semibold text-slate-800 mb-6">System Components</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 py-4 rounded-r-lg">
                  <h4 className="text-xl font-semibold text-blue-700 mb-2">💡 WLED</h4>
                  <p className="text-gray-700 mb-3">
                    Handles dynamic lighting effects - flashing, pulsing, or ambient cues for different notification types. 
                    The RGB LED ring provides immediate visual feedback that's impossible to miss.
                  </p>
                  <a 
                    href="https://github.com/rishabhrpg/wled-dfplayer/tree/sentinel-ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    <span>→ View WLED Firmware Code</span>
                  </a>
                </div>

                <div className="border-l-4 border-green-400 pl-6 bg-green-50 py-4 rounded-r-lg">
                  <h4 className="text-xl font-semibold text-green-700 mb-2">🔊 DFPlayer Mini</h4>
                  <p className="text-gray-700">
                    Plays different audio tones or music depending on the type of alert or notification. 
                    From gentle chimes to urgent alarms, audio reinforces the visual cues.
                  </p>
                </div>

                <div className="border-l-4 border-orange-400 pl-6 bg-orange-50 py-4 rounded-r-lg">
                  <h4 className="text-xl font-semibold text-orange-700 mb-2">🤖 n8n Automation</h4>
                  <p className="text-gray-700">
                    Orchestrates workflows, connects to Gmail and Calendar, processes CCTV triggers. 
                    This is the brain that decides when and how to activate Sentinel.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100 rounded-lg p-6 mt-8">
                <p className="text-gray-700 text-lg text-center italic">
                  With this combination, Sentinel becomes more than just a smart alarm. It's a multi-purpose notification and security hub.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Images */}
        <div className="hidden xl:block w-80 px-6 py-12">
          <div className="sticky top-12 space-y-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/outside_cabel.jpg"
                alt="External connections"
                width={320}
                height={240}
                className="w-full h-auto"
              />
              <p className="text-xs text-gray-500 mt-2 text-center bg-gray-50 py-2">External connections</p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/images/outside_back.jpg"
                alt="Device back view"
                width={320}
                height={240}
                className="w-full h-auto"
              />
              <p className="text-xs text-gray-500 mt-2 text-center bg-gray-50 py-2">Back panel view</p>
            </div>
          </div>
        </div>
      </div>

      {/* Continue with remaining sections in main column */}
      <div className="max-w-4xl mx-auto px-8 lg:ml-48">
        {/* Hardware Overview Section */}
        <section id="hardware" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="text-slate-600">🔧</span>
            Hardware Overview
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-700 text-lg mb-8">
              The hardware design focuses on reliability and modularity. Each component serves a specific purpose 
              while working together seamlessly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div 
                className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedImage({
                  src: "/images/chips_used.jpg",
                  alt: "ESP8266 and Components Used - Detailed view of the microcontroller and electronic modules",
                  title: "Core Components"
                })}
              >
                <div className="relative group">
                  <Image
                    src="/images/chips_used.jpg"
                    alt="ESP8266 and Components Used"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Core Components</h4>
                  <p className="text-sm text-gray-600">ESP8266 & electronic modules</p>
                </div>
              </div>

              <div 
                className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedImage({
                  src: "/images/df_player.jpg",
                  alt: "DFPlayer Mini Audio Module - Audio processing unit for sound alerts and notifications",
                  title: "Audio Module"
                })}
              >
                <div className="relative group">
                  <Image
                    src="/images/df_player.jpg"
                    alt="DFPlayer Mini Audio Module"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Audio Module</h4>
                  <p className="text-sm text-gray-600">DFPlayer Mini for sound alerts</p>
                </div>
              </div>

              <div 
                className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedImage({
                  src: "/images/pcb_back.jpg",
                  alt: "PCB Back View - Circuit Design showing the custom printed circuit board layout and connections",
                  title: "Custom PCB"
                })}
              >
                <div className="relative group">
                  <Image
                    src="/images/pcb_back.jpg"
                    alt="PCB Back View - Circuit Design"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Custom PCB</h4>
                  <p className="text-sm text-gray-600">Circuit board design & layout</p>
                </div>
              </div>

              <div 
                className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedImage({
                  src: "/images/inside_2_landscape.jpg",
                  alt: "Internal Components Layout - Detailed view of component placement and internal wiring structure",
                  title: "Internal Assembly"
                })}
              >
                <div className="relative group">
                  <Image
                    src="/images/inside_2_landscape.jpg"
                    alt="Internal Components Layout"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Internal Assembly</h4>
                  <p className="text-sm text-gray-600">Component placement & wiring</p>
                </div>
              </div>

              <div 
                className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedImage({
                  src: "/images/inside_1.jpg",
                  alt: "Internal Components - Another View showing the organized internal structure and component arrangement",
                  title: "Internal View"
                })}
              >
                <div className="relative group">
                  <Image
                    src="/images/inside_1.jpg"
                    alt="Internal Components - Another View"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Internal View</h4>
                  <p className="text-sm text-gray-600">Component organization</p>
                </div>
              </div>

              <div 
                className="rounded-xl overflow-hidden shadow-md bg-white cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
                onClick={() => setSelectedImage({
                  src: "/images/outside_power.jpg",
                  alt: "External Power Connection - Power supply setup and external electrical connections",
                  title: "Power Supply"
                })}
              >
                <div className="relative group">
                  <Image
                    src="/images/outside_power.jpg"
                    alt="External Power Connection"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 rounded-full p-2">
                      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-1">Power Supply</h4>
                  <p className="text-sm text-gray-600">External power connection</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Key Hardware Components</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2 text-gray-700">
                  <li>• ESP8266 Microcontroller</li>
                  <li>• WS2812B LED Ring</li>
                  <li>• DFPlayer Mini Audio Module</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>• Custom PCB Design</li>
                  <li>• 3D Printed Enclosure</li>
                  <li>• Integrated Speaker System</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="text-emerald-600">🎯</span>
            Use Cases
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">1. Smart Office Notifications</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              In today's world, we are bombarded with notifications on screens and devices. The problem? They're easy to miss, 
              especially if you're deep in work or away from your phone. I wanted a system that would cut through the noise through AI, 
              using lights and sound in the physical world to make notifications impossible to ignore.
            </p>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6 rounded-r-lg">
              <h4 className="text-xl font-semibold text-red-700 mb-3">🚨 Urgent Email Handling</h4>
              <ul className="text-gray-700 mb-4">
                <li>n8n detects high-priority messages in Gmail</li>
                <li>Sentinel flashes bright red lights and plays urgent alert music</li>
                <li>No more missed critical messages buried in inbox clutter</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-r-lg">
              <h4 className="text-xl font-semibold text-blue-700 mb-3">📧 Non-urgent Email Processing</h4>
              <ul className="text-gray-700 mb-4">
                <li>Plays a softer chime with gentle blue light effect</li>
                <li>Stay informed without breaking focus</li>
                <li>Customizable priority levels based on sender and content</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mb-6">2. Smart Calendar Notifications</h3>
            <p className="text-gray-700 mb-4">
              Meetings are easy to forget in the middle of deep work. With Google Calendar wired into n8n:
            </p>
            <ul className="text-gray-700 mb-8">
              <li>When a meeting starts → Sentinel flashes blue lights and plays notification tone</li>
              <li>5-minute warnings with gentle amber lighting</li>
              <li>Different tones for different meeting types</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mb-6">3. Advanced Home Security System</h3>
            <p className="text-gray-700 mb-6">
              This is where Sentinel really shines. I connected my CCTV camera to a custom Node.js bridge that uses ONVIF to listen for motion or person detection events.
              <a 
                href="https://github.com/rishabhrpg/onvif-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-green-600 hover:text-green-800 text-sm font-medium ml-2"
              >
                <span>→ View ONVIF AI Bridge Code</span>
              </a>
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h4 className="text-xl font-semibold text-red-700 mb-4">🔒 Security Alert Flow</h4>
              <ol className="text-gray-700 mb-6 space-y-2">
                <li><strong>1.</strong> CCTV detects motion/person using AI analytics</li>
                <li><strong>2.</strong> Node.js bridge sends webhook to n8n workflow</li>
                <li><strong>3.</strong> n8n triggers Sentinel → flashing red/blue lights and alarm sound</li>
                <li><strong>4.</strong> Effect is intimidating, designed to scare off intruders</li>
                <li><strong>5.</strong> Telegram notification sent with live footage</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="text-slate-600">🎬</span>
            Live Demo
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-700 text-lg mb-8">
              See Sentinel AI in action with these demonstration videos showing different lighting effects and system responses.
            </p>

            {/* Featured YouTube Demo */}
            <div className="mb-12">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/H0_I8JMOM4o"
                  title="Sentinel AI System - Complete Demo"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="text-gray-600 text-sm text-center bg-gray-50 py-3 rounded-b-xl font-medium">
                🎬 Complete Sentinel AI System Demonstration
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Additional Demo Videos</h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <video 
                  controls 
                  className="w-full rounded-xl shadow-lg"
                  poster="/images/blue_ring.jpg"
                >
                  <source src="/videos/demo_dark.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-gray-600 text-sm text-center bg-gray-50 py-2 rounded">Sentinel AI in action - Dark room demonstration</p>
              </div>

              <div className="space-y-4">
                <video 
                  controls 
                  className="w-full rounded-xl shadow-lg"
                  poster="/images/ring_off.jpg"
                >
                  <source src="/videos/light_ring.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-gray-600 text-sm text-center bg-gray-50 py-2 rounded">LED ring lighting effects demonstration</p>
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">What you're seeing:</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Dynamic LED ring responding to different notification types</li>
                <li>• Audio feedback synchronized with visual effects</li>
                <li>• Real-time response to n8n workflow triggers</li>
                <li>• Ambient lighting that adapts to room conditions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section id="challenges" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="text-amber-500">⚡</span>
            Challenges Along the Way
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-700 text-lg mb-8">
              Building Sentinel wasn't without its hurdles, but solving these challenges made the system more robust and reliable:
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Challenges</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-orange-400 pl-6 bg-orange-50 py-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-orange-700 mb-2">🔊 DFPlayer Integration Issues</h4>
                <p className="text-gray-700">
                  Getting consistent sound playback required careful debugging of connections and SD card formatting. 
                  The module is sensitive to power fluctuations and requires specific file naming conventions.
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 py-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">💡 WLED Synchronization</h4>
                <p className="text-gray-700">
                  Timing effects to sync light with sound took experimentation. Had to account for network latency 
                  and ensure the ESP8266 could handle rapid API calls without freezing.
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6 bg-green-50 py-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-2">🤖 n8n Workflow Complexity</h4>
                <p className="text-gray-700">
                  Filtering urgent vs. non-urgent emails and handling multiple services without overlap was a balancing act. 
                  Required careful webhook management and error handling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Future Section */}
        <section id="future" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="text-slate-600">🚀</span>
            What's Next for Sentinel
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-700 text-lg mb-8">
              This project is just the beginning. Here are some exciting extensions on the roadmap:
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Planned Enhancements</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-400 pl-6 bg-green-50 py-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-green-700 mb-2">🗣️ Voice Alerts</h4>
                <p className="text-gray-700">
                  Personalized spoken notifications using text-to-speech (e.g., "Meeting in 5 minutes with John")
                </p>
              </div>

              <div className="border-l-4 border-blue-400 pl-6 bg-blue-50 py-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-blue-700 mb-2">🎨 Context-Aware Lighting</h4>
                <p className="text-gray-700">
                  Morning vs. evening alerts with different tones and colors. Weather-based mood lighting integration.
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6 bg-cyan-50 py-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-cyan-700 mb-2">🏠 Expanded IoT Integration</h4>
                <p className="text-gray-700">
                  Connect with smart locks, motion sensors, coffee machines, and other home automation devices.
                </p>
              </div>

              <div className="border-l-4 border-amber-400 pl-6 bg-amber-50 py-4 rounded-r-lg">
                <h4 className="text-xl font-semibold text-amber-700 mb-2">🧠 Advanced AI Features</h4>
                <p className="text-gray-700">
                  Let AI decide which notifications truly matter based on context, patterns, and user behavior analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Source Code Section */}
        <section id="source-code" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="text-slate-600">💻</span>
            Source Code & Implementation
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              The complete Sentinel AI system is open source and available on GitHub. Here are the key repositories 
              that power this intelligent notification system:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">WLED Firmware</h3>
                    <p className="text-gray-600 mb-4">
                      Custom WLED firmware with DFPlayer Mini integration for audio alerts and RGB lighting effects.
                    </p>
                    <a 
                      href="https://github.com/rishabhrpg/wled-dfplayer/tree/sentinel-ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">C++</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">ESP32/ESP8266</span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs">WLED</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">ONVIF AI Bridge</h3>
                    <p className="text-gray-600 mb-4">
                      Node.js application that connects to CCTV cameras via ONVIF protocol and provides AI-powered motion detection.
                    </p>
                    <a 
                      href="https://github.com/rishabhrpg/onvif-ai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>View on GitHub</span>
                    </a>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">TypeScript</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Node.js</span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">ONVIF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-100 border-l-4 border-slate-600 pl-6 py-4 rounded-r-lg">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">🛠️ Getting Started</h3>
              <p className="text-gray-700 mb-3">
                Both repositories include detailed setup instructions, wiring diagrams, and configuration examples. 
                The code is well-documented and includes:
              </p>
              <ul className="text-gray-700 space-y-1">
                <li>• Step-by-step installation guides</li>
                <li>• Hardware connection diagrams</li>
                <li>• Configuration templates</li>
                <li>• API documentation</li>
                <li>• Troubleshooting guides</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section id="conclusion" className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="text-slate-600">✨</span>
            Conclusion
          </h2>

          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The <strong>Sentinel AI System</strong> proves that with a few inexpensive components and the power of automation, 
              you can build a multi-purpose alert and security system that's smarter than any off-the-shelf alarm.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Whether it's saving you from missing an urgent email, reminding you of a meeting, or protecting your home, 
              Sentinel turns ordinary hardware into an intelligent assistant that lives in the physical world.
            </p>

            <div className="bg-slate-100 border-l-4 border-slate-600 pl-6 py-4 rounded-r-lg">
              <p className="text-xl text-slate-700 font-semibold italic">
                "It's not just an alarm. It's your Sentinel."
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">Key Takeaways</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• IoT + AI creates powerful automation possibilities</li>
              <li>• Physical notifications are more effective than digital ones</li>
              <li>• Modular design allows for easy expansion and customization</li>
              <li>• Open-source tools like n8n make complex workflows accessible</li>
            </ul>
          </div>
        </section>

        {/* Author Bio */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md mb-12">
          <div className="flex items-start space-x-6">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-2xl">R</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                About Rishabh Gusain
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate maker and AI enthusiast who loves building intelligent IoT solutions. 
                With a background in software engineering and a fascination with automation, I enjoy 
                creating projects that blend AI, hardware, and real-world problem solving.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-slate-100 border border-slate-300 text-slate-700 px-3 py-1 rounded-full text-sm">
                  🤖 AI Developer
                </span>
                <span className="bg-green-100 border border-green-300 text-green-700 px-3 py-1 rounded-full text-sm">
                  🏠 Smart Home Expert
                </span>
                <span className="bg-blue-100 border border-blue-300 text-blue-700 px-3 py-1 rounded-full text-sm">
                  ⚡ IoT Enthusiast
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}