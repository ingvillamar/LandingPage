import Image from 'next/image';

export default function Hero() {
  const services = [
    { icon: "💡", title: "Enterprise Architecture" },
    { icon: "💻", title: "Custom Development" },
    { icon: "☁️", title: "Cloud Solutions" },
    { icon: "🔒", title: "Security & Compliance" },
  ];

  return (
    // 1. Usamos min-h-screen para evitar que el alto fijo bloquee el movimiento del contenido
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col">
      
      {/* 2. ESPACIADOR REFORZADO: Usamos h-[140px] para forzar una bajada mayor que el Header */}
      <div className="h-[120px] md:h-[150px] w-full block" />

      {/* ── IMAGEN DE FONDO ── */}
      <div className="absolute inset-0 z-0 h-full w-full max-w-[1440px] mx-auto px-6 md:px-12 pointer-events-none">
        <div className="relative w-full h-full flex justify-end items-center">
          <div className="relative w-[280px] lg:w-[35%] h-[50%] transition-all duration-500">
            <Image
              src="/images/jean-hero.png"
              alt="Architek Specialist"
              fill
              priority
              sizes="(max-width: 768px) 280px, 35vw"
              className="object-contain object-center opacity-100" 
            />
          </div>
        </div>
      </div>

      {/* ── CONTENIDO PRINCIPAL ── */}
      {/* 3. Eliminamos flex-1 para que el margen superior realmente empuje el div hacia abajo */}
      <div className="relative z-20 container mx-auto px-6 md:px-12">
        
        {/* Añadimos un mt-10 adicional aquí para asegurar la separación visual */}
        <div className="max-w-2xl p-10 md:p-14 rounded-[2.5rem] backdrop-blur-xl bg-black/60 border border-white/10 shadow-2xl mt-5">
          
          <p className="text-xl md:text-lg font-bold tracking-[0.4em] text-yellow-500 mb-6 uppercase">
            Sin Humo - Sin Magia
          </p>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-[1.05] text-white">
            Arquitectura Real <br />
            <span className="text-yellow-500">a Pulso</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-xl">
            Arquitectura AI para impulsar el crecimiento real de tu negocio
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-yellow-400/50 transition-all">
                  <span className="text-xl">{service.icon}</span>
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                  {service.title}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full sm:w-auto px-12 py-5 bg-yellow-400 text-black font-black rounded-2xl hover:bg-yellow-500 hover:-translate-y-1 transition-all shadow-xl shadow-yellow-400/20 uppercase tracking-wider">
            Explore Our Services
          </button>
        </div>
      </div>

      {/* Capa de degradado */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/20 to-transparent via-[30%] pointer-events-none"></div>

    </section>
  );
}