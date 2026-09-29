"use client";

// Login form component with validation, pending states, and accessible controls.
// Matches Figma Login.png 1:1.

import { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isPending, setIsPending] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: { email?: string; password?: string } = {};
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
        "Static demo notice: Frontend verification passed. Backend authentication service will process credentials in production."
      );
    }, 700);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Eyebrow & Title */}
        <span className="text-[15px] font-medium text-[#003BE2]">Sign In</span>
        <h2 className="text-[34px] font-bold text-[#242528] tracking-tight mt-1 mb-8">
          Welcome Back
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
          {/* Email Field */}
          <div>
            <label
              htmlFor="login-email"
              className="block text-[14px] font-medium text-[#242528] mb-2"
            >
              Email
            </label>
            <input
              id="login-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
              }}
              placeholder="designer@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "login-email-error" : undefined}
              className="w-full px-4 py-3.5 rounded-[16px] border border-[#E5E6E8] text-[15px] text-[#242528] placeholder:text-[#949696] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
            />
            {errors.email && (
              <p id="login-email-error" className="mt-1.5 text-[13px] text-red-600 font-medium">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="login-password"
              className="block text-[14px] font-medium text-[#242528] mb-2"
            >
              Password
            </label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
              }}
              placeholder="*********"
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "login-password-error" : undefined}
              className="w-full px-4 py-3.5 rounded-[16px] border border-[#E5E6E8] text-[15px] text-[#242528] placeholder:text-[#949696] focus:outline-none focus:ring-2 focus:ring-[#003BE2] focus:border-transparent transition-all"
            />
            {errors.password && (
              <p id="login-password-error" className="mt-1.5 text-[13px] text-red-600 font-medium">
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
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-8">
          <div className="flex-1 h-px bg-[#E5E6E8]" />
          <span className="text-[#949696] text-[14px]">or</span>
          <div className="flex-1 h-px bg-[#E5E6E8]" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Facebook */}
          <button
            type="button"
            aria-label="Sign in with Facebook"
            className="w-14 h-14 rounded-[20px] border border-[#CED0D3] flex items-center justify-center text-[#242528] hover:bg-[#F5F5F6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] cursor-pointer"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          {/* Google */}
          <button
            type="button"
            aria-label="Sign in with Google"
            className="w-14 h-14 rounded-[20px] border border-[#CED0D3] flex items-center justify-center text-[#242528] hover:bg-[#F5F5F6] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] cursor-pointer"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Switch to Register link */}
      <p className="text-center text-[14px] text-[#717375] mt-19">
        New user?{" "}
        <Link
          href={ROUTES.register}
          className="text-[#003BE2] font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] rounded"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
