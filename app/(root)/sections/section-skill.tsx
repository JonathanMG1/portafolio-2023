import ListFeatureSkills from '@/components/list-skills';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';

const SectionSkills = () => {
  return (
    <section className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Skills" />
        <ListFeatureSkills />
      </Container>
    </section>
  );
};

export default SectionSkills;
