import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  const btn = "rounded-xl p-2 border border-neutral-800 hover:bg-white/5";
  return (
    <div className="hidden sm:flex items-center gap-2">
      <a className={btn} href="https://github.com/Trigramador69" target="_blank" aria-label="GitHub"><Github size={18} /></a>
      <a className={btn} href="https://www.linkedin.com/in/trigo-gutierrez-diego-a25641340/" target="_blank" aria-label="LinkedIn"><Linkedin size={18} /></a>
      <a className={btn} href="mailto:trigobol23@gmail.com" aria-label="Email"><Mail size={18} /></a>
    </div>
  );
}
