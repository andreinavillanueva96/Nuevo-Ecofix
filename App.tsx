import { motion, AnimatePresence, useInView } from "motion/react";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { 
  ShieldCheck, Cpu, Network, CheckCircle2, Armchair, Biohazard, 
  ShieldAlert, Brain, Handshake, Search, UserCheck, GraduationCap, 
  ClipboardCheck, FileText, BriefcaseMedical, Gavel, Microscope, 
  RefreshCw, Users, Info, CheckCheck, AlertTriangle, Hand, Skull, 
  Wind, Zap, Flame, Activity, Megaphone, MessageSquare, Eye, 
  HeartPulse, Shield, HardHat, HelpingHand, AlertCircle, DoorOpen, 
  Eraser, LogOut, Wrench, Footprints, Ban, Menu, X, Clock, Download,
  Scale, Target, Heart, Sparkles, EyeOff, HeartHandshake, Award, TrendingUp, Layers, Building, Settings, CircleDollarSign,
  UserPlus, Trophy, Table, BarChart3, PieChart, Calendar
} from "lucide-react";

// --- Components ---

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; key?: React.Key; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4 }}
    className="pt-20"
  >
    {children}
  </motion.div>
);

// --- Sections ---

const SaludSection = () => (
  <>
    <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')` }}>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-emerald-500 bg-clip-text text-transparent">
        Prevención <br/>& Salud Integral
      </h1>
    </section>
    <div className="max-w-6xl mx-auto -mt-24 px-4 pb-24 grid gap-8">
      {[
        { pill: "Objetivo Prioritario", icon: Armchair, title: "Cuidado Musculoesquelético", color: "bg-emerald-500", desc: "Implementamos ergonomía avanzada en taller y oficinas para eliminar lesiones comunes.", items: ["Mobiliario regulable", "Pausas activas", "Formación técnica"], stats: [{v: "-30%", l: "Molestias"}, {v: "100%", l: "Formados"}] },
        { icon: Biohazard, title: "Seguridad Química y RAEE", color: "bg-blue-500", desc: "Controlamos la exposición a componentes peligrosos mediante una gestión impecable de residuos.", items: ["Separación de baterías", "Almacenamiento seguro", "Inspecciones mensuales"], stats: [{v: "100%", l: "Gestión"}, {v: "0", l: "Exposición"}] },
        { icon: ShieldAlert, title: "Siniestralidad Cero", color: "bg-red-500", desc: "Superamos la media del sector informático. Analizamos cada dato para garantizar tu seguridad.", stats: [{v: "-20%", l: "Bajo índice"}, {v: "0", l: "Accidentes"}] },
        { pill: "Cuidado Humano", icon: Brain, title: "Salud Mental y Bienestar", color: "bg-purple-500", desc: "Prevenimos el estrés tecnológico mediante una organización equilibrada y apoyo constante.", items: ["Canal confidencial", "Rotación de puestos", "Mindfulness"], stats: [{v: "+15%", l: "Satisfacción"}, {v: "100%", l: "Apoyo"}] }
      ].map((card, i) => (
        <Reveal key={i}>
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] hover:border-emerald-500/30 transition-all">
            {card.pill && <span className="inline-block px-4 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold uppercase tracking-wider rounded-full mb-6">{card.pill}</span>}
            <div className="flex items-center gap-6 mb-8">
              <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center text-slate-900`}><card.icon size={32} /></div>
              <h2 className="text-3xl font-bold">{card.title}</h2>
            </div>
            <p className="text-gray-400 text-lg mb-8">{card.desc}</p>
            {card.items && (
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {card.items.map(item => <li key={item} className="flex items-center gap-2 text-gray-300"><CheckCircle2 size={16} className="text-emerald-500" /> {item}</li>)}
              </ul>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {card.stats.map(s => (
                <div key={s.l}><span className="block text-3xl font-black text-emerald-500">{s.v}</span><span className="text-xs uppercase tracking-widest text-gray-500">{s.l}</span></div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </>
);

const OrganizacionSection = () => (
  <>
    <header className="h-[50vh] bg-cover bg-fixed bg-center flex flex-col items-center justify-center text-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=2069&auto=format&fit=crop')` }}>
      <span className="px-4 py-1 bg-emerald-500 text-slate-900 text-xs font-black rounded-full mb-4">CERTIFICADO SPA</span>
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">Organización Preventiva</h1>
      <p className="max-w-xl text-gray-400">Garantizamos un entorno laboral seguro mediante la anticipación y el respaldo de expertos.</p>
    </header>
    <div className="max-w-4xl mx-auto -mt-16 px-4 mb-24">
      <Reveal>
        <div className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500 p-8 rounded-3xl text-center">
          <Handshake className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Nuestro Partner: EQUABY PREVENCIÓN</h3>
          <p className="text-gray-300">Contamos con el asesoramiento de un Servicio de Prevención Ajeno acreditado en Galicia.</p>
        </div>
      </Reveal>
    </div>
    <section className="max-w-6xl mx-auto px-4 pb-24">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">El Ciclo de Protección Nuevo EcoFix</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { n: "01", icon: Search, t: "Evaluación", d: "Identificación de riesgos ergonómicos y eléctricos." },
          { n: "02", icon: UserCheck, t: "Acción", d: "Implementación de EPIs y mejora de ventilación." },
          { n: "03", icon: GraduationCap, t: "Saber", d: "Capacitación obligatoria para toda la plantilla." },
          { n: "04", icon: ClipboardCheck, t: "Mejora", d: "Auditorías internas y seguimiento riguroso." }
        ].map((step, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group h-full">
              <span className="text-xs font-black text-emerald-500 tracking-widest block mb-4">{step.n}. {step.t.toUpperCase()}</span>
              <step.icon className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold mb-3">{step.t}</h3>
              <p className="text-gray-400 text-sm">{step.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-24 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 border border-white/5 p-12 rounded-[3rem] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Vigilancia y <br/>Bienestar Médico</h2>
            <p className="text-gray-400">Cuidamos la salud integral de cada socio y trabajador de la cooperativa.</p>
          </div>
          <div className="space-y-8">
            {[
              { icon: FileText, t: "Reconocimientos Médicos", d: "Controles periódicos específicos por puesto." },
              { icon: BriefcaseMedical, t: "Planes de Emergencia", d: "Equipamiento y protocolos actualizados." },
              { icon: Gavel, t: "Asesoramiento Legal", d: "Cumplimiento total con las obligaciones de PRL." }
            ].map(item => (
              <div key={item.t} className="flex gap-6">
                <item.icon className="w-8 h-8 text-emerald-500 shrink-0" />
                <div><h4 className="font-bold mb-1">{item.t}</h4><p className="text-sm text-gray-500">{item.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  </>
);

const MedidasSection = () => (
  <>
    <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')` }}>
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Medidas de <br/><span className="text-emerald-500">Prevención</span></h1>
    </section>
    <div className="max-w-6xl mx-auto px-4 -mt-16 mb-24">
      <Reveal>
        <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-2xl border border-emerald-500 p-12 rounded-[3rem] text-center mb-24">
          <h2 className="text-3xl font-bold mb-4">Inversión en Bienestar</h2>
          <p className="text-gray-300 text-lg">La seguridad no es un coste, es nuestra estrategia de productividad. Integramos la prevención en cada soldadura y cada servidor.</p>
        </div>
      </Reveal>
      <h2 className="text-3xl font-bold text-center mb-12">Protección Colectiva (Prioridad 1)</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {[
          { t: "Ambiente Técnico", icon: Wind, items: ["Ventilación forzada", "Extracción de polvo", "Climatización eco"], badge: "INFRAESTRUCTURA" },
          { t: "Seguridad Instalada", icon: Zap, items: ["Alfombrillas aislantes", "Pantallas protectoras", "Señalización"] },
          { t: "Emergencias", icon: Flame, items: ["Detección 24/7", "Extintores CO2", "Botiquines técnicos"] }
        ].map(card => (
          <Reveal key={card.t}>
            <div className="h-full p-8 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden hover:border-emerald-500/50 transition-colors">
              {card.badge && <span className="absolute top-6 right-6 bg-emerald-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full">{card.badge}</span>}
              <card.icon className="w-10 h-10 text-emerald-500 mb-6" />
              <h3 className="text-xl font-bold mb-4">{card.t}</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {card.items.map(item => <li key={item} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-emerald-500" /> {item}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="bg-white/5 p-12 rounded-[3rem] border-l-8 border-emerald-500 flex flex-col md:flex-row items-center gap-8">
        <Activity size={60} className="text-emerald-500 shrink-0" />
        <div>
          <h3 className="text-2xl font-bold mb-2">Vigilancia Activa de la Salud</h3>
          <p className="text-gray-400">Realizamos reconocimientos médicos específicos y fomentamos la conciliación real. Cuidamos de las personas para que ellas cuiden la tecnología.</p>
        </div>
      </div>
    </div>
  </>
);

const DelegadoSection = () => (
  <>
    <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')` }}>
      <Reveal>
        <span className="px-4 py-1 bg-white/10 text-emerald-500 text-xs font-bold rounded-full mb-4 inline-block">LEY 31/1995 (LPRL)</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">Voz y Participación: <br/><span className="text-emerald-500">Delegado de Prevención</span></h1>
      </Reveal>
    </section>
    <div className="max-w-5xl mx-auto px-4 -mt-16 mb-24">
      <Reveal>
        <div className="bg-slate-900/80 backdrop-blur-2xl border border-white/10 p-12 rounded-[3rem] grid md:grid-cols-[1fr_2fr] gap-12 shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-[2.5rem] flex items-center justify-center text-slate-900 shadow-lg shadow-emerald-500/20">
              <UserCheck size={60} />
            </div>
            <h2 className="text-2xl font-bold mt-8 mb-2">Enlace Vital</h2>
            <p className="text-sm text-gray-500">Garante del bienestar y nexo directo con la dirección.</p>
          </div>
          <div>
            <p className="text-xl border-l-4 border-emerald-500 pl-8 mb-12 text-gray-300 italic">
              "En Nuevo EcoFix, la seguridad es un derecho participativo. Contamos con un Delegado elegido para velar por un entorno seguro."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Megaphone, t: "Promoción", d: "Impulsa la participación activa en normativas." },
                { icon: MessageSquare, t: "Consulta", d: "Asesora en la planificación preventiva." },
                { icon: Eye, t: "Vigilancia", d: "Controla el cumplimiento en taller y oficinas." },
                { icon: HeartPulse, t: "Inspección", d: "Acompaña en evaluaciones técnicas." }
              ].map(f => (
                <div key={f.t} className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <f.icon className="text-emerald-500 mb-4" size={24} />
                  <h4 className="font-bold mb-1">{f.t}</h4>
                  <p className="text-xs text-gray-500">{f.d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-emerald-500/10 rounded-2xl flex gap-4 items-start">
              <Info className="text-emerald-500 shrink-0" size={20} />
              <p className="text-sm text-gray-400">El delegado tiene acceso prioritario a información sobre salud y departamentos de prevención para una coordinación total.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </>
);

// --- Pages ---

const HomePage = () => (
  <PageWrapper>
    <section className="relative h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden rounded-b-[3rem]">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-fixed bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')` 
        }}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-4xl"
      >
        <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
          Nuevo EcoFix
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Servicios informáticos de élite con conciencia ecológica. 
          Transformamos la tecnología, protegemos el futuro.
        </p>
      </motion.div>
    </section>

    <section className="py-24 px-[5%]">
      <div className="text-center mb-16">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Nuestras Líneas de Acción</h2>
          <p className="text-gray-400 text-lg">Soluciones integrales para particulares y empresas en Vigo.</p>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: ShieldCheck, title: "Ciberseguridad", desc: "Auditorías, monitorización de redes y protección de datos avanzada. Blindamos tu entorno digital." },
          { icon: Cpu, title: "Hardware Sostenible", desc: "Reciclaje y reacondicionamiento de equipos. Calidad profesional reduciendo la huella de carbono." },
          { icon: Network, title: "Sistemas en Red", desc: "Mantenimiento de sistemas operativos, bases de datos y soporte técnico de emergencia." }
        ].map((s, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="h-full p-10 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-emerald-500/50 transition-all group">
              <s.icon className="w-12 h-12 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>

    <section className="px-[5%] pb-24">
      <Reveal>
        <div 
          className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1571217665903-db7d4617df93?q=80&w=2000&auto=format&fit=crop')` 
          }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-500 mb-8">Vigo: Nuestro Centro de Innovación</h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            Ubicados en el corazón de Vigo, operamos como una <strong className="text-white">Sociedad Cooperativa de Trabajadores</strong>. 
            Creemos en la igualdad, la reinversión y el impacto social positivo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Gestión Colaborativa", "Talento Local", "Conexión Global"].map((item) => (
              <span key={item} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="font-medium">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  </PageWrapper>
);

const PrevencionPage = () => (
  <PageWrapper>
    <SaludSection />
    <OrganizacionSection />
  </PageWrapper>
);

const MedidasMainPage = () => (
  <PageWrapper>
    <MedidasSection />
    <DelegadoSection />
  </PageWrapper>
);

const RiesgosAnexo = () => {
  const [activeTab, setActiveTab] = React.useState("p1");

  const tabs = [
    { id: "p1", label: "1. Riesgos Comunes" },
    { id: "p2", label: "2. Gerencia / Dirección" },
    { id: "p3", label: "3. Técnico Sistemas" },
    { id: "p4", label: "4. Reciclaje / Almacén" },
    { id: "p5", label: "5. Ciberseguridad" },
    { id: "p6", label: "6. Marketing / Comercial" },
    { id: "p7", label: "7. Administración" },
    { id: "p8", label: "8. Personal Limpieza" },
    { id: "p9", label: "9. Mozo Almacén" },
  ];

  const Badge = ({ type }: { type: string }) => {
    const classes = {
      Trivial: "bg-blue-500 text-white",
      Tolerable: "bg-green-600 text-white",
      Moderado: "bg-yellow-500 text-black",
    };
    return (
      <span className={`px-2 py-1 rounded font-extrabold text-[10px] uppercase ${classes[type as keyof typeof classes] || "bg-slate-500"}`}>
        {type}
      </span>
    );
  };

  const MTitle = ({ children }: { children: React.ReactNode }) => (
    <span className="text-emerald-500 font-bold text-[10px] uppercase block mt-1">{children}:</span>
  );

  const Discipline = ({ children }: { children: React.ReactNode }) => (
    <span className="text-slate-400 text-xs italic block mt-1">{children}</span>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 border-t border-white/5">
      <Reveal>
        <h2 className="text-center text-emerald-500 font-black text-3xl md:text-5xl uppercase mb-4 tracking-tighter">Anexo Técnico: Evaluación de Riesgos</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Información exacta y detallada según el Plan de Prevención de Nueco Ecofix.</p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-4 rounded-xl border text-left text-xs transition-all flex items-center gap-3 ${
              activeTab === tab.id
                ? "bg-emerald-500 text-slate-900 font-bold border-emerald-500 shadow-lg shadow-emerald-500/20"
                : "bg-slate-800/50 text-white border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead>
                <tr className="bg-black/40 border-b-2 border-white/10">
                  <th className="p-5 text-left text-[10px] uppercase tracking-widest text-emerald-500 font-black">Factor / Disciplina</th>
                  <th className="p-5 text-left text-[10px] uppercase tracking-widest text-emerald-500 font-black">Daños Potenciales</th>
                  <th className="p-5 text-left text-[10px] uppercase tracking-widest text-emerald-500 font-black">Eval.</th>
                  <th className="p-5 text-left text-[10px] uppercase tracking-widest text-emerald-500 font-black">Medidas</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-white/5">
                {activeTab === "p1" && (
                  <>
                    <tr>
                      <td className="p-5 align-top"><strong>Orden y Limpieza</strong><Discipline>Seguridad Laboral</Discipline></td>
                      <td className="p-5 align-top text-gray-300">Golpes, caídas al mismo nivel, riesgo de incendio.</td>
                      <td className="p-5 align-top"><Badge type="Trivial" /></td>
                      <td className="p-5 align-top text-gray-400">
                        <MTitle>Prevención</MTitle> Canalización de cableado, señalización de zonas peligrosas, orden de materiales inflamables.
                        <MTitle>Protección</MTitle> Extintores accesibles, anclaje de estanterías pesadas, calzado antideslizante.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-5 align-top"><strong>Iluminación</strong><Discipline>Higiene Industrial</Discipline></td>
                      <td className="p-5 align-top text-gray-300">Fatiga visual, mareos, cefaleas, errores.</td>
                      <td className="p-5 align-top"><Badge type="Trivial" /></td>
                      <td className="p-5 align-top text-gray-400">
                        <MTitle>Prevención</MTitle> Aprovechar luz natural, niveles según RD 486/1997, limpieza de luminarias.
                        <MTitle>Protección</MTitle> Iluminación de emergencia, lámparas de mesa regulables.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-5 align-top"><strong>Condiciones Ambientales</strong><Discipline>Higiene Industrial</Discipline></td>
                      <td className="p-5 align-top text-gray-300">Estrés térmico, resfriados, fatiga, síndrome del edificio enfermo.</td>
                      <td className="p-5 align-top"><Badge type="Trivial" /></td>
                      <td className="p-5 align-top text-gray-400">
                        <MTitle>Prevención</MTitle> Aislamiento térmico, mantenimiento de climatización (20-24°C).
                        <MTitle>Protección</MTitle> Sistemas de ventilación y extracción general.
                      </td>
                    </tr>
                  </>
                )}
                {activeTab === "p2" && (
                  <>
                    <tr>
                      <td className="p-5 align-top"><strong>Estrés / Responsabilidad</strong><Discipline>Psicosociología</Discipline></td>
                      <td className="p-5 align-top text-gray-300">Ansiedad, trastornos del sueño, hipertensión.</td>
                      <td className="p-5 align-top"><Badge type="Tolerable" /></td>
                      <td className="p-5 align-top text-gray-400">
                        <MTitle>Prevención</MTitle> Delegación de tareas, gestión del tiempo, formación en liderazgo emocional.
                        <MTitle>Protección</MTitle> Programas de salud mental corporativos, fomento de la desconexión.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-5 align-top"><strong>Pantallas Visualización</strong><Discipline>Ergonomía</Discipline></td>
                      <td className="p-5 align-top text-gray-300">Fatiga visual, problemas cervicales.</td>
                      <td className="p-5 align-top"><Badge type="Trivial" /></td>
                      <td className="p-5 align-top text-gray-400">
                        <MTitle>Prevención</MTitle> Pantallas regulables, pausas cada 2 horas.
                        <MTitle>Protección</MTitle> Sillas ergonómicas de alta gama con soporte lumbar activo.
                      </td>
                    </tr>
                  </>
                )}
                {activeTab === "p3" && (
                  <>
                    <tr><td className="p-5 align-top"><strong>Riesgo Eléctrico (Baja Tensión)</strong><Discipline>Seguridad</Discipline></td><td className="p-5 align-top text-gray-300">Electrocución, quemaduras profundas, incendios eléctricos.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Revisión de cuadros, evitar sobrecarga de regletas, señalización.<MTitle>Protección</MTitle> Diferenciales, herramientas aisladas, alfombrillas dieléctricas.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Ruido (Herramientas)</strong><Discipline>Higiene</Discipline></td><td className="p-5 align-top text-gray-300">Pérdida auditiva, estrés, falta de concentración.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Mantenimiento preventivo, silenciadores mecánicos.<MTitle>Protección</MTitle> Protectores auditivos (tapones o cascos) si supera 80dB.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Radiaciones no Ionizantes</strong><Discipline>Higiene</Discipline></td><td className="p-5 align-top text-gray-300">Fatiga visual, irritación cutánea leve.</td><td className="p-5 align-top"><Badge type="Trivial" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Distancia a equipos emisores, pantallas con filtros.<MTitle>Protección</MTitle> Revisiones oftalmológicas, filtros de luz azul.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Posturas Forzadas</strong><Discipline>Ergonomía</Discipline></td><td className="p-5 align-top text-gray-300">Lumbalgias, tendinitis, síndrome túnel carpiano.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Diseño ergonómico del puesto, herramientas al alcance.<MTitle>Protección</MTitle> Formación en higiene postural, pausas activas.</td></tr>
                  </>
                )}
                {activeTab === "p4" && (
                  <>
                    <tr><td className="p-5 align-top"><strong>Cortes y Atrapamientos</strong><Discipline>Seguridad</Discipline></td><td className="p-5 align-top text-gray-300">Heridas profundas, amputaciones, hemorragias.</td><td className="p-5 align-top"><Badge type="Moderado" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Resguardos en maquinaria, herramientas manuales seguras.<MTitle>Protección</MTitle> Guantes anti-corte, gafas de seguridad, ropa resistente.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Sustancias Peligrosas (RAEE)</strong><Discipline>Higiene</Discipline></td><td className="p-5 align-top text-gray-300">Intoxicaciones, quemaduras químicas, afecciones respiratorias.</td><td className="p-5 align-top"><Badge type="Moderado" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Ventilación localizada, etiquetado de contenedores, almacenamiento estanco.<MTitle>Protección</MTitle> Mascarillas FFP3, guantes químicos, kits de derrames y lavaojos.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Manipulación de Cargas</strong><Discipline>Ergonomía</Discipline></td><td className="p-5 align-top text-gray-300">Hernias discales, lumbalgias agudas.</td><td className="p-5 align-top"><Badge type="Moderado" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Ayudas mecánicas (carretillas/transpaletas), formación en levantamiento.<MTitle>Protección</MTitle> Calzado de seguridad con puntera, fajas lumbares.</td></tr>
                  </>
                )}
                {activeTab === "p5" && (
                  <>
                    <tr><td className="p-5 align-top"><strong>Pantallas Visualización (PVD)</strong><Discipline>Ergonomía</Discipline></td><td className="p-5 align-top text-gray-300">Fatiga visual, cefaleas, contracturas cervicales.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Pantallas regulables, filtros antirreflejos, descansos.<MTitle>Protección</MTitle> Sillas ergonómicas, reposapiés, ejercicios visuales.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Estrés / Carga Mental</strong><Discipline>Psicosociología</Discipline></td><td className="p-5 align-top text-gray-300">Ansiedad, agotamiento (Burnout), insomnio.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Planificación de tareas, autonomía, feedback.<MTitle>Protección</MTitle> Desconexión digital, programas de apoyo emocional.</td></tr>
                  </>
                )}
                {activeTab === "p6" && (
                  <>
                    <tr><td className="p-5 align-top"><strong>Caídas Mismo Nivel</strong><Discipline>Seguridad</Discipline></td><td className="p-5 align-top text-gray-300">Esguinces, contusiones, fracturas.</td><td className="p-5 align-top"><Badge type="Trivial" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Suelos secos, pasillos despejados de cajas/cables.<MTitle>Protección</MTitle> Calzado cerrado y sujeto, orden en el puesto.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Fatiga Postural</strong><Discipline>Ergonomía</Discipline></td><td className="p-5 align-top text-gray-300">Dolores de espalda, problemas circulatorios.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Sillas con 5 apoyos y ajuste lumbar.<MTitle>Protección</MTitle> Uso de reposapiés y cambios de postura frecuentes.</td></tr>
                  </>
                )}
                {activeTab === "p7" && (
                  <>
                    <tr><td className="p-5 align-top"><strong>Riesgo Eléctrico Ofimática</strong><Discipline>Seguridad</Discipline></td><td className="p-5 align-top text-gray-300">Contactos indirectos, calambres.</td><td className="p-5 align-top"><Badge type="Trivial" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> No conectar equipos en cascada, revisión de instalaciones.<MTitle>Protección</MTitle> Equipos con doble aislamiento y toma de tierra.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Rutina Laboral (Monotonía)</strong><Discipline>Psicosociología</Discipline></td><td className="p-5 align-top text-gray-300">Desmotivación, falta de atención, errores.</td><td className="p-5 align-top"><Badge type="Trivial" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Rotación de tareas y ampliación de funciones.<MTitle>Protección</MTitle> Formación en nuevas herramientas de gestión.</td></tr>
                  </>
                )}
                {activeTab === "p8" && (
                  <>
                    <tr><td className="p-5 align-top"><strong>Caídas por Suelo Mojado</strong><Discipline>Seguridad</Discipline></td><td className="p-5 align-top text-gray-300">Fracturas, resbalones, golpes.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Señalización (caballete), limpieza fuera de horas punta.<MTitle>Protección</MTitle> Calzado con suela antideslizante certificada.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Productos Químicos</strong><Discipline>Higiene</Discipline></td><td className="p-5 align-top text-gray-300">Dermatitis, irritación ocular o respiratoria.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Ventilación, no mezclar productos, envases originales.<MTitle>Protección</MTitle> Guantes de nitrilo, mascarilla, gafas de protección.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Manipulación Manual Cargas</strong><Discipline>Ergonomía</Discipline></td><td className="p-5 align-top text-gray-300">Lumbalgias, fatiga muscular.</td><td className="p-5 align-top"><Badge type="Trivial" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Postura correcta de carga, no exceder pesos.<MTitle>Protección</MTitle> Formación en técnicas manuales de manipulación.</td></tr>
                  </>
                )}
                {activeTab === "p9" && (
                  <>
                    <tr><td className="p-5 align-top"><strong>Caída de Objetos</strong><Discipline>Seguridad</Discipline></td><td className="p-5 align-top text-gray-300">Aplastamientos, fracturas en pies, golpes en cabeza.</td><td className="p-5 align-top"><Badge type="Moderado" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Carga estable, estanterías niveladas, no sobrepasar pesos.<MTitle>Protección</MTitle> Calzado de seguridad con puntera, casco si hay riesgo.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Sobreesfuerzos</strong><Discipline>Ergonomía</Discipline></td><td className="p-5 align-top text-gray-300">Lesiones músculo-esqueléticas, hernias discales.</td><td className="p-5 align-top"><Badge type="Moderado" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Uso de medios mecánicos (carretillas), manipulación en equipo.<MTitle>Protección</MTitle> Instrucción en técnicas de carga, uso de faja lumbar.</td></tr>
                    <tr><td className="p-5 align-top"><strong>Atropellos / Golpes</strong><Discipline>Seguridad</Discipline></td><td className="p-5 align-top text-gray-300">Politraumatismos, fracturas graves.</td><td className="p-5 align-top"><Badge type="Tolerable" /></td><td className="p-5 align-top text-gray-400"><MTitle>Prevención</MTitle> Espejos en cruces, delimitación de zonas peatonales.<MTitle>Protección</MTitle> Chaleco reflectante de alta visibilidad.</td></tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

const RiesgosPage = () => (
  <PageWrapper>
    <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')` }}>
      <Reveal>
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6">Anticipación<br/><span className="text-emerald-500">Inteligente</span></h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-300">Identificamos factores de riesgo mediante una evaluación continua de nuestro entorno.</p>
      </Reveal>
    </section>
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {[
          { icon: Microscope, t: "Evaluación Inicial", d: "Análisis exhaustivo de cada puesto desde el primer día.", c: "text-emerald-500" },
          { icon: RefreshCw, t: "Proceso Continuo", d: "Actualizamos protocolos con cada cambio en equipos.", c: "text-blue-500" }
        ].map(card => (
          <Reveal key={card.t}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem]">
              <card.icon className={`w-12 h-12 ${card.c} mb-6`} />
              <h2 className="text-3xl font-bold mb-4">{card.t}</h2>
              <p className="text-gray-400">{card.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-12 md:p-16 rounded-[3rem] text-slate-900 flex flex-col md:flex-row items-center gap-12">
          <Users size={80} className="shrink-0" />
          <div>
            <h2 className="text-4xl font-black mb-4">Cultura Participativa</h2>
            <p className="text-lg font-medium opacity-90">Nadie conoce el puesto mejor que el trabajador. Fomentamos el reporte directo y encuestas internas para detectar riesgos en tiempo real.</p>
          </div>
        </div>
      </Reveal>
      <section className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Matriz de Gestión</h2>
          <p className="text-gray-500">Priorizamos nuestras acciones basándonos en Probabilidad y Gravedad.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { t: "Trivial", icon: Info, c: "border-blue-500 bg-blue-500/10", d: "Sin acciones específicas." },
            { t: "Tolerable", icon: CheckCheck, c: "border-emerald-500 bg-emerald-500/10", d: "Vigilancia periódica." },
            { t: "Moderado", icon: AlertTriangle, c: "border-yellow-500 bg-yellow-500/10", d: "Acción necesaria pronto." },
            { t: "Importante", icon: Hand, c: "border-orange-500 bg-orange-500/10", d: "Paralización inmediata." },
            { t: "Intolerable", icon: Skull, c: "border-red-500 bg-red-500/10", d: "Prohibición absoluta." }
          ].map((risk, i) => (
            <Reveal key={risk.t} delay={i * 0.1}>
              <div className={`h-full p-6 rounded-3xl border ${risk.c} flex flex-col items-center text-center gap-4 hover:scale-105 transition-transform cursor-default`}>
                <risk.icon size={32} />
                <span className="font-black uppercase text-xs tracking-widest">{risk.t}</span>
                <p className="text-[10px] opacity-70 leading-tight">{risk.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <RiesgosAnexo />
    </div>
  </PageWrapper>
);

const CompromisoPage = () => (
  <PageWrapper>
    <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=2069&auto=format&fit=crop')` }}>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-b from-white to-emerald-500 bg-clip-text text-transparent">
        Compromiso <span className="text-emerald-500">Mutuo</span>
      </h1>
    </section>
    <div className="max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-4"><Shield className="text-emerald-500" /> Derechos</h2>
        {[
          { icon: Info, t: "Información Transparente", d: "Conocer los riesgos específicos de herramientas y procesos." },
          { icon: GraduationCap, t: "Formación Continua", d: "Capacitación gratuita en uso de equipos y primeros auxilios." },
          { icon: Hand, t: "Protección y Paro", d: "Derecho a detener actividades de riesgo inminente." },
          { icon: MessageSquare, t: "Participación Activa", d: "Voz directa a través del Delegado de Prevención." }
        ].map((item, i) => (
          <Reveal key={item.t} delay={i * 0.1}>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:scale-[1.02] transition-transform hover:border-emerald-500/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-500 rounded-xl flex items-center justify-center"><item.icon size={20} /></div>
                <h3 className="text-xl font-bold">{item.t}</h3>
              </div>
              <p className="text-gray-400 pl-14">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="space-y-8">
        <h2 className="text-3xl font-bold flex items-center gap-4"><UserCheck className="text-blue-500" /> Deberes</h2>
        {[
          { icon: HardHat, t: "Cumplimiento Normativo", d: "Uso obligatorio de EPPs y seguimiento de ergonomía." },
          { icon: HelpingHand, t: "Colaboración Proactiva", d: "Cooperar en medidas y sugerir mejoras para el equipo." },
          { icon: AlertCircle, t: "Reporte Inmediato", d: "Informar sobre cualquier riesgo detectado en tiempo real." }
        ].map((item, i) => (
          <Reveal key={item.t} delay={i * 0.1}>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:scale-[1.02] transition-transform hover:border-blue-500/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500/20 text-blue-500 rounded-xl flex items-center justify-center"><item.icon size={20} /></div>
                <h3 className="text-xl font-bold">{item.t}</h3>
              </div>
              <p className="text-gray-400 pl-14">{item.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
    <div className="max-w-6xl mx-auto px-4 pb-24">
      <Reveal>
        <div className="bg-slate-900 border border-white/10 p-16 rounded-[3rem] text-center">
          <Users size={60} className="text-emerald-500 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Un Entorno Seguro es Tarea de Todos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">El cumplimiento de este marco legal transforma nuestra cooperativa en un lugar de confianza.</p>
        </div>
      </Reveal>
    </div>
  </PageWrapper>
);

const FormacionPage = () => (
  <PageWrapper>
    <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
      style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop')` }}>
      <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent">Cultura del Aprendizaje</h1>
    </section>
    <div className="max-w-5xl mx-auto px-4 -mt-12 mb-24">
      <Reveal>
        <div className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-12 rounded-[2.5rem] shadow-2xl mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-4"><GraduationCap className="text-emerald-500" /> Formación Acreditada</h2>
          <p className="text-gray-400 text-lg leading-relaxed">Garantizamos que cada miembro reciba la formación necesaria antes de iniciar su actividad. Contamos con técnicos expertos para impartir conocimientos prácticos.</p>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { b: "Inicial", icon: DoorOpen, t: "Onboarding Seguro", d: "Información sobre riesgos antes de la incorporación." },
          { b: "Continuo", icon: RefreshCw, t: "Actualización Periódica", d: "Charlas en horario laboral para refrescar normativas." },
          { b: "Práctico", icon: UserCheck, t: "Entrenamiento Real", d: "Simulacros de emergencia y talleres de ergonomía." }
        ].map(step => (
          <Reveal key={step.t}>
            <div className="h-full p-8 bg-white/5 border border-white/10 rounded-3xl relative hover:border-emerald-500/50 transition-colors">
              <span className="absolute top-6 right-6 text-[10px] font-black text-emerald-500 border border-emerald-500 px-3 py-1 rounded-full uppercase tracking-widest">{step.b}</span>
              <div className="w-12 h-12 bg-emerald-500 text-slate-900 rounded-2xl flex items-center justify-center mb-6"><step.icon size={24} /></div>
              <h3 className="text-xl font-bold mb-3">{step.t}</h3>
              <p className="text-sm text-gray-500">{step.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="bg-blue-500/5 border border-dashed border-blue-500/50 p-12 rounded-[2.5rem]">
          <h3 className="text-2xl font-bold text-blue-400 mb-8">Ejes del Plan Formativo:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { icon: Eraser, t: "Orden y Limpieza" },
              { icon: LogOut, t: "Señalización" },
              { icon: ShieldCheck, t: "Uso de EPIs" },
              { icon: BriefcaseMedical, t: "Primeros Auxilios" },
              { icon: Wrench, t: "Herramientas" },
              { icon: Flame, t: "Incendios" }
            ].map(topic => (
              <div key={topic.t} className="flex items-center gap-3 text-gray-300">
                <topic.icon size={18} className="text-blue-500" />
                <span className="text-sm font-medium">{topic.t}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </PageWrapper>
);

const EmergenciaPage = () => (
  <PageWrapper>
    <header className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center border-b-4 border-red-500"
      style={{ backgroundImage: `linear-gradient(rgba(231, 76, 60, 0.2), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop')` }}>
      <h1 className="text-5xl md:text-8xl font-black text-white drop-shadow-2xl">PLAN DE <br/><span className="text-red-500">EMERGENCIA</span></h1>
    </header>
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Quién tiene que hacer qué?</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">Nuestro plan establece procedimientos claros para prevenir incendios eléctricos, explosiones de baterías o derrames químicos.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { b: "COORDINACIÓN", icon: UserCheck, t: "Jefe de Emergencias", items: ["Activa protocolos", "Contacta al 112", "Liderazgo global"] },
          { b: "TÉCNICO", icon: Wrench, t: "Jefe de Intervención", items: ["Analiza riesgos", "Cortes de energía", "Aislamiento de área"] },
          { b: "ACCIÓN", icon: Flame, t: "Primera Intervención", items: ["Uso de extintores", "Control de vertidos", "Señalización zona"] },
          { b: "ORDEN", icon: Footprints, t: "Equipo Evacuación", items: ["Guía a clientes", "Verifica vaciado", "Punto de encuentro"] }
        ].map(role => (
          <Reveal key={role.t}>
            <div className="h-full p-8 bg-white/5 border border-white/10 rounded-3xl relative hover:border-red-500/50 transition-colors">
              <span className="absolute top-6 right-6 bg-red-500 text-white text-[8px] font-black px-2 py-1 rounded-full">{role.b}</span>
              <role.icon className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-lg font-black uppercase tracking-widest mb-4">{role.t}</h3>
              <ul className="space-y-2 text-xs text-gray-400 list-disc pl-4">
                {role.items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="bg-white/5 p-12 rounded-[3rem] mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Protocolo de Respuesta</h2>
        <div className="space-y-8">
          {[
            { n: 1, t: "Detección y Alerta", d: "Ante humo o fallo grave, avisar de inmediato. La rapidez es vital en fallos de litio." },
            { n: 2, t: "Intervención o Evacuación", d: "Si es controlable, EPI actúa. Si hay riesgo real, se activa la señal acústica." },
            { n: 3, t: "Abandono del Edificio", d: "Seguir rutas marcadas, no correr, no recoger objetos y dirigirse al punto de encuentro." }
          ].map(phase => (
            <div key={phase.n} className="flex gap-8 items-start">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center font-black shrink-0">{phase.n}</div>
              <div><h4 className="text-xl font-bold mb-2">{phase.t}</h4><p className="text-gray-400">{phase.d}</p></div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: Activity, t: "SALIDA EMERGENCIA", d: "Rutas seguras.", c: "bg-emerald-600" },
          { icon: Flame, t: "EQUIPO INCENDIOS", d: "Extintores CO2.", c: "bg-red-700" },
          { icon: BriefcaseMedical, t: "BOTIQUÍN", d: "Atención primaria.", c: "bg-blue-600" },
          { icon: Ban, t: "PROHIBICIÓN", d: "No entrar.", c: "border-2 border-red-500 text-red-500" }
        ].map(sign => (
          <div key={sign.t} className={`p-8 rounded-2xl text-center flex flex-col items-center gap-4 ${sign.c}`}>
            <sign.icon size={32} />
            <div className="text-[10px] font-black leading-tight">{sign.t}<br/><span className="font-normal opacity-80">{sign.d}</span></div>
          </div>
        ))}
      </div>
      <div className="mt-24 p-12 border-2 border-dashed border-red-500 rounded-[3rem] text-center">
        <Zap className="text-red-500 mx-auto mb-6" size={40} />
        <h3 className="text-2xl font-bold text-red-500 mb-4">IMPORTANTE: Incendios Eléctricos</h3>
        <p className="text-gray-400">Está estrictamente prohibido apagar fuegos eléctricos con agua. El uso de CO2 es crítico en nuestras áreas de servidores.</p>
      </div>
    </div>
  </PageWrapper>
);

const ContratacionesPage = () => {
  const [activeContract, setActiveContract] = useState("indefinido");
  const [activeNomina, setActiveNomina] = useState("indefinido_limpieza");

  const contracts = [
    { 
      id: "indefinido", 
      label: "Contrato indefinido", 
      title: "Contrato Indefinido",
      desc: "Modelo de contrato indefinido.",
      url: "/contrato-indefinido.pdf"
    },
    { 
      id: "temporal", 
      label: "Contrato temporal", 
      title: "Contrato Temporal",
      desc: "Modelo de contrato temporal.",
      url: "/contrato-temporal-1.pdf"
    },
    { 
      id: "practica", 
      label: "Contrato Prácticas", 
      title: "Contrato en Prácticas",
      desc: "Modelo de contrato en prácticas profesionales.",
      url: "/contrato-en-prácticas.pdf"
    },
    { 
      id: "alternancia", 
      label: "Contrato Alternancia", 
      title: "Contrato en Alternancia",
      desc: "Modelo de contrato en alternancia.",
      url: "/contrato-en-alternancia.pdf"
    },
    { 
      id: "eventual", 
      label: "Contrato eventual por circunstancias previsibles", 
      title: "Contrato Eventual",
      desc: "Modelo de contrato eventual.",
      url: "/contrato_eventual.pdf"
    }
  ];

  const nominas = [
    { 
      id: "indefinido_limpieza", 
      label: "Nómina contrado indefinido - PERSONAL DE LIMPIEZA", 
      title: "Nómina Indefinido - Limpieza",
      desc: "Modelo de nómina para personal de limpieza.",
      url: "/nomina-contrato-indefinido.pdf"
    },
    { 
      id: "temporal_soporte", 
      label: "Nómina Contrato Temporal - TÉCNICO DE SOPORTE ", 
      title: "Nómina Temporal - Soporte",
      desc: "Modelo de nómina para técnico de soporte.",
      url: "/nomina-contrato-temporal.pdf"
    },
    { 
      id: "practicas_marketing", 
      label: "Nómina Contrato Prácticas -  MARKETING Y COMERCIAL ", 
      title: "Nómina Prácticas - Marketing",
      desc: "Modelo de nómina para marketing y comercial.",
      url: "/nomina-contrato-practica.pdf"
    },
    { 
      id: "alternancia_almacen", 
      label: "Nómina Contrato Alternancia - MOZO DE ALMACÉN ", 
      title: "Nómina Alternancia - Almacén",
      desc: "Modelo de nómina para mozo de almacén.",
      url: "/nomina-contrato-en-alternancia.pdf"
    },
    { 
      id: "eventual_instalador", 
      label: "Nómina Contrato Eventual -  TÉCNICO INSTALADOR /REPARADOR", 
      title: "Nómina Eventual - Instalador",
      desc: "Modelo de nómina para técnico instalador.",
      url: "/nomina-contrato-eventual-por-circunstancias-previsibles.pdf"
    }
  ];

  return (
    <PageWrapper>
      <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')` }}>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent">
          Oportunidades de Carrera
        </h1>
      </section>
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            {
              title: "Personal de Limpieza",
              badges: [
                { label: "Indefinido Parcial", color: "text-emerald-500 bg-emerald-500/10" },
                { label: "Presencial", color: "text-blue-500 bg-blue-500/10" },
                { label: "Colectivo >52", color: "text-yellow-500 bg-yellow-500/10" }
              ],
              info: [
                { icon: Clock, text: "15h/semana (Tardes y Sábados)" },
                { icon: ClipboardCheck, text: "Limpieza detallada de oficinas y taller." },
                { icon: BriefcaseMedical, text: "Se valorará experiencia previa." }
              ],
              salary: { title: "Salario Anual", amount: "7.217,60 €", sub: "(515,54€/mes x 14)" }
            },
            {
              title: "Mozo de Almacén",
              badges: [
                { label: "Formativo Alternancia", color: "text-emerald-500 bg-emerald-500/10" },
                { label: "Presencial", color: "text-blue-500 bg-blue-500/10" },
                { label: "Inclusión Social", color: "text-yellow-500 bg-yellow-500/10" }
              ],
              info: [
                { icon: GraduationCap, text: "Incluye formación: Org. Almacenes" },
                { icon: Clock, text: "Año 1 (24h) | Año 2 (30h)" },
                { icon: Search, text: "Recepción de mercancía y pedidos." }
              ],
              salary: { title: "Salario Evolutivo", amount: "Hasta 14.087,9 €", sub: "(Año 2)", accent: "border-blue-500" }
            },
            {
              title: "Marketing y Comercial",
              badges: [
                { label: "Práctica Profesional", color: "text-emerald-500 bg-emerald-500/10" },
                { label: "Presencial", color: "text-blue-500 bg-blue-500/10" }
              ],
              info: [
                { icon: UserCheck, text: "Requisito: FP Comercio (últimos 3 años)" },
                { icon: ClipboardCheck, text: "37,5h (Lunes a Viernes)" },
                { icon: Activity, text: "Gestión de contratos, facturación y clientes." }
              ],
              salary: { title: "Salario Evolutivo", amount: "Hasta 14.225,6 €", sub: "(Año 2)" }
            },
            {
              title: "Técnico de Soporte (Ciberseguridad)",
              badges: [
                { label: "Sustitución", color: "text-emerald-500 bg-emerald-500/10" },
                { label: "100% Teletrabajo", color: "text-purple-500 bg-purple-500/10" },
                { label: "Discapacidad", color: "text-yellow-500 bg-yellow-500/10" }
              ],
              info: [
                { icon: GraduationCap, text: "FP ASIR o Ingeniería Informática" },
                { icon: Search, text: "Experiencia: 3 años mínimos" },
                { icon: ShieldCheck, text: "Firewalls, monitorización e incidentes." }
              ],
              salary: { title: "Salario", amount: "Según Convenio" }
            },
            {
              title: "Técnico Instalador / Reparador",
              badges: [
                { label: "Eventual Verano", color: "text-emerald-500 bg-emerald-500/10" },
                { label: "Presencial", color: "text-blue-500 bg-blue-500/10" }
              ],
              info: [
                { icon: UserCheck, text: "Carnet B + FP ASIR/Ingeniería" },
                { icon: Clock, text: "Período: Julio y Agosto (Campaña Verano)" },
                { icon: Wrench, text: "Mantenimiento preventivo y correctivo." }
              ],
              salary: { title: "Salario", amount: "Según Convenio" }
            }
          ].map((job, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-emerald-500/50 transition-all flex flex-col h-full group">
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.badges.map((badge, bi) => (
                    <span key={bi} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${badge.color}`}>
                      {badge.label}
                    </span>
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-6 group-hover:text-emerald-500 transition-colors">{job.title}</h2>
                <div className="space-y-4 mb-8 flex-grow">
                  {job.info.map((item, ii) => (
                    <div key={ii} className="flex items-center gap-3 text-sm text-gray-400">
                      <item.icon size={16} className="text-emerald-500 shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className={`p-6 bg-white/5 rounded-2xl border-l-4 ${job.salary.accent || 'border-emerald-500'}`}>
                  <span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">{job.salary.title}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black">{job.salary.amount}</span>
                    {job.salary.sub && <span className="text-xs text-gray-500">{job.salary.sub}</span>}
                  </div>
                </div>
                <button className="mt-8 w-full py-3 bg-emerald-500 text-slate-900 font-bold rounded-xl hover:brightness-110 transition-all">
                  Postularse
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Contract Models Section */}
        <Reveal>
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">Modelos de Contrato</h2>
              <p className="text-gray-400">Seleccione un modelo para visualizar el documento oficial.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {contracts.map((contract) => (
                <button
                  key={contract.id}
                  onClick={() => setActiveContract(contract.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                    activeContract === contract.id
                      ? "bg-emerald-500 text-slate-900 border-emerald-500"
                      : "text-gray-400 border-white/10 hover:border-emerald-500/50 hover:text-white"
                  }`}
                >
                  {contract.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeContract}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <div className="w-full max-w-4xl aspect-[1/1.4] bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden relative group shadow-2xl">
                  <iframe 
                    src={`${contracts.find(c => c.id === activeContract)?.url}#toolbar=0&view=FitH`}
                    className="w-full h-full border-none"
                    title="Contract Preview"
                  />
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                    <a 
                      href={contracts.find(c => c.id === activeContract)?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-xl hover:brightness-110 transition-all shadow-lg"
                    >
                      <FileText size={18} />
                      Ver Pantalla Completa
                    </a>
                  </div>
                </div>
                <p className="mt-6 text-gray-500 text-xs italic text-center max-w-md">
                  Vista previa del modelo de contrato. Si el documento no carga, asegúrese de que el archivo PDF esté disponible en la carpeta pública.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        {/* Payroll Section (Nóminas) */}
        <Reveal delay={0.2}>
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-8 md:p-12 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4">Nóminas</h2>
              <p className="text-gray-400">Seleccione un modelo de nómina para visualizar el documento.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {nominas.map((nomina) => (
                <button
                  key={nomina.id}
                  onClick={() => setActiveNomina(nomina.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                    activeNomina === nomina.id
                      ? "bg-blue-500 text-slate-900 border-blue-500"
                      : "text-gray-400 border-white/10 hover:border-blue-500/50 hover:text-white"
                  }`}
                >
                  {nomina.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNomina}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex flex-col items-center"
              >
                <div className="w-full max-w-4xl aspect-[1/1.4] bg-slate-900 rounded-[2rem] border border-white/10 overflow-hidden relative group shadow-2xl">
                  <iframe 
                    src={`${nominas.find(n => n.id === activeNomina)?.url}#toolbar=0&view=FitH`}
                    className="w-full h-full border-none"
                    title="Payroll Preview"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full flex items-center gap-2">
                      <FileText size={20} className="text-blue-500" />
                      <span className="font-bold">Vista Previa de Nómina</span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-2xl font-bold mb-2">{nominas.find(n => n.id === activeNomina)?.title}</h3>
                  <p className="text-gray-400">{nominas.find(n => n.id === activeNomina)?.desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </PageWrapper>
  );
};

const CalendarioPage = () => {
  const months = [
    { name: "ENERO", days: 31, startDay: 3 },
    { name: "FEBRERO", days: 28, startDay: 6 },
    { name: "MARZO", days: 31, startDay: 6 },
    { name: "ABRIL", days: 30, startDay: 2 },
    { name: "MAYO", days: 31, startDay: 4 },
    { name: "JUNIO", days: 30, startDay: 0 },
    { name: "JULIO", days: 31, startDay: 2 },
    { name: "AGOSTO", days: 31, startDay: 5 },
    { name: "SEPTIEMBRE", days: 30, startDay: 1 },
    { name: "OCTUBRE", days: 31, startDay: 3 },
    { name: "NOVIEMBRE", days: 30, startDay: 6 },
    { name: "DICIEMBRE", days: 31, startDay: 1 },
  ];

  const holidays = {
    national: [
      { m: 0, d: 1 }, { m: 0, d: 6 },
      { m: 3, d: 3 },
      { m: 4, d: 1 },
      { m: 7, d: 15 }, { m: 7, d: 16 },
      { m: 9, d: 12 },
      { m: 10, d: 1 },
      { m: 11, d: 6 }, { m: 11, d: 8 }, { m: 11, d: 25 }
    ],
    autonomic: [
      { m: 2, d: 19 },
      { m: 3, d: 2 },
      { m: 4, d: 17 },
      { m: 5, d: 24 },
      { m: 6, d: 25 }
    ],
    local: [
      { m: 2, d: 28 }
    ]
  };

  const isIntensive = (m: number) => m === 6 || m === 7;

  const vacations = [
    { m: 5, range: [1, 10] },
    { m: 6, range: [7, 20] },
    { m: 7, range: [18, 31] },
    { m: 8, range: [1, 1] },
    { m: 9, range: [13, 22] },
    { m: 10, range: [1, 14] },
    { m: 11, range: [1, 12] },
    { m: 11, range: [21, 31] }
  ];

  const isVacation = (m: number, d: number) => {
    return vacations.some(v => v.m === m && d >= v.range[0] && d <= v.range[1]);
  };

  const getDayType = (m: number, d: number) => {
    if (holidays.national.some(h => h.m === m && h.d === d)) return "national";
    if (holidays.autonomic.some(h => h.m === m && h.d === d)) return "autonomic";
    if (holidays.local.some(h => h.m === m && h.d === d)) return "local";
    return null;
  };

  return (
    <PageWrapper>
      <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop')` }}>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-[#22d3ee] via-[#bef264] to-[#facc15] bg-clip-text text-transparent italic uppercase">
          Calendario 2026
        </h1>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-6xl font-black mb-4 tracking-tighter uppercase italic">Calendario 2026</h1>
              <div className="h-2 w-24 bg-emerald-500 mx-auto rounded-full" />
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {months.map((month, mIdx) => (
              <Reveal key={month.name} delay={mIdx * 0.05}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <h3 className="text-center font-black text-[#22d3ee] mb-4 tracking-widest text-sm">{month.name}</h3>
                  <div className="grid grid-cols-7 gap-1 text-[10px] font-bold text-gray-500 mb-2 text-center">
                    <span>LU</span><span>MA</span><span>MI</span><span>JU</span><span>VI</span><span>SA</span><span>DO</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: month.startDay }).map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {Array.from({ length: month.days }).map((_, i) => {
                      const day = i + 1;
                      const type = getDayType(mIdx, day);
                      const intensive = isIntensive(mIdx);
                      const vacation = isVacation(mIdx, day);
                      
                      return (
                        <div 
                          key={day}
                          className={`
                            relative h-6 w-6 flex items-center justify-center rounded-md text-[10px] font-bold transition-all
                            ${intensive ? "bg-[#bef264] text-slate-900" : ""}
                            ${type === "national" ? "bg-[#facc15] text-slate-900" : ""}
                            ${type === "autonomic" ? "bg-[#22d3ee] text-slate-900" : ""}
                            ${type === "local" ? "bg-[#f97316] text-slate-900" : ""}
                            ${!type && !intensive ? "text-gray-300" : ""}
                          `}
                        >
                          {day}
                          {vacation && (
                            <div className="absolute bottom-0.5 left-1 right-1 h-0.5 bg-[#d946ef] rounded-full" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Reveal delay={0.2}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-black mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Leyenda</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-6 bg-[#f97316] rounded-md" />
                    <span className="text-sm font-bold text-gray-400 uppercase">Festivos Locales</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-6 bg-[#22d3ee] rounded-md" />
                    <span className="text-sm font-bold text-gray-400 uppercase">Festivos Autonómicos</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-6 bg-[#facc15] rounded-md" />
                    <span className="text-sm font-bold text-gray-400 uppercase">Festivos Nacionales</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-6 bg-[#bef264] rounded-md" />
                    <span className="text-sm font-bold text-gray-400 uppercase">Jornada Intensiva</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-6 w-6 border-b-2 border-[#d946ef]" />
                    <span className="text-sm font-bold text-gray-400 uppercase">Vacaciones</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-black mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Periodos de Vacaciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#22d3ee] font-black text-xs uppercase mb-1">Personal de Limpieza</h4>
                      <p className="text-sm text-gray-400 font-bold">1 Nov - 14 Nov / 21 Dic - 31 Dic</p>
                    </div>
                    <div>
                      <h4 className="text-[#22d3ee] font-black text-xs uppercase mb-1">Mozo de Almacén</h4>
                      <p className="text-sm text-gray-400 font-bold">7 Jul - 20 Jul / 1 Dic - 12 Dic</p>
                    </div>
                    <div>
                      <h4 className="text-[#22d3ee] font-black text-xs uppercase mb-1">Marketing Comercial</h4>
                      <p className="text-sm text-gray-400 font-bold">18 Ago - 1 Sep / 13 Oct - 22 Oct</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#22d3ee] font-black text-xs uppercase mb-1">Técnico Soporte</h4>
                      <p className="text-sm text-gray-400 font-bold">1 Jun - 10 Jun</p>
                    </div>
                    <div>
                      <h4 className="text-[#22d3ee] font-black text-xs uppercase mb-1">Técnico Instalador Reparador</h4>
                      <p className="text-sm text-gray-400 font-bold italic">No se le asignarán vacaciones, se le pagarán.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const EquidadRetosAnalysis = () => (
  <div className="max-w-[1100px] mx-auto px-5 py-10">
    <Reveal>
      <header className="text-center mb-10">
        <h2 className="text-[2rem] font-black text-[#a855f7] uppercase tracking-wider">Datos Reales: Solucionando Retos</h2>
      </header>
    </Reveal>

    <div className="grid grid-cols-1 gap-[30px]">
      {/* Reto 1 */}
      <Reveal delay={0.1}>
        <div className="bg-[#1e293b] rounded-[20px] overflow-hidden border border-white/5">
          <div className="px-[30px] py-5 bg-[#a855f7]/10 flex items-center gap-[15px] border-b border-[#a855f7]/20">
            <UserPlus className="text-[#a855f7]" size={24} />
            <h3 className="m-0 text-[1.2rem] uppercase tracking-[1px] font-bold text-white">Incentivar Candidaturas Femeninas</h3>
          </div>
          <div className="p-[30px]">
            <div className="mb-[25px] flex gap-5">
              <div className="min-w-[45px] h-[45px] bg-white/5 rounded-[10px] flex items-center justify-center text-[#a855f7]">
                <Trophy size={20} />
              </div>
              <div>
                <h4 className="m-0 mb-2 text-white font-bold text-base">La "Regla de Rooney" Tecnológica</h4>
                <p className="m-0 text-[0.9rem] opacity-80 leading-relaxed text-gray-400">Establecemos cuotas obligatorias en entrevistas: al menos dos candidatas cualificadas deben ser evaluadas para puestos ejecutivos y técnicos de alto nivel.</p>
              </div>
            </div>
            <div className="mb-[25px] flex gap-5">
              <div className="min-w-[45px] h-[45px] bg-white/5 rounded-[10px] flex items-center justify-center text-[#a855f7]">
                <RefreshCw size={20} />
              </div>
              <div>
                <h4 className="m-0 mb-2 text-white font-bold text-base">Reskilling y Networking</h4>
                <p className="m-0 text-[0.9rem] opacity-80 leading-relaxed text-gray-400">Programas específicos para mujeres que pivotan desde otros sectores hacia Ciberseguridad o Software. Colaboración con redes como <strong className="text-white">Women in Tech</strong> para eliminar el aislamiento.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="min-w-[45px] h-[45px] bg-white/5 rounded-[10px] flex items-center justify-center text-[#a855f7]">
                <Shield size={20} />
              </div>
              <div>
                <h4 className="m-0 mb-2 text-white font-bold text-base">Blindaje tras Maternidad</h4>
                <p className="m-0 text-[0.9rem] opacity-80 leading-relaxed text-gray-400">Garantía por convenio de que los periodos de cuidado no suponen estancamiento ni pérdida de proyectos estratégicos de vanguardia.</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Reto 2 */}
      <Reveal delay={0.2}>
        <div className="bg-[#1e293b] rounded-[20px] overflow-hidden border border-white/5">
          <div className="px-[30px] py-5 bg-[#a855f7]/10 flex items-center gap-[15px] border-b border-[#a855f7]/20">
            <Handshake className="text-[#a855f7]" size={24} />
            <h3 className="m-0 text-[1.2rem] uppercase tracking-[1px] font-bold text-white">Sindicato Propio y Categorías</h3>
          </div>
          <div className="p-[30px]">
            <div className="mb-[25px] flex gap-5">
              <div className="min-w-[45px] h-[45px] bg-white/5 rounded-[10px] flex items-center justify-center text-[#a855f7]">
                <Table size={20} />
              </div>
              <div>
                <h4 className="m-0 mb-2 text-white font-bold text-base">Rediseño de Categorías con Co-creación</h4>
                <p className="m-0 text-[0.9rem] opacity-80 leading-relaxed text-gray-400">Mesa paritaria para una <strong className="text-white">Valoración de Puestos conjunta</strong>. Puntuamos gestión y organización al mismo nivel que programación pura para crear trayectorias de carrera duales.</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="min-w-[45px] h-[45px] bg-white/5 rounded-[10px] flex items-center justify-center text-[#a855f7]">
                <BarChart3 size={20} />
              </div>
              <div>
                <h4 className="m-0 mb-2 text-white font-bold text-base">Promoción por Méritos Objetivos</h4>
                <p className="m-0 text-[0.9rem] opacity-80 leading-relaxed text-gray-400">Sustitución de la subjetividad por requisitos públicos y certificaciones medibles. Eliminamos la discrecionalidad directiva que favorece históricamente al hombre.</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Reto 3 - Brecha */}
      <Reveal delay={0.3}>
        <div className="bg-[#1e293b] rounded-[20px] overflow-hidden border border-white/5 border-l-[5px] border-l-[#ef4444]">
          <div className="px-[30px] py-5 bg-[#ef4444]/10 flex items-center gap-[15px] border-b border-[#ef4444]/20">
            <AlertCircle className="text-[#ef4444]" size={24} />
            <h3 className="m-0 text-[1.2rem] uppercase tracking-[1px] font-bold text-[#ef4444]">Detección Brecha Salarial 8%</h3>
          </div>
          <div className="p-[30px]">
            <div className="bg-[#ef4444] text-white px-5 py-2.5 rounded-[10px] inline-flex items-center gap-2.5 font-extrabold mb-5">
              <PieChart size={20} /> ALERTA DE BRECHA: 8,0%
            </div>
            <p className="mb-[25px] text-[0.95rem] text-gray-300">Detectada principalmente en estructuras opacas y bonus vinculados a la disponibilidad extrema (factor de expulsión femenino).</p>
            
            <div className="mb-[25px] flex gap-5">
              <div className="min-w-[45px] h-[45px] bg-white/5 rounded-[10px] flex items-center justify-center text-[#ef4444]">
                <Microscope size={20} />
              </div>
              <div>
                <h4 className="m-0 mb-2 text-white font-bold text-base">Auditoría Matemática Obligatoria</h4>
                <p className="m-0 text-[0.9rem] opacity-80 leading-relaxed text-gray-400">Aplicación de herramientas de control rigurosas que aseguran que, ante funciones idénticas, la retribución sea 100% matemática y basada en criterios objetivos.</p>
              </div>
            </div>

            <div className="bg-[#22c55e]/5 border border-dashed border-[#22c55e] p-5 rounded-[15px] mt-5 flex items-center gap-3">
              <Calendar className="text-[#22c55e]" size={20} /> 
              <p className="m-0 text-gray-300">
                <strong className="text-[#22c55e]">Plan de Convergencia:</strong> Partida presupuestaria específica para cerrar la brecha en un plazo máximo de <strong className="text-white">2 a 3 años</strong> mediante un calendario de igualdad pactado.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
);

const EquidadPoliticasAnalysis = () => (
  <div className="max-w-[1000px] mx-auto px-5 py-10">
    <Reveal>
      <header className="text-center mb-[50px]">
        <h2 className="text-[2.2rem] font-black bg-gradient-to-r from-[#2ecc71] to-[#00d2ff] bg-clip-text text-transparent mb-[10px]">
          Políticas de Equidad Activa
        </h2>
        <p className="text-[1.1rem] opacity-80 max-w-[700px] mx-auto text-gray-300">
          Transformamos la estructura para que la igualdad no sea una meta, sino el motor de nuestra organización.
        </p>
      </header>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
      {[
        {
          icon: Scale,
          title: "Valoración Objetiva (VPT)",
          desc: "Asignamos fondos específicos para eliminar brechas. Nuestra Valoración de Puestos de Trabajo puntúa funciones, no géneros: la arquitectura técnica y la gestión de equipos tienen el mismo reconocimiento si su valor es equivalente."
        },
        {
          icon: GraduationCap,
          title: "Captación y Formación",
          desc: "Combatimos el \"no hay mujeres técnicas\" mediante formación interna proactiva. Preparamos a nuestra plantilla femenina para promocionar, eliminando sesgos en la toma de decisiones y comunicando cada avance con transparencia."
        },
        {
          tag: "RD 902/2020",
          icon: CircleDollarSign,
          title: "Transparencia Retributiva",
          desc: "Usamos el Registro y la Auditoría Retributiva como diagnósticos reales, no trámites. Derribamos la opacidad salarial para verificar que el talento se premia exclusivamente por méritos, fomentando una cultura de confianza."
        },
        {
          icon: Handshake,
          title: "Conciliación Corresponsable",
          desc: "Fomentamos que los hombres utilicen sus permisos de igual forma. El objetivo es que la conciliación deje de ser una \"trampa\" para la carrera femenina y se convierta en una norma compartida que no penalice el acceso a la alta dirección."
        }
      ].map((policy, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="bg-white/5 border border-white/10 p-[30px] rounded-[20px] transition-transform hover:-translate-y-1 hover:bg-white/[0.06] h-full relative">
            {policy.tag && (
              <span className="inline-block bg-[#00d2ff] text-black px-2 py-0.5 rounded text-[0.7rem] font-black mb-2.5">
                {policy.tag}
              </span>
            )}
            <div className="w-[50px] h-[50px] bg-[#2ecc71]/10 rounded-[12px] flex items-center justify-center text-[#2ecc71] text-2xl mb-5">
              <policy.icon size={24} />
            </div>
            <h3 className="text-[1.25rem] mb-[15px] text-white border-l-[3px] border-[#2ecc71] pl-2.5 font-bold">
              {policy.title}
            </h3>
            <p className="text-[0.9rem] leading-relaxed opacity-85 text-gray-400">
              {policy.desc}
            </p>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal delay={0.4}>
      <div className="mt-[50px] text-center p-10 rounded-[20px] border border-dashed border-[#2ecc71] bg-[#2ecc71]/5">
        <CheckCircle2 className="text-[#2ecc71] mx-auto mb-[15px]" size={48} />
        <h3 className="text-xl font-bold mb-2.5 text-white">Nuestro Compromiso</h3>
        <p className="italic opacity-80 text-gray-300">
          "La promoción profesional en Nueco Ecofix se basa en méritos objetivos y medibles, garantizando un entorno donde cuidar no frene el éxito."
        </p>
      </div>
    </Reveal>
  </div>
);

const EquidadMarcoLegalAnalysis = () => (
  <div className="max-w-[1100px] mx-auto px-5 py-10">
    <Reveal>
      <header className="text-center mb-[50px] border-b-2 border-[#2980b9] pb-5">
        <h2 className="text-[1.8rem] font-extrabold uppercase tracking-[1px] text-white">Marco Legal y Agentes Sociales</h2>
        <p className="text-[#2980b9] font-semibold mt-2 text-sm">COORDINACIÓN PARA UNA EQUIDAD REAL EN EL SECTOR TECNOLÓGICO</p>
      </header>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-[50px]">
      <Reveal delay={0.1}>
        <div className="bg-[#1e293b] p-[25px] rounded-[15px] border-t-4 border-[#27ae60] h-full">
          <Building className="text-[#27ae60] mb-[15px]" size={32} />
          <h3 className="m-[10px_0] text-[1.3rem] text-white font-bold">Responsabilidad Empresarial</h3>
          <ul className="pl-5 text-[0.9rem] opacity-90 text-gray-300 space-y-2 list-disc">
            <li><strong className="text-white">Procesos Ciegos:</strong> Implantación de currículum ciego para eliminar prejuicios de género en la captación.</li>
            <li><strong className="text-white">Cultura de Mando:</strong> Valoración del talento femenino en puestos técnicos y de alta dirección como objetivo medible.</li>
            <li><strong className="text-white">Ascensos Justos:</strong> Revisión de criterios para que el cuidado familiar no suponga un castigo profesional.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-[#1e293b] p-[25px] rounded-[15px] border-t-4 border-[#2980b9] h-full">
          <Settings className="text-[#2980b9] mb-[15px]" size={32} />
          <h3 className="m-[10px_0] text-[1.3rem] text-white font-bold">El Papel Sindical</h3>
          <ul className="pl-5 text-[0.9rem] opacity-90 text-gray-300 space-y-2 list-disc">
            <li><strong className="text-white">Vigilancia Salarial:</strong> Supervisión de la transparencia retributiva y denuncia de irregularidades en complementos.</li>
            <li><strong className="text-white">Negociación Activa:</strong> Diseño de Planes de Igualdad obligatorios (empresas &gt;50 empleados).</li>
            <li><strong className="text-white">Derechos Reales:</strong> Garantizar que el teletrabajo y la conciliación sean derechos efectivos, no frenos de carrera.</li>
          </ul>
        </div>
      </Reveal>
    </div>

    <Reveal delay={0.3}>
      <div className="bg-[#e67e22]/10 border border-[#e67e22] rounded-[15px] p-[30px] mt-10">
        <div className="flex items-center gap-[15px] mb-5 text-[#e67e22]">
          <AlertTriangle size={32} />
          <h3 className="m-0 uppercase font-black text-xl">El Convenio Colectivo TIC a Examen</h3>
        </div>
        <p className="mb-5 text-[0.95rem] text-gray-300">Aunque el marco legal busca la paridad, la estructura del convenio actual permite grietas donde la brecha salarial se perpetúa:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-black/20 p-[15px] rounded-[10px] text-[0.85rem]">
            <strong className="text-[#e67e22] block mb-[5px] text-sm uppercase">Sesgo en Clasificación Profesional</strong>
            <p className="text-gray-400">Los hombres suelen ser clasificados más rápido en niveles de desarrollo técnico superior. Las mujeres, con igual titulación, son derivadas a áreas de gestión con tablas salariales menos dinámicas.</p>
          </div>
          <div className="bg-black/20 p-[15px] rounded-[10px] text-[0.85rem]">
            <strong className="text-[#e67e22] block mb-[5px] text-sm uppercase">La Trampa de los Complementos</strong>
            <p className="text-gray-400">Pluses de disponibilidad, nocturnidad y dietas premian la "presencia extrema". Esto penaliza indirectamente a las mujeres, sobre quienes recae mayoritariamente la carga de cuidados.</p>
          </div>
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.4}>
      <div className="text-center mt-[50px] p-[30px] rounded-[50px] bg-[#2980b9] text-white font-semibold italic text-lg shadow-xl">
        "¿Es suficiente con negociar protocolos contra el acoso si el sistema de incentivos sigue premiando la presencialidad sobre el valor aportado?"
      </div>
    </Reveal>
  </div>
);

const EquidadRealidadAnalysis = () => (
  <div className="max-w-[1100px] mx-auto px-5 py-10">
    <Reveal>
      <header className="border-l-[5px] border-[#e74c3c] pl-5 mb-10">
        <h2 className="text-[2rem] font-extrabold text-white m-0 uppercase leading-tight">Análisis: ¿Existe realmente equidad?</h2>
        <p className="text-[#e74c3c] font-semibold mt-[5px] tracking-[1px] uppercase text-sm">DESCIFRANDO LA DISCRIMINACIÓN INDIRECTA EN EL SECTOR TIC</p>
      </header>
    </Reveal>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
      <Reveal delay={0.1}>
        <div className="bg-slate-800/50 border border-white/10 rounded-[15px] p-[30px] h-full">
          <h3 className="text-white mt-0 flex items-center gap-[10px] text-[1.2rem] font-bold mb-4">
            <TrendingUp size={20} className="text-[#3498db]" /> La Brecha Salarial
          </h3>
          <p className="text-gray-300 mb-4">La desigualdad no está en el sueldo base, sino en los mecanismos sutiles como la segmentación variable y los pluses por disponibilidad.</p>
          
          <div className="bg-[#e74c3c]/10 rounded-[10px] p-5 my-[15px] border border-dashed border-[#e74c3c]">
            <span className="block text-[2.2rem] font-extrabold text-[#e74c3c]">19,6%</span>
            <span className="text-[0.85rem] opacity-80 text-gray-400">Brecha de género en España (Subida de 0,6 puntos).</span>
          </div>
          
          <p className="text-[0.9rem] text-gray-400 mb-4">Esto equivale a una pérdida de <strong className="text-white">5.212,74€ anuales</strong> por mujer, o lo que es lo mismo: trabajar <strong className="text-white">dos meses gratis</strong> al año para igualar al hombre.</p>
          
          <div className="bg-white/5 p-[15px] rounded-[10px] text-[0.9rem] border-l-[3px] border-[#3498db] mt-[15px]">
            <strong className="text-[#3498db]">El "Sesgo de Disponibilidad":</strong> Las guardias y pluses TIC penalizan a quienes asumen tareas de cuidado, forzando a muchas mujeres a rechazar jornadas extendidas.
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="bg-slate-800/50 border border-white/10 rounded-[15px] p-[30px] h-full flex flex-col">
          <h3 className="text-white mt-0 flex items-center gap-[10px] text-[1.2rem] font-bold mb-4">
            <Layers size={20} className="text-[#3498db]" /> Segregación Laboral
          </h3>
          
          <div className="mb-6">
            <span className="inline-block bg-[#3498db] text-white px-[10px] py-[2px] rounded-[4px] text-[0.75rem] font-bold mb-[10px] uppercase">Segregación Horizontal</span>
            <p className="text-[0.9rem] text-gray-400">Concentración de mujeres en gestión y diseño, mientras ciberseguridad y arquitectura siguen siendo feudos masculinos con mayor prestigio salarial.</p>
          </div>

          <div className="mb-6">
            <span className="inline-block bg-[#f39c12] text-white px-[10px] py-[2px] rounded-[4px] text-[0.75rem] font-bold mb-[10px] uppercase">Segregación Vertical</span>
            <div className="flex flex-col sm:flex-row gap-5 mt-5">
              <div className="flex-1 bg-white/5 p-[15px] rounded-[10px] text-[0.9rem] border-l-[3px] border-[#3498db]">
                <strong className="text-white block mb-1">Techo de Cristal</strong>
                <p className="text-[0.85rem] opacity-80 text-gray-400">Barrera invisible para acceder a la alta dirección por sesgos y redes masculinizadas.</p>
              </div>
              <div className="flex-1 bg-white/5 p-[15px] rounded-[10px] text-[0.9rem] border-l-[3px] border-[#3498db]">
                <strong className="text-white block mb-1">Suelo Pegajoso</strong>
                <p className="text-[0.85rem] opacity-80 text-gray-400">Atrapadas en la base operativa por la carga de cuidados y falta de promoción.</p>
              </div>
            </div>
          </div>

          <p className="mt-auto pt-[15px] border-t border-white/10 text-[0.85rem] text-gray-500 italic">
            "Se estima que necesitaremos <strong className="text-white">134 años</strong> para alcanzar la paridad total según el Foro Económico Mundial (2024)."
          </p>
        </div>
      </Reveal>
    </div>

    <Reveal delay={0.3}>
      <div className="mt-10 p-5 bg-[#e74c3c]/5 rounded-[10px] border border-[#e74c3c]/20 text-center">
        <p className="m-0 text-[0.95rem] text-gray-300 flex items-center justify-center gap-2">
          <AlertTriangle size={18} className="text-[#e74c3c]" /> 
          La <strong className="text-white">penalización de la maternidad</strong> y la falta de corresponsabilidad siguen siendo los frenos principales para la carrera técnica femenina.
        </p>
      </div>
    </Reveal>
  </div>
);

const EquidadIntro = () => (
  <div className="max-w-[1100px] mx-auto px-5 py-[60px]">
    <Reveal>
      <header className="text-center mb-[60px]">
        <h2 className="text-[2.5rem] font-black mb-5 bg-gradient-to-r from-[#3498db] to-[#8e44ad] bg-clip-text text-transparent uppercase">
          TECNOLOGÍA CON NOMBRE FEMENINO
        </h2>
        <p className="max-w-[800px] mx-auto opacity-80 text-[1.1rem] text-gray-300">
          El sector tecnológico es el motor del futuro, pero aún arrastra problemas de equidad. En España, el talento femenino enfrenta barreras invisibles que debemos derribar juntos.
        </p>
      </header>
    </Reveal>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-[60px]">
      {[
        { h3: "27%", p: "Mujeres en profesionales STEM en España" },
        { h3: "1 de 10", p: "Mujeres graduadas elige carreras tecnológicas" },
        { h3: "7%", p: "Tituladas en FP Tecnológica (2026)" }
      ].map((stat, i) => (
        <Reveal key={i} delay={i * 0.1}>
          <div className="bg-white/5 border border-white/10 p-[30px] rounded-[20px] text-center relative overflow-hidden after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#8e44ad]">
            <h3 className="text-[3rem] m-0 text-[#3498db] font-black">{stat.h3}</h3>
            <p className="text-[0.9rem] mt-[10px] opacity-70 text-gray-400">{stat.p}</p>
          </div>
        </Reveal>
      ))}
    </div>

    <Reveal>
      <div className="bg-white/5 p-10 rounded-[30px] border border-white/10">
        <h3 className="text-center mb-10 uppercase tracking-[2px] font-black text-xl">Las Barreras del Talento</h3>
        
        <div className="space-y-10">
          {[
            {
              icon: EyeOff,
              h4: "Falta de Referentes",
              p: "La invisibilidad histórica genera un círculo vicioso. Menos del 1,5% de las chicas aspiran a profesiones digitales frente al 10% de los chicos, al no encontrar modelos en los que proyectarse."
            },
            {
              icon: HeartHandshake,
              h4: "Sesgo de Aplicación Práctica",
              p: "La tecnología se percibe como abstracta y competitiva. Las mujeres optan por STEM cuando el impacto social es claro (Medicina/Biotecnología), pero solo un 17,7% se matricula en Informática."
            },
            {
              icon: Award,
              h4: "La Trampa de la Perfección",
              p: "La autoexigencia empuja a las mujeres a sentir que deben dominar cada detalle técnico antes de postularse. Tienen mejores expedientes, pero se sienten menos preparadas por la severidad del entorno."
            }
          ].map((barrera, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-[30px] items-start">
              <div className="bg-[#8e44ad] min-w-[60px] h-[60px] rounded-[15px] flex items-center justify-center text-white">
                <barrera.icon size={24} />
              </div>
              <div className="flex-grow">
                <h4 className="m-0 mb-[10px] text-[#3498db] text-[1.3rem] font-bold">{barrera.h4}</h4>
                <p className="m-0 text-[0.95rem] opacity-80 text-gray-400">{barrera.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>

    <Reveal delay={0.3}>
      <div className="text-center mt-20 p-10 border border-[#8e44ad] rounded-[20px] bg-[#8e44ad]/5">
        <h3 className="italic font-light text-[1.5rem] mb-5 text-gray-200">
          "Un futuro digital diseñado mayoritariamente por hombres será un <span className="text-emerald-500 font-bold border-b-2 border-[#3498db]">futuro incompleto</span>."
        </h3>
        <p className="text-gray-400">En Nueco Ecofix creemos que la diversidad no es un dato estadístico, sino nuestra mayor ventaja competitiva para una revolución tecnológica más humana e inclusiva.</p>
      </div>
    </Reveal>
  </div>
);

const EquidadPage = () => {
  const [activeSubpage, setActiveSubpage] = useState("realidad");

  const subpages = [
    { id: "realidad", label: "¿Existe realmente la equidad?" },
    { id: "marco-legal", label: "Marco Legal y Agentes Sociales" },
    { id: "politicas", label: "Políticas Laborales" },
    { id: "retos", label: "Solucionando Retos" }
  ];

  const renderSubpage = () => {
    switch (activeSubpage) {
      case "realidad":
        return (
          <div className="space-y-12">
            <EquidadRealidadAnalysis />
          </div>
        );
      case "marco-legal":
        return (
          <div className="space-y-12">
            <EquidadMarcoLegalAnalysis />
          </div>
        );
      case "politicas":
        return (
          <div className="space-y-12">
            <EquidadPoliticasAnalysis />
          </div>
        );
      case "retos":
        return (
          <div className="space-y-12">
            <EquidadRetosAnalysis />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PageWrapper>
      <section className="h-[50vh] bg-cover bg-fixed bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url('https://images.unsplash.com/photo-1573161158332-554e1d2e5081?q=80&w=2070&auto=format&fit=crop')` }}>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-white to-emerald-500 bg-clip-text text-transparent">
          Equidad y Futuro
        </h1>
      </section>

      <EquidadIntro />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {subpages.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSubpage(sub.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                activeSubpage === sub.id
                  ? "bg-emerald-500 text-slate-900 border-emerald-500"
                  : "text-gray-400 border-white/10 hover:border-emerald-500/50 hover:text-white"
              }`}
            >
              {sub.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubpage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSubpage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </PageWrapper>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "prevencion", label: "Prevención" },
    { id: "riesgos", label: "Riesgos" },
    { id: "calendario", label: "Calendario Laboral 2026" },
    { id: "medidas", label: "Medidas" },
    { id: "compromiso", label: "Compromiso" },
    { id: "formacion", label: "Formación" },
    { id: "emergencia", label: "Emergencia" },
    { id: "contrataciones", label: "Contrataciones" },
    { id: "equidad", label: "Equidad" }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home": return <HomePage />;
      case "prevencion": return <PrevencionPage />;
      case "riesgos": return <RiesgosPage />;
      case "calendario": return <CalendarioPage />;
      case "medidas": return <MedidasMainPage />;
      case "compromiso": return <CompromisoPage />;
      case "formacion": return <FormacionPage />;
      case "emergencia": return <EmergenciaPage />;
      case "contrataciones": return <ContratacionesPage />;
      case "equidad": return <EquidadPage />;
      default: return <HomePage />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage("home")}
            className="text-xl font-black tracking-tighter bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Nuevo EcoFix
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  currentPage === item.id 
                    ? "bg-emerald-500 text-slate-900" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0f172a] border-b border-white/5 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                      currentPage === item.id 
                        ? "bg-emerald-500 text-slate-900" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nuevo EcoFix S. Coop. Galega. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
