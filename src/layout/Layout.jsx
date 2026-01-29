import Header from "../components/Header";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-slate-200">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-16">
        {children}
      </main>
    </div>
  );
}
