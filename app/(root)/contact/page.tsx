import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import Form from './components/form';

const PageContact = () => {
  return (
    <main className="pb-10 border-b border-gray-500/30">
      <Container>
        <Title title="Charlemos 😃" />
        <p className="text-gray-500 mb-10">
          Si desea hablar sobre un proyecto potencial o simplemente saludar,
          envíeme un mensaje o envíeme un correo electrónico a{' '}
          <span className="text-white px-1">jairomaldonado37@gmail.com.</span>
        </p>
        <Form />
      </Container>
    </main>
  );
};

export default PageContact;
