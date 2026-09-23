export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute -top-40 left-1/4 h-[36rem] w-[36rem] rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          animation: "drift-a 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full opacity-25 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-2) 0%, transparent 70%)",
          animation: "drift-b 26s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full opacity-20 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          animation: "drift-a 30s ease-in-out infinite reverse",
        }}
      />
      <div className="absolute inset-0 bg-bg/40" />
    </div>
  );
}
