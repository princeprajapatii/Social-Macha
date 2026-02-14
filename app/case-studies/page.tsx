import BrandLogos from "@/components/BrandLogos";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function WorkPage() {
  return (
    <section className="bg-[#f6f4ff]">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Work that drives real outcomes
          </h1>
          <p className="mt-5 text-lg text-gray-600">
            We partner with brands to create high intent, culture led
            marketing that converts attention into action.
          </p>
        </div>

        {/* Brand Logos */}
        <BrandLogos />
        {/* Case Studies */}
        <div className="mt-16 grid grid-cols-1 gap-12">
          
          <CaseStudyCard
            brand="Magicpin"
            objective="Drive user acquisition and app logins among high intent users in metro cities using WhatsApp communities."
            challenge="Low intent from traditional paid channels while targeting college students and corporate professionals."
            strategy={[
              "Targeted WhatsApp communities across metro cities",
              "Leveraged local influencers and community admins",
              "Weekend led incentive driven campaign",
            ]}
            results={[
              "100,000+ users reached",
              "15,000+ app logins",
              "High weekend redemption & intent traffic",
            ]}
            impact="Community led distribution helped magicpin scale cost effective, high intent user acquisition."
          />

          <CaseStudyCard
            brand="DKMS Foundation"
            objective="Drive large scale awareness around blood cancer survivors and stem cell donors."
            challenge="Traditional awareness campaigns felt scripted and easy to ignore."
            strategy={[
              "Collaborated with 200+ creators",
              "Produced 200+ emotion led short form videos",
              "Focused on human, unbranded storytelling",
            ]}
            results={[
              "1M+ total reach",
              "2.5%+ engagement rate",
              "High shareability & community participation",
            ]}
            impact="Story first content helped DKMS become part of emotionally resonant conversations."
          />

          <CaseStudyCard
            brand="Zomato"
            objective="Extend the life and reach of offline billboards on LinkedIn."
            challenge="Billboards have limited lifespan and offline only visibility."
            strategy={[
              "Repurposed billboard creatives into LinkedIn posts",
              "Used Zomato’s wit and cultural timing",
              "Optimized copy for LinkedIn native consumption",
            ]}
            results={[
              "1M+ LinkedIn impressions",
              "5–7% engagement rate",
              "High organic shares among professionals",
            ]}
            impact="Offline creativity gained a second life online, driving sustained brand recall."
          />

          <CaseStudyCard
            brand="Dating App (Confidential)"
            objective="Drive high intent app installs using performance led creator campaigns."
            challenge="Highly competitive dating category with low trust."
            strategy={[
              "Creator led Reels & Shorts campaigns",
              "Relatable dating narratives & curiosity hooks",
              "Install focused CTAs with rapid iterations",
            ]}
            results={[
              "3M+ impressions",
              "50K+ installs",
              "Consistent install velocity",
            ]}
            impact="Platform native storytelling successfully converted attention into installs."
          />

        </div>

        {/* Footer Note */}
        <p className="mt-16 text-sm text-gray-500">
          Many more campaigns across influencers, communities, and performance media.
        </p>
      </div>
    </section>
  );
}
