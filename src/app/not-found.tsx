import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CTAButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="font-display text-2xl text-ink-900">404</p>
        <h1 className="mt-2 font-display text-3xl text-ink-900">Page not found</h1>
        <p className="mt-3 max-w-md text-ink-500">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <CTAButton href="/" className="mt-8">
          Back to Home
        </CTAButton>
      </main>
      <SiteFooter />
    </>
  );
}
