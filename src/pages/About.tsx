
export default function About() {
  return (
    <section className="container-clip grid gap-8 sm:grid-cols-[220px,1fr] items-start">
      <img
        src="/images/me/DiegoTrigo.jpg"
        alt="Diego Trigo"
        className="h-[220px] w-[220px] object-cover rounded-2xl border border-neutral-800"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">About me</h1>
        <p className="text-neutral-300">
          I’m Diego, 21 y/o Systems Engineer from Cochabamba, Bolivia.  
          My journey started with C++, JavaScript and Python, and today I focus on full-stack development with React and Spring Boot.  
          I’m passionate about blockchain (Web3, smart contracts) and AI-driven automation with tools like n8n, always aiming for clean architectures and reliable products.  

          Outside of coding, I enjoy staying active — I train Brazilian Jiu Jitsu, go to the gym, play football, and also love expressing creativity through songwriting.
        </p>

        <h2 className="text-xl font-semibold text-purple-400">How I work</h2>
        <ul className="list-disc pl-5 space-y-1 text-neutral-300">
            <li>Focus on clean architectures and scalable design.</li>
            <li>Team player: hackathons, collaboration and knowledge sharing.</li>
            <li>Continuous learner, always exploring new technologies like Web3 and AI flows.</li>
        </ul>

      </div>
    </section>
  );
}

