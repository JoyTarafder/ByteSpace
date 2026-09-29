// Register Page (/register).
// 2-column authentication layout matching Figma Register.png (1440x1024).

import type { Metadata } from "next";
import AuthVisual from "@/components/auth/AuthVisual";
import AuthPanel from "@/components/auth/AuthPanel";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: {
    absolute: "ByteSpace",
  },
  description:
    "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.",
};

export default function RegisterPage() {
  return (
    <div className="w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center py-2 sm:py-4">
      {/* Left Column: Visual Showcase */}
      <div className="lg:col-span-7 flex justify-center lg:justify-start">
        <AuthVisual
          title="Sign up and come in"
          description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
        />
      </div>

      {/* Right Column: White Card Form Panel */}
      <div className="lg:col-span-5 flex justify-center lg:justify-end">
        <AuthPanel>
          <RegisterForm />
        </AuthPanel>
      </div>
    </div>
  );
}
