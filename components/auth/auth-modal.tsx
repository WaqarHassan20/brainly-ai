"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SignIn, SignUp } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

function AuthModalContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const authMode = searchParams.get("auth");

  const isOpen = authMode === "login" || authMode === "signup";

  const handleClose = () => {
    // Remove the 'auth' search parameter from the URL to close the modal
    const params = new URLSearchParams(searchParams.toString());
    params.delete("auth");
    const query = params.toString() ? `?${params.toString()}` : "";
    router.push(`${pathname}${query}`);
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop glassmorphism overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0B0F19]/40 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 w-full max-w-[440px] flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 p-2 text-muted hover:text-foreground hover:bg-cream/80 dark:hover:bg-slate-800/80 rounded-full transition-all duration-200"
              aria-label="Close authentication modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Clerk Components wrapping with Routing="hash" for modal usage */}
            {authMode === "login" ? (
              <SignIn
                routing="hash"
                fallbackRedirectUrl="/dashboard"
                signUpUrl="/?auth=signup"
              />
            ) : (
              <SignUp
                routing="hash"
                fallbackRedirectUrl="/dashboard"
                signInUrl="/?auth=login"
              />
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export function AuthModal() {
  return (
    <Suspense fallback={null}>
      <AuthModalContent />
    </Suspense>
  );
}
export default AuthModal;
