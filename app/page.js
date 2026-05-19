export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        💻 My Dashboards
      </h1>

      <div className="grid gap-6">

        <a
          href="https://attendance-system-kappa-opal.vercel.app/en/admin"
          target="_blank"
          className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-2xl border border-zinc-700 transition"
        >
          📊 Teacher Attendance Dashboard
        </a>

        <a
          href="https://your-ai-dashboard.vercel.app"
          target="_blank"
          className="bg-zinc-900 hover:bg-zinc-800 p-6 rounded-2xl border border-zinc-700 transition"
        >
          🤖 AI CRM Dashboard
        </a>

      </div>

    </main>
  );
}