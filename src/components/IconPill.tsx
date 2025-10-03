import type { IconType } from "react-icons";

type Props = { icon: IconType; label: string; className?: string };

export default function IconPill({ icon: Icon, label, className = "" }: Props) {
  return (
    <span className={`chip inline-flex items-center gap-2 ${className}`}>
      <Icon className="h-4 w-4" />
      {label}
    </span>
  );
}
