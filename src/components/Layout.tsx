import Navbar from "./Navbar";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />
      <main className="container-clip py-10">{children}</main>
      <footer className="container-clip py-10 text-sm text-neutral-400">
        © {new Date().getFullYear()} Diego Trigo — Built with React & Tailwind
      </footer>
    </div>
  );
}
