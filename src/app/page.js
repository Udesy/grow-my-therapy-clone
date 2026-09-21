import {
  AreasOfExpertise,
  FindTherapistCta,
  Hero,
  Honoring,
  HopeSection,
  HowWeWork,
  Ourhelp,
  QuoteBanner,
  Specialties,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <HopeSection />
        <Ourhelp />
        <QuoteBanner />
        <AreasOfExpertise />
        <HowWeWork />
        <Honoring />
        <Specialties />
        <FindTherapistCta />
      </main>
    </>
  );
}
