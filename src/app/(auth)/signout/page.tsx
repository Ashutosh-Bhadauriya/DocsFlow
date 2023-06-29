import { LogOutButtons } from "@/components/auth/logout-buttons";
import { Header } from "@/components/header";
import { Shell } from "@/components/shell";

export default function SignOutPage() {
  return (
    <Shell layout="auth" className="max-w-xs">
      <Header
        title="Sign out"
        description="Are you sure you want to sign out?"
        size="sm"
        className="text-center"
      />
      <LogOutButtons />
    </Shell>
  );
}
