import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiDotnet,
  SiPostman,
  SiMacos,
  SiAndroidstudio,
} from "react-icons/si";
import { FaNetworkWired, FaUserTie, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { TbBrandVscode, TbBrandVisualStudio } from "react-icons/tb"; // 👈 Tabler
import type { IconType } from "react-icons";

export type Item = { label: string; icon: IconType };

export const roles: Item[] = [
  { label: "Freelancer", icon: FaUserTie },
  { label: "Blockchain Developer", icon: FaNetworkWired },
  { label: "Software Developer", icon: FaLaptopCode },
  { label: "Full-Stacker", icon: FaLaptopCode },
];

export const techs: Item[] = [
  { label: "C++", icon: SiCplusplus },
  { label: "JavaScript", icon: SiJavascript },
  { label: "C#", icon: SiDotnet },        // C# representado con .NET
  { label: "Python", icon: SiPython },
  { label: "Postgres", icon: SiPostgresql },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "MongoDB", icon: SiMongodb },
  { label: "SQL", icon: FaDatabase },     // Genérico DB (no hay SQL Server oficial)
];

export const tools: Item[] = [
  { label: "Visual Studio", icon: TbBrandVisualStudio }, 
  { label: "VS Code", icon: TbBrandVscode },             
  { label: "Postman", icon: SiPostman },
  { label: "macOS", icon: SiMacos },
  { label: "Android Studio", icon: SiAndroidstudio },
];
