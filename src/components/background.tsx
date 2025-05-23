const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      <div className="relative w-full h-full">
        {/* Fondo corporativo con gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 opacity-90" />
        
        {/* Patrón de cuadrícula sutil */}
        <div className="absolute inset-0 bg-[length:40px_40px] opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2563eb 1px, transparent 1px),
              linear-gradient(to bottom, #2563eb 1px, transparent 1px)
            `
          }}>
        </div>

        {/* Efecto de luz suave */}
        <div className="absolute inset-0 animate-light-drift overflow-hidden">
          <div className="w-full h-full bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(37,99,235,0.05)_15%,transparent_30%)]" />
        </div>

        {/* Overlay de sombra suave */}
        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(37,99,235,0.1)]" />
      </div>
    </div>
  );
};

export default Background;