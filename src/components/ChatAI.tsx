"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

export default function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const question = input.trim();
  if (!question || loading) return;

  const updatedMessages = [...messages, { role: "user" as const, text: question }];
  setMessages(updatedMessages);
  setInput("");
  setLoading(true);

  try {
    const history = updatedMessages.map(m => ({
      role: m.role,
      content: m.text
    }));

    const res = await fetch("/api/rag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        history
      }),
    });

    const data = await res.json();

    setMessages(prev => [
      ...prev,
      { role: "assistant", text: data.error ?? data.answer },
    ]);

  } catch {
    setMessages(prev => [
      ...prev,
      { role: "assistant", text: "Error de conexión." },
    ]);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="flex flex-col h-[500px] w-[380px] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl fixed bottom-6 right-6 z-50">
      {/* Header del Chat */}
      <div className="bg-[#111] p-5 border-b border-white/10 flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse" />
          <div className="flex items-baseline gap-2">
            <span className="text-white font-bold text-sm tracking-[0.2em] uppercase">🤖 Jean AI</span>
            <span className="text-[10px] text-gray-500 font-mono">v1.0</span>
          </div>
        </div>
      </div>

      {/* Historial de mensajes */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#050505] scrollbar-thin scrollbar-thumb-white/10"
      >
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full opacity-40">
            <p className="text-center text-gray-400 text-sm px-8">
              Hola, soy el asistente de Architek. ¿En qué puedo ayudarte hoy?
            </p>
          </div>
        )}
        
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-yellow-500 text-black font-semibold rounded-br-none"
                  : "bg-[#1A1A1A] text-gray-100 border border-white/10 rounded-bl-none shadow-md"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#1A1A1A] border border-white/10 px-4 py-2.5 rounded-2xl rounded-bl-none text-xs text-yellow-500/70 animate-pulse flex items-center gap-2">
              <span className="flex gap-1"><span className="animate-bounce">.</span><span className="animate-bounce [animation-delay:-0.15s]">.</span><span className="animate-bounce [animation-delay:-0.3s]">.</span></span>
              JeanAI analizando
            </div>
          </div>
        )}
      </div>

      {/* Formulario de Input con tamaño Doble */}
      <form onSubmit={handleSubmit} className="p-4 bg-[#111] border-t border-white/10">
        <div className="flex items-center gap-3 bg-[#1A1A1A] border border-white/10 rounded-2xl p-2 focus-within:border-yellow-500 transition-all shadow-inner">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribe aquí..."
            disabled={loading}
            // text-xl (20px) para el doble de tamaño y py-5 para estirarlo
            className="flex-1 bg-transparent px-4 py-5 text-xl font-medium text-white placeholder-gray-600 outline-none disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            // Botón más grande: h-14 w-14
            className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-white/5 disabled:text-gray-600 text-black h-14 w-14 rounded-xl transition-all flex items-center justify-center shrink-0 shadow-lg"
          >
            {loading ? (
              <div className="w-6 h-6 border-3 border-black/20 border-t-black rounded-full animate-spin" />
            ) : (
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-7 h-7 stroke-current stroke-[3]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}