export default function SectionHeader({
  title,
  subtitle,
  center = false,
}: { title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center mb-6" : "mb-6"}>
      <h2 className="text-2xl sm:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-2 text-neutral-300">{subtitle}</p>}
    </div>
  );
}
