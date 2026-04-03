import { HeroInternal } from "./HeroInternal";

interface HeroPageTitleProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function HeroPageTitle({ title, subtitle, breadcrumbs }: HeroPageTitleProps) {
  return <HeroInternal title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />;
}