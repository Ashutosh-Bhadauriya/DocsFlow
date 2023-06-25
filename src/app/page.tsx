import { UserButton } from "@clerk/nextjs";

import { ModeToggle } from "@/components/layouts/theme-toggle";
export default function Home() {
  return (
    <main>
      <div>
        <ModeToggle />
      </div>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  );
}
