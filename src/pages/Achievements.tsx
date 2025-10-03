export default function Achievements() {
  const items = [
    {
      title: "Buildathon Winner - Ethereum Bolivia",
      date: "2025",
      img: "/images/achievements/eth-2025.jpg",
      link: "https://substack.com/inbox/post/171319495?r=5eh5s3&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true&triedRedirect=true",
      desc: "Winner project focused on AI + Web3 credentials for soft skills."
    },
  ];

  return (
    <section className="container-clip">
      <h1 className="text-3xl font-semibold mb-6">Achievements</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map(a => (
          <article key={a.title} className="card overflow-hidden">
            <img src={a.img} alt={a.title} className="aspect-video object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{a.title}</h3>
              <p className="text-xs text-neutral-400">{a.date}</p>
              <p className="text-sm text-neutral-300 mt-1">{a.desc}</p>
              <a className="mt-3 inline-block link-ux text-sm" href={a.link} target="_blank">Read more</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
