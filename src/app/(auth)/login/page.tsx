// Login Page (/login).
// 2-column authentication layout matching Figma Login.png (1440x1024).

import AuthPanel from "@/components/auth/AuthPanel";
import AuthVisual from "@/components/auth/AuthVisual";
import LoginForm from "@/components/auth/LoginForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — ByteSpace",
  description:
    "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-2 sm:py-4">
      {/* Left Column: Visual Showcase */}
      <div className="lg:col-span-7 flex justify-center lg:justify-start">
        <AuthVisual
          title="Sign in with ease"
          description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
        />
      </div>

      {/* Right Column: White Card Form Panel */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <AuthPanel>
          <LoginForm />
        </AuthPanel>
      </div>
    </div>
  );
}
