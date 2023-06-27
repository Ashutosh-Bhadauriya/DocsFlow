import { ModeToggle } from "@/components/layouts/theme-toggle";
import { MainNav } from "@/components/layouts/main-nav";
import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";
export const SiteHeader = () => {
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />
        <div className="flex items-center gap-x-2">
          <Link href="/signin">
            <div className={`${buttonVariants({ size: "lg" })} h-10`}>
              Get started
              <span className="sr-only">Get started</span>
            </div>
          </Link>
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
};
