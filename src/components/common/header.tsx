import Link from "next/link";
import { Dumbbell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LockedFeatureModal } from "@/components/common/locked-feature-modal";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Dumbbell className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">
              {/* CMS: site_name */}
              Body Factory Gym
              {/* /CMS */}
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           {/* Future Integration: Authentication */}
          <LockedFeatureModal>
            <Button variant="ghost">
              <User className="mr-2 h-4 w-4" /> Member Login
            </Button>
          </LockedFeatureModal>
        </div>
      </div>
    </header>
  );
}
