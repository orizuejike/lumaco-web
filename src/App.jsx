import React, { useState, useEffect } from 'react';
import { 
  Building2, Globe, ShieldCheck, Users, 
  Phone, MapPin, ArrowRight, X, 
  Briefcase, ChevronRight, MessageCircle
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSector, setActiveSector] = useState(null);

  const phoneNumber = "2349099983975";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello Lumaco Plus Board, I am reaching out from the corporate portal regarding a partnership.")}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessSectors = [
    {
      id: "healthcare",
      title: "Healthcare & Pharmaceuticals",
      shortDesc: "Leading medical excellence and drug distribution across West Africa.",
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      details: "Leveraging our expertise at Lumaco Pharmacy, we manage a robust pharmaceutical supply chain. We ensure high-quality medications reach Nigeria through wholesale distribution and strategic clinical partnerships."
    },
    {
      id: "realestate",
      title: "Real Estate & Infrastructure",
      shortDesc: "Developing luxury living spaces in prime locations like Ikoyi.",
      icon: <Building2 className="w-10 h-10" />,
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      details: "We are redefining the Lagos skyline with structurally sound, premium residential and commercial developments. Our focus is on long-term value and modern African architectural excellence."
    },
    {
      id: "logistics",
      title: "Logistics & Supply Chain",
      shortDesc: "Efficient global and local logistics solutions.",
      icon: <Globe className="w-10 h-10" />,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      details: "Connecting the Nigerian market to global trade. We specialize in clearing, forwarding, and last-mile logistics for pharmaceutical, construction, and consumer goods."
    },
    {
      id: "consultancy",
      title: "Consultancy & Investment",
      shortDesc: "Strategic advisory for emerging markets.",
      icon: <Users className="w-10 h-10" />,
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      details: "We provide the strategic roadmap for international investors entering Nigeria. Our advisory covers regulatory compliance, market entry strategies, and high-growth investment opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div style={{ height: isScrolled ? '40px' : '55px', width: 'auto', display: 'flex', alignItems: 'center' }}>
              <img 
                src="/logo.png" 
                style={{ height: '100%', width: 'auto', objectFit: 'contain' }} 
                alt="Lumaco Plus" 
              />
              <div className={`flex flex-col ml-3 ${isScrolled ? 'text-blue-950' : 'text-white'}`}>
                <span className="text-xl font-black tracking-tighter leading-none uppercase">LUMACO<span className="text-rose-600">PLUS</span></span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-70">Group of Companies</span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center text-[10px] font-bold uppercase tracking-widest">
            {['Home', 'Sectors', 'About'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`${isScrolled ? 'text-slate-500' : 'text-white/80'} hover:text-rose-600 transition-colors`}>{item}</a>
            ))}
            <a href={whatsappUrl} target="_blank" className="bg-rose-600 text-white px-6 py-2.5 rounded-full hover:bg-rose-700 transition-all shadow-lg font-black uppercase tracking-tighter">
              Contact Board
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" className="w-full h-full object-cover" alt="Corporate" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            DIVERSIFYING <br /><span className="text-rose-600">PROGRESS.</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/70 max-w-2xl mb-12 font-light leading-relaxed">
            Headquartered in <span className="text-white font-medium">Ikoyi</span> with regional operations in <span className="text-white font-medium">Uyo</span>.
          </p>
          <button onClick={() => document.getElementById('sectors').scrollIntoView({behavior: 'smooth'})} className="bg-rose-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-rose-700 transition-all shadow-2xl shadow-rose-600/20">
            Our Portfolio <ArrowRight size={18} className="inline ml-2" />
          </button>
        </div>
      </header>

      {/* 1. SECTORS FIRST: Lead with the business value */}
      <section id="sectors" className="py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-16 tracking-tight text-center lg:text-left">Divisions of Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSectors.map((sector) => (
              <button 
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-3 transition-all text-left group"
              >
                <div className={`w-16 h-16 ${sector.bgColor} ${sector.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <h3 className="text-xl font-black text-blue-950 mb-4">{sector.title}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">{sector.shortDesc}</p>
                <div className="flex items-center gap-2 text-rose-600 font-black text-[10px] uppercase tracking-widest">
                  View Details <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. ADDRESSES SECOND: Establish physical authority and provide contact info */}
      <section id="about" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-blue-950 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-16 leading-tight border-b border-white/10 pb-8 text-white">Corporate Presence</h2>
              
              <div className="grid lg:grid-cols-2 gap-16 md:gap-32">
                {/* Lagos Office */}
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 bg-rose-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Head Office</div>
                  <div className="flex gap-6 items-start">
                    <MapPin className="text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-white">Lagos, Nigeria</h4>
                      <p className="text-blue-100/60 leading-relaxed text-lg italic">No 16 Ikoyi Road, Obalende S.W,<br />Ikoyi, Lagos State.</p>
                    </div>
                  </div>
                </div>

                {/* Uyo Office */}
                <div className="space-y-8">
                  <div className="inline-block px-3 py-1 bg-white/10 text-[10px] font-black uppercase tracking-widest rounded-lg">Regional Branch</div>
                  <div className="flex gap-6 items-start">
                    <Building2 className="text-rose-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-white">Uyo, Akwa Ibom</h4>
                      <p className="text-blue-100/60 leading-relaxed text-lg italic">First Floor, Commercial/Office Block,<br />Ring Road III, Ifa Ikot Okpon,<br />Uyo, Akwa Ibom State.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Contact */}
              <div className="mt-20 pt-10 border-t border-white/10">
                <a href={whatsappUrl} target="_blank" className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-16 h-16 bg-rose-600 rounded-3xl flex items-center justify-center text-white group-hover:bg-rose-500 transition-colors shadow-xl shadow-rose-600/20"><Phone size={32} /></div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-rose-500 mb-1">Direct Board Line & WhatsApp</h4>
                    <p className="text-4xl md:text-5xl font-black tracking-tighter group-hover:text-rose-500 transition-colors">09099983975</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Popup */}
      {activeSector && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-950/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setActiveSector(null)} className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"><X size={32} /></button>
            <div className={`mb-8 p-6 ${activeSector.bgColor} ${activeSector.color} inline-block rounded-[1.5rem]`}>{activeSector.icon}</div>
            <h2 className="text-4xl font-black text-blue-950 mb-4">{activeSector.title}</h2>
            <div className="h-1.5 w-20 bg-rose-600 mb-8 rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed mb-10 italic font-medium">"{activeSector.details}"</p>
            <a href={whatsappUrl} target="_blank" className="w-full bg-blue-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-center block shadow-xl hover:bg-blue-900 transition-colors">
              Consult with the Board
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-8">
            <img src="/logo.png" className="h-10 w-auto grayscale opacity-50" alt="Lumaco Plus" />
          </div>
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] mb-4">Lagos • Uyo • West Africa</p>
          <p className="text-slate-300 text-[9px] uppercase tracking-widest leading-loose">
            © 2026 Lumaco Plus Group of Companies. <br />
            Integrity. Quality. Excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}

function MessageCircle({size}) { return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>; }
