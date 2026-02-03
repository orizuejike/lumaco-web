import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, Globe, ShieldCheck, Users, 
  Phone, MapPin, ArrowRight, X, 
  Search, Landmark, Home, Map, 
  PlaneTakeoff, Key, FileText, ChevronRight, MessageCircle
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSector, setActiveSector] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const mainBoardPhone = "2349099983975";
  const uyoBranchPhone = "2349068903689";
  
  const mainWhatsappUrl = `https://wa.me/${mainBoardPhone}?text=${encodeURIComponent("Hello Lumaco Plus Board, I am interested in your corporate services.")}`;
  const uyoWhatsappUrl = `https://wa.me/${uyoBranchPhone}?text=${encodeURIComponent("Hello Lumaco Plus Uyo Branch, I am inquiring about local property services.")}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const realEstateServices = [
    { id: 'survey', title: 'Land Surveying', icon: <Map className="w-5 h-5" />, desc: 'Digital mapping and boundary verification.' },
    { id: 'buy-land', title: 'Buy Land', icon: <Landmark className="w-5 h-5" />, desc: 'Verified plots in developmental zones.' },
    { id: 'buy-property', title: 'Buy Property', icon: <Home className="w-5 h-5" />, desc: 'Residential and commercial acquisitions.' },
    { id: 'current-project', title: 'Current Projects', icon: <FileText className="w-5 h-5" />, desc: 'Developments in Lagos Island and beyond.' },
    { id: 'other-investments', title: 'Other Investments', icon: <Users className="w-5 h-5" />, desc: 'Joint venture partnerships.' },
    { id: 'rent-property', title: 'Rent Property', icon: <Key className="w-5 h-5" />, desc: 'Premium leasing and management.' },
    { id: 'overseas', title: 'Overseas Property', icon: <PlaneTakeoff className="w-5 h-5" />, desc: 'International portfolio management.' }
  ];

  const businessSectors = [
    {
      id: "healthcare",
      title: "Healthcare & Pharmaceuticals",
      shortDesc: "Wholesale distribution and retail excellence.",
      icon: <ShieldCheck className="w-10 h-10" />,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      details: "Our pharmaceutical division handles large-scale distribution and retail management, ensuring clinical integrity across West Africa."
    },
    {
      id: "logistics",
      title: "Logistics & Supply Chain",
      shortDesc: "Global clearing and last-mile delivery.",
      icon: <Globe className="w-10 h-10" />,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      details: "End-to-end logistics solutions, specialized in pharmaceuticals and construction materials."
    },
    {
      id: "consultancy",
      title: "Consultancy & Investment",
      shortDesc: "Strategic advisory for the Nigerian market.",
      icon: <Users className="w-10 h-10" />,
      color: "text-blue-800",
      bgColor: "bg-blue-50",
      details: "Navigating regulatory landscapes and maximizing returns in emerging African markets."
    }
  ];

  const filteredResults = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase();
    const results = [];
    businessSectors.forEach(s => {
      if (s.title.toLowerCase().includes(query)) results.push({ type: 'Sector', title: s.title, link: '#sectors' });
    });
    realEstateServices.forEach(r => {
      if (r.title.toLowerCase().includes(query)) results.push({ type: 'Real Estate', title: r.title, link: '#real-estate' });
    });
    return results;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-100">
      
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[100] bg-blue-950/95 backdrop-blur-xl p-6 animate-in fade-in duration-300">
          <div className="max-w-3xl mx-auto pt-20">
            <div className="flex justify-between items-center mb-10 text-white">
              <h2 className="text-xl font-black uppercase tracking-widest text-white">Search Portal</h2>
              <button onClick={() => {setIsSearchOpen(false); setSearchQuery("");}} className="hover:rotate-90 transition-transform text-white"><X size={32} /></button>
            </div>
            <input 
              autoFocus
              type="text" 
              placeholder="Search services or locations..." 
              className="w-full bg-transparent border-b-2 border-white/20 p-4 text-2xl text-white outline-none focus:border-rose-600 transition-colors placeholder:text-white/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="mt-8 space-y-3 text-white">
              {filteredResults.map((res, idx) => (
                <a key={idx} href={res.link} onClick={() => setIsSearchOpen(false)} className="block bg-white/5 p-4 rounded-xl hover:bg-white/10 border border-white/5 transition-colors">
                  <span className="text-rose-500 text-[9px] font-bold uppercase block mb-1">{res.type}</span>
                  <span className="font-bold text-lg">{res.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div style={{ height: isScrolled ? '35px' : '50px', width: 'auto', display: 'flex', alignItems: 'center' }}>
              <img src="/logo.png" style={{ height: '100%', width: 'auto', objectFit: 'contain' }} alt="Logo" />
              <div className={`flex flex-col ml-2 leading-none ${isScrolled ? 'text-blue-950' : 'text-white'}`}>
                <span className="text-lg font-black tracking-tighter uppercase">LUMACO<span className="text-rose-600">PLUS</span></span>
                <span className="text-[7px] uppercase tracking-[0.2em] font-bold opacity-60">Group</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <button 
              onClick={() => setIsSearchOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all border ${isScrolled ? 'border-slate-200 text-slate-500 hover:bg-slate-50' : 'border-white/10 text-white/80 hover:bg-white/10'}`}
            >
              <Search size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Search</span>
            </button>
            <div className="hidden md:flex gap-6 items-center text-[9px] font-bold uppercase tracking-widest">
              {['Home', 'Real Estate', 'Sectors'].map(item => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`${isScrolled ? 'text-slate-500' : 'text-white/80'} hover:text-rose-600 transition-colors`}>{item}</a>
              ))}
              <a href={mainWhatsappUrl} target="_blank" className="bg-rose-600 text-white px-5 py-2 rounded-full font-black uppercase tracking-tighter shadow-lg hover:bg-rose-700">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative h-screen flex items-center bg-blue-950 overflow-hidden text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" className="w-full h-full object-cover" alt="HQ" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="inline-block px-3 py-1 border border-rose-500 rounded-full text-rose-500 font-bold text-[9px] tracking-[0.3em] uppercase mb-6 bg-rose-500/5 backdrop-blur-sm">
             Corporate Excellence
          </div>
          <h1 className="text-[11vw] sm:text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tighter">
            DIVERSIFYING <br /><span className="text-rose-600 uppercase">PROGRESS.</span>
          </h1>
          <p className="text-lg md:text-2xl text-blue-100/70 max-w-xl mb-10 font-light leading-relaxed">
            Headquartered in <span className="text-white font-medium">Lagos Island</span> with regional hubs in <span className="text-white font-medium">Uyo</span>.
          </p>
          <button onClick={() => document.getElementById('real-estate').scrollIntoView({behavior: 'smooth'})} className="bg-white text-blue-950 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] flex items-center gap-2 hover:bg-rose-50 transition-colors">
            Properties <ArrowRight size={16} />
          </button>
        </div>
      </header>

      {/* Real Estate Services */}
      <section id="real-estate" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-rose-600 text-[10px] font-black uppercase tracking-[0.3em] block mb-2">Property & Infrastructure</span>
            <h2 className="text-3xl md:text-5xl font-black text-blue-950 tracking-tight leading-tight">Premier Real Estate Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {realEstateServices.map((service) => (
              <a key={service.id} href={mainWhatsappUrl} target="_blank" className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 hover:bg-blue-950 hover:text-white transition-all group">
                <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center text-rose-600 mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-lg font-black mb-1 leading-tight">{service.title}</h3>
                <p className="text-[11px] opacity-60 leading-relaxed">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Divisions */}
      <section id="sectors" className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-blue-950 mb-12">Corporate Portfolios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {businessSectors.map((s) => (
              <button key={s.id} onClick={() => setActiveSector(s)} className="bg-white p-8 rounded-[2.5rem] shadow-sm text-left hover:shadow-lg transition-all border border-slate-100">
                <div className={`mb-6 ${s.color} scale-125 origin-left`}>{s.icon}</div>
                <h3 className="text-xl font-black text-blue-950 mb-3">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6 italic">{s.shortDesc}</p>
                <div className="flex items-center gap-2 text-rose-600 font-bold text-[9px] uppercase tracking-widest">Insights <ChevronRight size={12} /></div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Presence */}
      <section id="about" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto bg-blue-950 rounded-[3.5rem] p-10 md:p-20 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div>
                <span className="text-rose-500 font-black text-[9px] uppercase tracking-widest block mb-4 text-rose-500">Headquarters</span>
                <div className="flex gap-4">
                  <MapPin className="text-white/40 flex-shrink-0" />
                  <p className="text-blue-100/70 text-base">13 King George Street, Lagos Island, Lagos State, Nigeria.</p>
                </div>
                <a href={mainWhatsappUrl} target="_blank" className="mt-6 flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-rose-600 transition-all text-white"><Phone size={18} /></div>
                  <span className="text-xl font-black tracking-tighter text-white">09099983975</span>
                </a>
              </div>
              <div>
                <span className="text-rose-500 font-black text-[9px] uppercase tracking-widest block mb-4 text-rose-500">Akwa Ibom Branch</span>
                <div className="flex gap-4">
                  <Building2 className="text-white/40 flex-shrink-0" />
                  <p className="text-blue-100/70 text-base italic leading-relaxed">Ring Road III, Ifa Ikot Okpon, Uyo, Akwa Ibom State.</p>
                </div>
                <a href={uyoWhatsappUrl} target="_blank" className="mt-6 flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-rose-600 transition-all text-white"><Phone size={18} /></div>
                  <div className="flex flex-col">
                    <span className="text-[8px] uppercase tracking-widest opacity-40 font-bold mb-1 text-white">Direct Line</span>
                    <span className="text-xl font-black tracking-tighter text-white">09068903689</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center border-t border-slate-50 px-6">
        <img src="/logo.png" className="h-7 w-auto mx-auto mb-6 grayscale opacity-20" alt="Footer Logo" />
        <p className="text-slate-300 text-[8px] uppercase tracking-[0.4em] leading-relaxed">
          © 2026 Lumaco Plus Group. <br />
          <span className="text-slate-400 font-black tracking-[0.6em] uppercase text-center">QUASARIZED</span>
        </p>
      </footer>

      {/* Information Modal */}
      {activeSector && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-950/90 backdrop-blur-md">
          <div className="bg-white w-full max-w-xl rounded-[2.5rem] p-10 relative shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setActiveSector(null)} className="absolute top-6 right-6 text-slate-400 hover:text-rose-600 transition-colors"><X size={24} /></button>
            <h2 className="text-2xl font-black text-blue-950 mb-4 leading-tight">{activeSector.title}</h2>
            <div className="h-1 w-10 bg-rose-600 mb-6 rounded-full" />
            <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium italic text-center">"{activeSector.details}"</p>
            <a href={mainWhatsappUrl} target="_blank" className="w-full bg-blue-950 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest text-center block hover:bg-rose-600 transition-colors">Request Brief</a>
          </div>
        </div>
      )}
    </div>
  );
}