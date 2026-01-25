import React, { useState, useEffect } from 'react';
import { 
  Building2, Globe, ShieldCheck, Users, 
  Phone, MapPin, ArrowRight, X, 
  Briefcase, ChevronRight, MessageCircle
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSector, setActiveSector] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // Your WhatsApp details
  const phoneNumber = "2349099983975";
  const whatsappMessage = encodeURIComponent("Hello Lumaco Plus, I am interested in partnering with your corporate board. My name is...");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

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
      details: "Based on our roots at Lumaco Pharmacy, we handle large-scale pharmaceutical distribution and retail excellence. We ensure quality medications reach Nigeria with clinical integrity and efficiency."
    },
    {
      id: "realestate",
      title: "Real Estate & Infrastructure",
      shortDesc: "Developing luxury living spaces in prime locations like Ikoyi.",
      icon: <Building2 className="w-10 h-10" />,
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      details: "We are redefining the Lagos skyline with premium commercial hubs and residential apartments, focused on structural safety, modern African aesthetics, and long-term sustainability."
    },
    {
      id: "logistics",
      title: "Logistics & Supply Chain",
      shortDesc: "Efficient global and local logistics solutions.",
      icon: <Globe className="w-10 h-10" />,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      details: "Connecting Nigeria to the world through clearing, forwarding, and warehouse management. We ensure that vital goods move across borders seamlessly and securely."
    },
    {
      id: "consultancy",
      title: "Consultancy & Investment",
      shortDesc: "Strategic advisory for emerging markets.",
      icon: <Users className="w-10 h-10" />,
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      details: "Strategic advisory services helping international partners and local businesses navigate the Nigerian regulatory, financial, and economic landscape for high-yield growth."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div style={{ height: isScrolled ? '40px' : '60px', width: 'auto', display: 'flex', alignItems: 'center' }}>
              <img 
                src="/logo.png" 
                style={{ height: '100%', width: 'auto', objectFit: 'contain' }} 
                alt="Lumaco Plus" 
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className={`flex flex-col ml-3 ${isScrolled ? 'text-blue-950' : 'text-white'}`}>
                <span className="text-xl font-black tracking-tighter leading-none uppercase">LUMACO<span className="text-rose-600">PLUS</span></span>
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold opacity-70">Group of Companies</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-8 items-center text-[11px] font-bold uppercase tracking-widest">
            {['Home', 'Sectors', 'About'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`${isScrolled ? 'text-slate-500' : 'text-white/80'} hover:text-rose-600 transition-colors`}>{item}</a>
            ))}
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-rose-600 text-white px-6 py-2.5 rounded-full font-black flex items-center gap-2 hover:bg-rose-700 transition-all shadow-lg"
            >
              Partner Via WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="home" className="relative h-screen flex items-center bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" className="w-full h-full object-cover" alt="Corporate" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            DIVERSIFYING <br />
            <span className="text-rose-600">PROGRESS.</span>
          </h1>
          <p className="text-xl text-blue-100/70 max-w-2xl mb-12 font-light leading-relaxed">
            Headquartered at 16 Ikoyi Road, we manage a diverse portfolio built on global standards. Start a conversation with us today.
          </p>
          <div className="flex gap-4">
            <button onClick={() => document.getElementById('sectors').scrollIntoView()} className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-white/20 transition-all">
              Explore Portfolio
            </button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-rose-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-2 shadow-2xl shadow-rose-600/20 hover:bg-rose-700 transition-all">
              <MessageCircle size={18} /> Chat with Board
            </a>
          </div>
        </div>
      </header>

      {/* Sectors Grid */}
      <section id="sectors" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black text-blue-950 mb-16">Divisions of Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessSectors.map((sector) => (
              <button 
                key={sector.id}
                onClick={() => setActiveSector(sector)}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all text-left group"
              >
                <div className={`w-16 h-16 ${sector.bgColor} ${sector.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <h3 className="text-xl font-black text-blue-950 mb-4">{sector.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">{sector.shortDesc}</p>
                <span className="text-rose-600 font-bold text-[10px] uppercase tracking-widest flex items-center gap-1">
                  View division <ChevronRight size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters Section */}
      <section id="about" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto bg-blue-950 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-black mb-10">Ikoyi Headquarters</h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="p-3 bg-white/10 rounded-xl text-rose-500"><MapPin /></div>
                  <p className="text-blue-100/60 text-lg">No 16 Ikoyi Road, Obalende S.W, <br />Ikoyi, Lagos, Nigeria.</p>
                </div>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex gap-6 items-center group cursor-pointer"
                >
                  <div className="p-4 bg-rose-600 rounded-2xl group-hover:bg-rose-500 transition-colors">
                    <Phone className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-1">Click to WhatsApp</h4>
                    <p className="text-3xl font-black tracking-tighter group-hover:text-rose-500 transition-colors">09099983975</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10 italic text-blue-100/40 leading-relaxed text-lg">
                "Our presence in the heart of Ikoyi enables us to maintain the highest level of strategic oversight across all business divisions."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR INFORMATION POPUP */}
      {activeSector && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-950/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] p-12 relative shadow-2xl animate-in zoom-in duration-300">
            <button 
              onClick={() => setActiveSector(null)} 
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X size={32} />
            </button>
            <div className={`mb-8 p-6 ${activeSector.bgColor} ${activeSector.color} inline-block rounded-[1.5rem]`}>
              {activeSector.icon}
            </div>
            <h2 className="text-4xl font-black text-blue-950 mb-4">{activeSector.title}</h2>
            <div className="h-1.5 w-20 bg-lumacoRed mb-10 rounded-full" />
            <p className="text-slate-600 text-lg leading-relaxed mb-10 italic">"{activeSector.details}"</p>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-blue-950 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm text-center block shadow-xl hover:bg-blue-900 transition-colors"
            >
              Chat About This Division
            </a>
          </div>
        </div>
      )}

      {/* CONTACT POPUP */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-950/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 relative animate-in zoom-in duration-300">
            <button 
              onClick={() => setShowContactModal(false)} 
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X />
            </button>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-lumacoRed">
                <Briefcase size={32} />
              </div>
            </div>
            <h2 className="text-3xl font-black text-blue-950 mb-4 text-center">Board Contact</h2>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-center block text-4xl font-black text-rose-600 mb-8 hover:scale-105 transition-transform"
            >
              09099983975
            </a>
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full bg-blue-950 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors shadow-lg"
            >
              <MessageCircle size={20} /> Open WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      <footer className="py-12 text-center text-slate-300 text-[10px] font-bold uppercase tracking-[0.4em] border-t border-slate-100">
        © 2026 Lumaco Plus Group • 09099983975
      </footer>
    </div>
  );
}