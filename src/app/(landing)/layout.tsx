// import { SiteFooter } from "@/components/layouts/site-footer"
import { SiteHeader } from "@/components/layouts/site-header";

interface LandingLayoutProps {
  children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader user={null} />
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  );
}
