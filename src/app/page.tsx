import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import { site } from "@/content";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Fullstack Developer & UI/UX Designer",
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chiang Rai",
    addressCountry: "TH",
  },
  alumniOf: "Mae Fah Luang University",
  sameAs: [site.github, site.linkedin],
};

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Contact />
      <script
        type="application/ld+json"
        // escape "<" per Next.js JSON-LD guidance to avoid XSS injection
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </main>
  );
}
