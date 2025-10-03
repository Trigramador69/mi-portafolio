import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  // Cierra al navegar
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Bloquea scroll del body
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="container-clip flex items-center justify-between py-3">
        <Link to="/" className="text-lg font-semibold">
          <span className="text-purple-500">Diego</span> Trigo
        </Link>

        {/* Desktop */}
        <ul className="hidden gap-4 sm:flex">
          {routes.map(r => (
            <li key={r.to}><NavLink to={r.to} className={linkCls}>{r.label}</NavLink></li>
          ))}
        </ul>
        <div className="hidden sm:block"><SocialLinks /></div>

        {/* Trigger mobile */}
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

      {/* === MOBILE FULL-SCREEN MENU === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Pantalla completa, SOLIDA, por encima de todo
            className="fixed inset-0 z-[100] bg-neutral-950"
            style={{
              // safe areas iOS
              paddingTop: "env(safe-area-inset-top)",
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Header del menú */}
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
              <Link to="/" className="text-lg font-semibold">
                <span className="text-purple-500">Diego</span> Trigo
              </Link>
              <button
                className="rounded-xl p-2 border border-neutral-800 hover:bg-white/5"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            {/* Contenido del menú */}
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="h-[calc(100dvh-64px)] overflow-y-auto px-3 py-4"
            >
              <ul className="flex flex-col">
                {routes.map((r, i) => (
                  <motion.li
                    key={r.to}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                  >
                    <NavLink
                      to={r.to}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-lg ${
                          isActive ? "text-purple-400 bg-white/5" : "text-neutral-200 hover:bg-white/5"
                        }`
                      }
                    >
                      {r.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-4 px-1">
                <SocialLinks />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
