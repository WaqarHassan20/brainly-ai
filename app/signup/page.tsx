"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignupRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/login?mode=signup");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#F2EFE9] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
  );
}
