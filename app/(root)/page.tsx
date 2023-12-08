import ExperienceSection from './sections/experience-section';
import FeaturedWorkSection from './sections/featured-work-section';
import HeroSection from './sections/hero-section';
import SectionSkills from './sections/section-skill';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWorkSection />
      <ExperienceSection />
      <SectionSkills />
    </>
  );
}
