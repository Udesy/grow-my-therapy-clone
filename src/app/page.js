import {
  About,
  AreasOfExpertise,
  FindTherapistCta,
  Hero,
  Honoring,
  HowWeWork,
  MyOffice,
  Ourhelp,
  QuoteBanner,
  Specialties,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Ourhelp />
        <QuoteBanner />
        <AreasOfExpertise />
        <HowWeWork />
        <MyOffice />
        <Honoring />
        <Specialties />
        <FindTherapistCta />
      </main>
    </>
  );
}
