import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SocialLinks from "./SocialLinks";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `px-2 py-1 rounded transition-colors ${
    isActive ? "text-purple-400" : "text-neutral-300 hover:text-purple-200"
  }`;

const routes = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/achievements", label: "Achievements" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Cierra el menú al navegar
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="container-clip flex items-center justify-between py-3">
        {/* Brand */}
        <Link to="/" className="text-lg font-semibold" onClick={close}>
          <span className="text-purple-500">Diego</span> Trigo
        </Link>

        {/* Links desktop */}
        <ul className="hidden gap-4 sm:flex">
          {routes.map((r) => (
            <li key={r.to}>
              <NavLink to={r.to} className={linkCls}>{r.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Social desktop */}
        <div className="hidden sm:block">
          <SocialLinks />
        </div>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="sm:hidden rounded-xl p-2 border border-neutral-800 hover:bg-white/5"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Sheet Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/70" 
                onClick={close}
            >
            <motion.aside
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.25 }}
                className="absolute right-0 top-0 h-full w-[82%] max-w-[340px] bg-neutral-950 border-l border-neutral-800 shadow-2xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                <Link to="/" className="text-lg font-semibold" onClick={close}>
                  <span className="text-purple-500">Diego</span> Trigo
                </Link>
                <button
                  className="rounded-xl p-2 border border-neutral-800 hover:bg-white/5"
                  aria-label="Close menu"
                  onClick={close}
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="px-2 py-3">
                <ul className="flex flex-col">
                  {routes.map((r, i) => (
                    <motion.li
                      key={r.to}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * i }}
                    >
                      <NavLink
                        to={r.to}
                        onClick={close}
                        className={({ isActive }) =>
                          `block rounded-xl px-3 py-3 text-base ${
                            isActive
                              ? "text-purple-400 bg-white/5"
                              : "text-neutral-200 hover:bg-white/5"
                          }`
                        }
                      >
                        {r.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>

                {/* Social en mobile */}
                <div className="mt-3 px-1">
                  <SocialLinks />
                </div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
