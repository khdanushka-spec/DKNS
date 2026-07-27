import {
  Globe,
  Bot,
  Network,
  Code2,
  Palette,
  Search,
  Megaphone,
  Compass,
  Cloud,
  Smartphone,
  Wheat,
  HeartPulse,
  Factory,
  GraduationCap,
  Palmtree,
  FlaskConical,
  HardHat,
  ShoppingBag,
  Briefcase,
  Landmark,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  bot: Bot,
  network: Network,
  code: Code2,
  palette: Palette,
  search: Search,
  megaphone: Megaphone,
  compass: Compass,
  cloud: Cloud,
  smartphone: Smartphone,
  wheat: Wheat,
  "heart-pulse": HeartPulse,
  factory: Factory,
  "graduation-cap": GraduationCap,
  palmtree: Palmtree,
  "flask-conical": FlaskConical,
  "hard-hat": HardHat,
  "shopping-bag": ShoppingBag,
  briefcase: Briefcase,
  landmark: Landmark,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const IconComponent = iconMap[name] ?? Globe;
  return <IconComponent className={className} strokeWidth={1.75} />;
}
