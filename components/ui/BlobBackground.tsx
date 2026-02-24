// Pure CSS decorative background – no client JS needed

export default function BlobBackground() {
  return (
    <>
      {/* Pink blob – top left */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          width: 380,
          height: 380,
          top: -80,
          left: -100,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,180,180,0.55) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Purple blob – bottom right */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          width: 320,
          height: 320,
          bottom: 60,
          right: 100,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,160,255,0.45) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Green blob – center */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          width: 220,
          height: 220,
          top: '38%',
          left: '28%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(80,200,140,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Decorative outline circles */}
      <div
        className="fixed pointer-events-none z-0 rounded-full border border-black/10"
        style={{ width: 130, height: 130, top: 20, right: 70 }}
      />
      <div
        className="fixed pointer-events-none z-0 rounded-full border border-black/10"
        style={{ width: 90, height: 90, bottom: 170, left: 30 }}
      />
    </>
  )
}
