import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaTelegram } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      href: "mailto:trigobol23@gmail.com",
      icon: <FaEnvelope size={20} />,
      color: "",
    },
    {
      label: "GitHub",
      href: "https://github.com/Trigramador69",
      icon: <FaGithub size={20} />,
      color: "",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/trigo-gutierrez-diego-a25641340/",
      icon: <FaLinkedin size={20} />,
      color: "",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/59179328447", 
      icon: <FaWhatsapp size={20} className="text-green-500" />,
      color: "hover:border-green-600/60",
    },
    {
      label: "Telegram",
      href: "https://t.me/Trigoat_D",
      icon: <FaTelegram size={20} className="text-sky-400" />,
      color: "hover:border-sky-600/60",
    },
  ];

  return (
    <section className="container-clip space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-neutral-300">Let’s build something great together 👋</p>
      </motion.div>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-3 sm:grid-cols-2"
      >
        {contacts.map((c) => (
          <motion.li key={c.label} variants={item}>
            <a
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className={`card px-4 py-3 flex items-center gap-3 transition 
                         hover:scale-[1.02] focus:scale-[1.02] outline-none 
                         border border-neutral-800 ${c.color}`}
              aria-label={c.label}
            >
              {c.icon}
              <span className="font-medium">{c.label}</span>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
