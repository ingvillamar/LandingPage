import Image from 'next/image';

export default function Hero() {
  const services = [
    { icon: "💡", title: "Enterprise Architecture" },
    { icon: "💻", title: "Custom Development" },
    { icon: "☁️", title: "Cloud Solutions" },
    { icon: "🔒", title: "Security & Compliance" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#050505] flex flex-col">
      
      <div className="h-[120px] md:h-[150px] w-full block" />

      {/* ── CONTENIDO PRINCIPAL + IMAGEN en fila ── */}
      <div className="relative z-20 w-full px-6 md:px-12 flex flex-col md:flex-row items-center gap-4 mt-5">

        {/* Div principal */}
        <div className="w-full md:w-[45%] p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl bg-black/60 border border-white/10 shadow-2xl">
          
          <p className="text-sm md:text-base font-bold tracking-[0.4em] text-yellow-500 mb-4 uppercase">
            Sin Humo - Sin Magia
          </p>
          
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-[1.05] text-white">
            Arquitectura Real <br />
            <span className="text-yellow-500">a Pulso</span>
          </h1>

          <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">
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

        {/* Imagen al lado */}
      <div className="hidden md:flex flex-1 relative h-[500px] justify-start">         
        {/* 1. Cambiamos el translate negativo por uno positivo para ALEJARLA un poco del texto */}
        <div className="relative w-full h-full translate-x-2 lg:translate-x-12">
          {/* 
            - Si quieres que se separe MÁS: sube el número (ej: translate-x-20)
            - Si quieres que se acerque un poquito: baja el número (ej: translate-x-5)
          */}
          
          <Image
            src="/images/jean-hero.png"
            alt="Architek Specialist"
            fill
            priority
            sizes="50vw"
            className="object-contain object-left" 
          />
        </div>
      </div>

      </div>

      {/* Capa de degradado */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/20 to-transparent via-[30%] pointer-events-none"></div>

    </section>
  );
}
