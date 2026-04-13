import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { Heart, Package, Share2, DollarSign } from "lucide-react";

export const metadata = {
  title: "Get Involved | Serve With Heart",
  description: "Support Serve With Heart through donations, supply drives, and spreading the word.",
};

const donationTiers = [
  { amount: "$10", desc: "Provides a hygiene kit for one individual" },
  { amount: "$25", desc: "Feeds a family of four for one day" },
  { amount: "$50", desc: "Stocks supplies for a week-long outreach event" },
  { amount: "$100", desc: "Sponsors a full community meal distribution" },
];

const supplyItems = [
  "Non-perishable food items",
  "Water bottles",
  "Socks and underwear (new)",
  "Toothbrush & toothpaste",
  "Deodorant & shampoo",
  "Blankets and sleeping bags",
  "Backpacks",
  "First-aid supplies",
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Get Involved</p>
            <h1 className="text-5xl font-bold mb-6">Support the Mission</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Your generosity — whether financial or in-kind — directly serves homeless individuals
              and families across the greater Austin area.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy">Ways to Give</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <DollarSign className="h-8 w-8 text-orange" />,
                title: "Financial Donation",
                desc: "Every dollar goes directly to purchasing food, supplies, and resources for our outreach events. No overhead fluff.",
              },
              {
                icon: <Package className="h-8 w-8 text-orange" />,
                title: "Supply Drive",
                desc: "Collect essential items from friends, family, or your school or workplace and drop them at one of our collection points.",
              },
              {
                icon: <Share2 className="h-8 w-8 text-orange" />,
                title: "Spread the Word",
                desc: "Follow and share our Instagram @servewithheartorg to grow awareness and inspire others to join or give.",
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 0.15} once>
                <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{card.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4">
          <AnimateIn once className="text-center mb-12">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Donate</p>
            <h2 className="text-4xl font-bold text-navy mb-4">What Your Gift Does</h2>
            <p className="text-navy/70">Every contribution — large or small — makes a tangible difference.</p>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-6">
            {donationTiers.map((tier, i) => (
              <AnimateIn key={tier.amount} delay={i * 0.1} once>
                <div className="flex items-start gap-4 bg-cream rounded-2xl p-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-orange flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{tier.amount}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-navy font-medium leading-relaxed">{tier.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn once className="text-center mt-10">
            <a
              href="https://www.gofundme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl"
            >
              <Heart className="h-5 w-5 fill-white" /> Donate Now
            </a>
            <p className="mt-4 text-navy/50 text-sm">Secure donation via GoFundMe</p>
          </AnimateIn>
        </div>
      </section>

      {/* Supply Drive */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn once direction="left">
              <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Supply Drive</p>
              <h2 className="text-4xl font-bold text-white mb-6">What We Need Most</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Collecting these items for a drive? Contact us and we&apos;ll arrange a drop-off or pickup.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-full border-2 border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Us to Arrange Drop-off
              </Link>
            </AnimateIn>
            <AnimateIn once direction="right">
              <ul className="grid grid-cols-2 gap-3">
                {supplyItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                    <span className="w-2 h-2 rounded-full bg-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
