import Image from 'next/image';
import { ArrowUpRight, Box, Cloud, Smartphone } from 'lucide-react';

const projects = [
  {
    category: 'ENTERPRISE SOLUTIONS',
    title: 'Plataforma de Transformación Empresarial',
    description: 'Plataforma digital unificada que optimiza operaciones y acelera el crecimiento sostenible.',
    image: '/images/proyecto1.jpg',
    icon: <Box className="w-5 h-5 text-yellow-500" />,
  },
  {
    category: 'CLOUD SOLUTIONS',
    title: 'Migración y Modernización en la Nube',
    description: 'Migración segura y escalable a la nube con mejor rendimiento, seguridad y eficiencia.',
    image: '/images/proyecto2.jpg',
    icon: <Cloud className="w-5 h-5 text-yellow-500" />,
  },
  {
    category: 'MOBILE SOLUTIONS',
    title: 'Aplicación Móvil Personalizada',
    description: 'Experiencias móviles intuitivas que conectan usuarios y potencian el negocio.',
    image: '/images/proyecto3.jpg',
    icon: <Smartphone className="w-5 h-5 text-yellow-500" />,
  },
];

export default function Projects() {
  return (
    /* 
       REFACTORIZACIÓN MAESTRA:
       1. '-translate-y-22': Succiona la sección hacia arriba (aprox 288px).
       2. 'mb-[-18rem]': Elimina el hueco vacío que queda abajo al subir la sección.
       3. 'z-30': Asegura que esté por encima del Hero pero por debajo de la Barra (z-50).
       4. 'pt-64': Reducimos el padding superior para que el título no baje tanto.
    */
    <section className="relative z-10 bg-[#050505] text-white py-24 -translate-y-22 mb-[-12rem] pt-64 px-6">
      <div className="container mx-auto">        
        
        {/* Cabecera de la sección */}
        <div className="mb-16 border border-white/10 rounded-[2.5rem] p-10 bg-black/40 backdrop-blur-xl shadow-2xl">
          <span className="text-yellow-500 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
            Nuestro Trabajo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">Proyectos</h2>
          <div className="h-1.5 w-24 bg-yellow-500 mb-8 rounded-full"></div>
          <div className="max-w-2xl text-gray-400 space-y-2 text-lg leading-relaxed">
            <p>Soluciones reales para desafíos complejos.</p>
            <p>Cada proyecto refleja nuestro compromiso con la innovación, la calidad y los resultados.</p>
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] overflow-hidden hover:border-yellow-500/50 transition-all duration-500 shadow-xl"
            >
              {/* Contenedor de Imagen - Aumentamos h-72 para mejor impacto visual */}
              <div className="relative h-72 w-full overflow-hidden bg-neutral-900">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                />
                <div className="absolute top-6 left-6 p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl z-20">
                  {project.icon}
                </div>
              </div>

              {/* Contenido de la Card */}
              <div className="p-8">
                <span className="text-yellow-500 font-bold tracking-widest text-[10px] uppercase">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-4 leading-tight group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-white/5 flex justify-between items-center group/btn cursor-pointer">
                  <span className="text-yellow-500 font-semibold text-sm">Ver caso de éxito</span>
                  <ArrowUpRight className="w-5 h-5 text-yellow-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}