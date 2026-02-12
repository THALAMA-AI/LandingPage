export default function App() {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/thalamacooking.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/40" />

      {/* contenido centrado */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1
          className="text-5xl md:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Launching Soon…
          <br />
          it’s cooking
        </h1>

        <p
          className="mt-6 text-2xl tracking-widest text-white"
          style={{ fontFamily: 'Pirulen, sans-serif', fontWeight: 'bold' }}
        >
          THALAMA AI
        </p>
      </div>
    </div>
  );
}
