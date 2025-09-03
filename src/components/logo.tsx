
export function Logo() {
  return (
    <div className="relative">
      <div 
        className="w-32 h-24 bg-black/80 rounded-2xl p-4 flex flex-col justify-center items-center shadow-lg"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '4px 4px',
        }}
      >
        <div className="text-center">
          <div className="font-serif text-3xl font-bold text-white tracking-wider leading-none">DUA</div>
          <div className="text-xs text-white/80 tracking-[0.2em] mt-1">COLLECTIVE</div>
        </div>
      </div>
    </div>
  );
}
