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
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // cierra al navegar
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // bloquea scroll del body
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
            <li key={r.to}>
              <NavLink to={r.to} className={linkCls}>{r.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden sm:block"><SocialLinks /></div>

        {/* Trigger mobile */}
        <button
          className="sm:hidden rounded-xl p-2 border border-neutral-800 hover:bg-white/5"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>
      </nav>

      {/* Mobile full-screen menu with gradient */}
      <AnimatePresence>
        {open && (
            <motion.div
            key="mobile-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // pantalla completa REAL en iOS, fondo 100% opaco
            className="fixed top-0 left-0 w-screen h-[100dvh] z-[9999] bg-neutral-950 flex flex-col"
            style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
            }}
            >
            {/* header del menú */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                <Link to="/" className="text-lg font-semibold" onClick={() => setOpen(false)}>
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

            {/* contenido del menú */}
            <motion.nav
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.22 }}
                className="flex-1 overflow-y-auto px-3 py-4"
            >
                <ul className="flex flex-col">
                {[
                    { to: "/", label: "Home" },
                    { to: "/about", label: "About" },
                    { to: "/achievements", label: "Achievements" },
                    { to: "/projects", label: "Projects" },
                    { to: "/contact", label: "Contact" },
                ].map((r, i) => (
                    <motion.li
                    key={r.to}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                    >
                    <NavLink
                        to={r.to}
                        onClick={() => setOpen(false)}
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
