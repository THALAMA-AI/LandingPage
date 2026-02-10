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
    </div>
  );
}
