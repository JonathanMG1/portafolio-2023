import Title from '@/components/ui/title';
import Container from '@/components/ui/container';
import ListExperience from '@/components/list-experience';

const PageExperience = () => {
  return (
    <main className="border-b border-gray-500/30">
      <Container>
        <Title title="Experience" />
      </Container>
      <hr className="border-gray-500/30" />
      <Container className="py-10">
        <ListExperience className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 " />
      </Container>
    </main>
  );
};

export default PageExperience;
