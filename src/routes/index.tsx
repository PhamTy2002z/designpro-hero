import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Menu } from "lucide-react";
import { ShinyText } from "@/components/ShinyText";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DesignPro — Become a Product Leader" },
      {
        name: "description",
        content:
          "DesignPro delivers transformative programs that empower emerging product designers with cutting-edge expertise. 8000+ designers launched.",
      },
      { property: "og:title", content: "DesignPro — Become a Product Leader" },
      {
        property: "og:description",
        content:
          "Transformative product design programs for emerging designers. Apply for the next enrollment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

const NAV_LINKS = ["Home", "About Us", "Courses", "Instructors", "Testimonials", "Blog"];

function Index() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black font-sans">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Nav */}
        <header className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between gap-4">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </span>
              <span className="text-sm font-medium text-white">DesignPro</span>
            </a>

            <div className="hidden items-center gap-6 rounded-full border border-gray-700 px-6 py-2.5 lg:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
              <a
                href="#"
                className="group flex items-center gap-1 text-sm text-white/80 transition-colors hover:text-white"
              >
                Contact us
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <button
              type="button"
              aria-label="Open menu"
              className="text-white/80 transition-colors hover:text-white lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
          </nav>
        </header>

        {/* Top two-column section */}
        <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <p className="max-w-md text-sm text-white/80 md:text-base">
              We deliver transformative programs that empower emerging product designers with
              cutting-edge expertise and vision to thrive globally.
            </p>
            <p className="text-sm text-white/80 md:text-base lg:text-right">
              8000+ Talented Designers Launched !
            </p>
          </div>
        </section>

        {/* Hero */}
        <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-tight text-white/80 md:text-sm">
            Seats for Next Program Opening Soon
          </p>

          <h1 className="mt-4 text-5xl font-medium leading-[0.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            <span className="block text-white">Become</span>
            <span className="block">
              <ShinyText text="Product Leader." speed={3} spread={100} />
            </span>
          </h1>

          <button
            type="button"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white transition-colors duration-300 hover:bg-gray-900 md:px-8 md:py-4 md:text-base"
          >
            Apply for Next Enrollment
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </section>
      </div>
    </main>
  );
}
