import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import ListExperience from '@/components/list-experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Experiencia Laboral" />
        <ListExperience />
      </Container>
    </section>
  );
};

export default ExperienceSection;
