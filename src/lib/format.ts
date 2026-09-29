// Utility: data formatting helpers (price, number, date)

/**
 * Formats a number as USD price string.
 * @example formatPrice(29) => "$29"
 */
export function formatPrice(amount: number): string {
  return `$${amount}`;
}

/**
 * Formats large numbers with K suffix.
 * @example formatCount(12000) => "12K"
 */
export function formatCount(n: number): string {
  if (n >= 1000) return `${Math.floor(n / 1000)}K`;
  return String(n);
}

/**
 * Formats a star rating to one decimal place.
 * @example formatRating(4.7) => "4.7"
 */
export function formatRating(rating: number): string {
  return rating.toFixed(1);
}
