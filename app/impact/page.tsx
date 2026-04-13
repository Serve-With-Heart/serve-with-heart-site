import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Impact | Serve With Heart",
  description: "See the real-world difference Serve With Heart is making in the Austin community.",
};

const milestones = [
  { year: "2021", title: "Founded", desc: "Started with a small team of youth volunteers serving meals at Republic Square Park in downtown Austin." },
  { year: "2022", title: "Expanded", desc: "Grew to serve Round Rock and Cedar Park, partnering with local churches and community centers." },
  { year: "2023", title: "Scaled Up", desc: "Reached 200+ active volunteers, launched hygiene kit distribution, and served 500+ meals per week." },
  { year: "2024", title: "Going Stronger", desc: "Expanded partnerships with Front Steps, Mobile Loaves & Fishes, and The Caring Place across Williamson County." },
];

const stats = [
  { value: "500+", label: "Meals served weekly" },
  { value: "5,000+", label: "Hygiene kits distributed" },
  { value: "200+", label: "Active volunteers" },
  { value: "12+", label: "Communities reached" },
  { value: "15+", label: "Partner organizations" },
  { value: "3 yrs", label: "Years of service" },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Our Impact</p>
            <h1 className="text-5xl font-bold mb-6">Real Change, Real People</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Every number represents a life touched — a meal received, a supply given, a moment of
              connection that says &quot;you matter.&quot;
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.1} once className="text-center">
                <p className="text-5xl font-bold text-white mb-2">{s.value}</p>
                <p className="text-white/80">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-4">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Our Journey</p>
            <h2 className="text-4xl font-bold text-navy">How We&apos;ve Grown</h2>
          </AnimateIn>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange/30" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimateIn key={m.year} delay={i * 0.1} once direction="left">
                  <div className="flex gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-orange flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{m.year}</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-navy mb-2">{m.title}</h3>
                      <p className="text-navy/70 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-12">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">In the Field</p>
            <h2 className="text-4xl font-bold text-navy">Moments That Matter</h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/618720800_17846309661670324_2456509979080549696_n.jpg",
              "/images/618808721_17846309583670324_7652664320948850511_n.jpg",
              "/images/619581100_17846309634670324_1943955190003904023_n.jpg",
              "/images/619777867_17846309670670324_4832650059086895_n.jpg",
            ].map((src, i) => (
              <AnimateIn key={i} delay={i * 0.1} once>
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={src}
                    alt={`Impact photo ${i + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimateIn once>
            <h2 className="text-4xl font-bold text-white mb-6">Help Us Do Even More</h2>
            <p className="text-white/70 mb-10 text-lg">
              Your time, talent, or treasure can multiply what we do every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl"
              >
                Volunteer Near You
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Make a Donation
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
