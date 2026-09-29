"use client";

// Register form component with validation, pending states, and accessible controls.
// Matches Figma Register.png 1:1.

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
  }>({});
  const [isPending, setIsPending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: { fullName?: string; email?: string; password?: string } = {};

    if (!fullName.trim()) {
      errs.fullName = "Full name is required";
    }

    if (!email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMessage(null);

    if (!validate()) return;

    setIsPending(true);
    // Non-persisting client feedback conforming to PRD security rules (no fake permanent tokens)
    setTimeout(() => {
      setIsPending(false);
      setFeedbackMessage(
        "Static demo notice: Frontend verification passed. User registration service will connect in production."
      );
    }, 700);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Eyebrow & Title */}
        <span className="text-[15px] font-medium text-[#003BE2]">
          Create an Account
        </span>
        <h2 className="text-[34px] font-bold text-[#242528] tracking-tight mt-1 mb-8">
          Welcome to ByteSpace
        </h2>

        {/* Feedback alert if submitted */}
        {feedbackMessage && (
          <div
            role="status"
            className="mb-6 p-4 rounded-[14px] bg-[#F5F5F6] border border-[#CED0D3] text-[13px] leading-[20px] text-[#4B4C53]"
          >
            {feedbackMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="register-fullname"
              className="block text-[14px] font-medium text-[#242528] mb-2"
            >
              Full Name
            </label>
            <input
              id="register-fullname"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) {
                  setErrors((prev) => ({ ...prev, fullName: undefined }));
                }
              }}
              placeholder="Jamie Davis"
              aria-invalid={!!errors.fullName}
              aria-describedby={
                errors.fullName ? "register-fullname-error" : undefined
              }
              className="w-full px-4 py-3.5 rounded-[16px] border border-[#E5E6E8] text-[15px] text-[#242528] placeholder:text-[#949696] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
            />
            {errors.fullName && (
              <p
                id="register-fullname-error"
                className="mt-1.5 text-[13px] text-red-600 font-medium"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="register-email"
              className="block text-[14px] font-medium text-[#242528] mb-2"
            >
              Email
            </label>
            <input
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: undefined }));
                }
              }}
              placeholder="designer@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={
                errors.email ? "register-email-error" : undefined
              }
              className="w-full px-4 py-3.5 rounded-[16px] border border-[#E5E6E8] text-[15px] text-[#242528] placeholder:text-[#949696] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
            />
            {errors.email && (
              <p
                id="register-email-error"
                className="mt-1.5 text-[13px] text-red-600 font-medium"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="register-password"
              className="block text-[14px] font-medium text-[#242528] mb-2"
            >
              Password
            </label>
            <input
              id="register-password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) {
                  setErrors((prev) => ({ ...prev, password: undefined }));
                }
              }}
              placeholder="*********"
              aria-invalid={!!errors.password}
              aria-describedby={
                errors.password ? "register-password-error" : undefined
              }
              className="w-full px-4 py-3.5 rounded-[16px] border border-[#E5E6E8] text-[15px] text-[#242528] placeholder:text-[#949696] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
            />
            {errors.password && (
              <p
                id="register-password-error"
                className="mt-1.5 text-[13px] text-red-600 font-medium"
              >
                {errors.password}
              </p>
            )}
          </div>

          {/* Right-aligned Submit Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-3 rounded-full bg-[#D4FB20] text-[#242528] font-semibold text-[15px] hover:bg-[#CBFC01] active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] shadow-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
            >
              {isPending ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#242528]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Processing...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Switch to Login link */}
      <p className="text-center text-[14px] text-[#717375] mt-40">
        Already have an account?{" "}
        <Link
          href={ROUTES.login}
          className="text-[#003BE2] font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] rounded"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
