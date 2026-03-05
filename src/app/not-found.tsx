export default function NotFound() {
  return (
    <main className="site-bg flex min-h-screen items-center justify-center px-6 text-white">
      <div className="rounded-2xl border border-gold/70 bg-ink/90 px-8 py-10 text-center shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue/90">404</p>
        <h1 className="mt-2 font-display text-4xl text-gold">Page Not Found</h1>
        <p className="mt-3 text-white/80">That page does not exist on tomstuffs.com.</p>
      </div>
    </main>
  );
}
