import { NavLink, Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `px-2 py-1 rounded ${isActive ? "text-purple-400" : "text-neutral-300 hover:text-neutral-100"}`;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur">
      <nav className="container-clip flex items-center justify-between py-3">
        <Link to="/" className="text-lg font-semibold">
          <span className="text-purple-500">Diego</span> Trigo
        </Link>
        <ul className="hidden gap-4 sm:flex">
          <li><NavLink to="/" className={linkCls}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkCls}>About</NavLink></li>
          <li><NavLink to="/achievements" className={linkCls}>Achievements</NavLink></li>
          <li><NavLink to="/projects" className={linkCls}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={linkCls}>Contact</NavLink></li>
        </ul>
        <SocialLinks />
      </nav>
    </header>
  );
}
