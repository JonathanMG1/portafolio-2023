'use client';

import ListFeatureWork from '@/components/list-feature-work';
import ButtonWork from '@/components/ui/button-work';
import Container from '@/components/ui/container';
import Title from '@/components/ui/title';
import { useRouter } from 'next/navigation';

const FeaturedWorkSection = () => {
  const router = useRouter();
  return (
    <section id="featuredWork" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Proyectos" />
        <ListFeatureWork />
        <ButtonWork
          onClick={() => router.push('/work')}
          label="Ver todos los Proyectos"
        />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
