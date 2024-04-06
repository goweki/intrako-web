import Hero from "@/components/hero";
import PageIllustration from "@/components/page-illustration";
import { BriefAboutUs } from "@/components/aboutUs";
import { BriefServices } from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="grow">
      <PageIllustration />
      <Hero />
      <BriefAboutUs />
      <BriefServices />
      <Testimonials />
    </main>
  );
}
