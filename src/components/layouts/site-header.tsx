import { ModeToggle } from "@/components/layouts/theme-toggle";
import { MainNav } from "@/components/layouts/main-nav";
import { Button, buttonVariants } from "@/components/ui/button";
import type { User } from "@clerk/nextjs/dist/types/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";

interface SiteHeaderProps {
  user: User | null;
}
import Link from "next/link";
export const SiteHeader = ({ user }: SiteHeaderProps) => {
  const initials = `${user?.firstName?.charAt(0) ?? ""} ${
    user?.lastName?.charAt(0) ?? ""
  }`;

  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? "";

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 items-center justify-between">
        <MainNav />
        <div className="flex items-center gap-x-2">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={user.imageUrl}
                      alt={user.username ?? ""}
                    />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/account">
                      <Icons.user className="mr-2 h-4 w-4" aria-hidden="true" />
                      Account
                      <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/stores">
                      <Icons.dashboard
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Dashboard
                      <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild disabled>
                    <Link href="/dashboard/settings">
                      <Icons.settings
                        className="mr-2 h-4 w-4"
                        aria-hidden="true"
                      />
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/signout">
                    <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/signin">
              <div className={`${buttonVariants({ size: "lg" })} h-10`}>
                Get started
                <span className="sr-only">Get started</span>
              </div>
            </Link>
          )}
          {/* <ModeToggle /> */}
        </div>
      </div>
    </header>
  );
};
