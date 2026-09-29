"use client";

// Accessible newsletter subscription form used in the footer.
// Implements client-side submission state with pending indicator and localStorage persistence.

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error" | "already">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setStatus("error");
      setErrorMessage("Please enter an email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).");
      return;
    }

    setStatus("pending");

    setTimeout(() => {
      try {
        const stored = localStorage.getItem("bytespace_newsletter_subscribers");
        const list: string[] = stored ? JSON.parse(stored) : [];
        if (list.includes(cleanEmail.toLowerCase())) {
          setStatus("already");
          return;
        }
        list.push(cleanEmail.toLowerCase());
        localStorage.setItem("bytespace_newsletter_subscribers", JSON.stringify(list));
      } catch {
        // Ignore localStorage error
      }
      setStatus("success");
      setEmail("");
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 w-full max-w-[460px]">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle" && status !== "pending") setStatus("idle");
            }}
            placeholder="Enter your email"
            aria-label="Email address for newsletter"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "newsletter-error" : undefined}
            disabled={status === "pending"}
            required
            className="w-full h-[52px] rounded-full border border-[#CED0D3] bg-white px-6 text-[15px] text-[#242528] placeholder-[#949696] focus:border-[#003BE2] focus:outline-none focus:ring-2 focus:ring-[#003BE2]/20 transition-all disabled:opacity-70"
          />
        </div>

        <button
          type="submit"
          disabled={status === "pending"}
          aria-label="Subscribe to newsletter"
          className="h-[52px] px-8 rounded-full bg-[#D4FB20] text-[#242528] text-[15px] font-medium hover:bg-[#CBFC01] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003BE2] shrink-0 cursor-pointer disabled:opacity-60 flex items-center justify-center gap-2"
        >
          {status === "pending" ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-[#242528]"
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
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              <span>Subscribing...</span>
            </>
          ) : (
            <span>Search</span>
          )}
        </button>
      </div>

      {status === "success" && (
        <p className="mt-2 text-xs font-semibold text-green-700" role="status">
          ✓ Thank you for subscribing to our newsletter!
        </p>
      )}

      {status === "already" && (
        <p className="mt-2 text-xs font-semibold text-[#003BE2]" role="status">
          ℹ This email is already subscribed to updates.
        </p>
      )}

      {status === "error" && (
        <p id="newsletter-error" className="mt-2 text-xs font-semibold text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
