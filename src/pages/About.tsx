export default function About() {
  return (
    <section className="container-clip grid gap-8 sm:grid-cols-[220px,1fr] items-start">
      <img src="/images/me/DiegoTrigo.jpg" alt="Diego Trigo" className="h-[220px] w-[220px] object-cover rounded-2xl border border-neutral-800" />
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">About me</h1>
        <p className="text-neutral-300">
          I’m Diego, 21 y/o, Systems Engineer based in Cochabamba, Bolivia.
          I enjoy building full-stack apps, mobile features and experimenting with Web3/AI.
        </p>
        <ul className="list-disc pl-5 space-y-1 text-neutral-300">
          <li>Teaching assistant / community work (optional)</li>
          <li>Hackathons & team collaboration</li>
          <li>Focus on quality: SOLID, testing, clean architecture</li>
        </ul>
      </div>
    </section>
  );
}
