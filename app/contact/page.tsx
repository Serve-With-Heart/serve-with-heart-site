import AnimateIn from "@/components/AnimateIn";
import { Mail, Instagram, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | Serve With Heart",
  description: "Get in touch with Serve With Heart. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Contact</p>
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Questions, partnerships, or want to get your school or organization involved?
              We&apos;d love to hear from you.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <AnimateIn once direction="left">
              <h2 className="text-3xl font-bold text-navy mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Email</p>
                    <a
                      href="mailto:teamservewithheart@gmail.com"
                      className="text-navy/70 hover:text-orange transition-colors"
                    >
                      teamservewithheart@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Instagram</p>
                    <a
                      href="https://www.instagram.com/servewithheart2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy/70 hover:text-orange transition-colors"
                    >
                      @servewithheart2026
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Service Area</p>
                    <p className="text-navy/70">
                      Austin, Round Rock, Cedar Park, Leander, Georgetown, and the greater Central Texas area
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy mb-1">Response Time</p>
                    <p className="text-navy/70">We typically respond within 24–48 hours</p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn once direction="right">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                <form
                  action="https://formspree.io/f/your-form-id"
                  method="POST"
                  className="space-y-5"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1.5">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help?"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about yourself or your question..."
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange px-6 py-3.5 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-lg"
                  >
                    Send Message
                  </button>
                  <p className="text-xs text-navy/50 text-center">
                    Replace the Formspree action URL with your own form endpoint.
                  </p>
                </form>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
