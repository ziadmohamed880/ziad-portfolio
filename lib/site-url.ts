export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return `https://${process.env.NEXT_PUBLIC_SITE_URL}`;
  }
  // The stable production domain (custom domain, or the assigned
  // *.vercel.app alias) — unlike VERCEL_URL, which is this specific
  // deployment's unique hashed URL and changes on every deploy.
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
