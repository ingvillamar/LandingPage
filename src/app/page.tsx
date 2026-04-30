import Header from "@/components/Header";
import Hero from "@/components/Hero";
//import BarraEstadisticas from "@/components/BarraEstadisticas";
import Projects from "@/components/Projects";
import ChatAI from "@/components/ChatAI";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      <Header />
      <main>
        {/* Agregamos este contenedor relativo para "atar" la barra al Hero */}
        <div className="relative">
          <Hero />          
        </div>
        
        {/* Proyectos ahora sí podrá subir con margen negativo */}
        <Projects />
        {/* Chat de búsqueda semántica RAG */}
        <ChatAI />
      </main>
    </div>
  );
}