import Hero from "@/components/hero";
import { BriefAboutUs } from "@/components/aboutUs";
import Newsletter from "@/components/newsletter";
import { BriefServices } from "@/components/services";
import Testimonials from "@/components/testimonials";
import PageIllustration from "@/components/page-illustration";

export default function Home() {
  return (
    <main className="grow">
      <PageIllustration />
      <Hero />
      <BriefAboutUs />
      <BriefServices />
      <Testimonials />
      {/* <Newsletter /> */}
    </main>
  );
}
