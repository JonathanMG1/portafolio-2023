import Image from 'next/image';
import ButtonSocialMedia from '@/components/ui/button-social';
import Container from '@/components/ui/container';
import { information } from '@/assets/data';

const HeroSection = () => {
  return (
    <section id="home" className="border-b border-gray-500/30 py-10">
      <Container>
        <div className="space-y-10">
          <div className="relative w-24 h-24">
            <Image
              src={information.photo}
              alt="imagen-perfil"
              fill
              className="object-cover rounded-full grayscale"
              sizes="max-width: 600px"
            />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl  text-white mb-5">{`Hola, soy Jonathan - Desarrollador Front-End `}</h1>
            <p className="text-gray-500">
              Programador con experiencia en proyectos personales y
              empresariales. conocimiento tecnicos basicos en hardware y
              software. Destaco por brindar soporte amable y respetuoso a
              usuarios. Comprometido con el aprendizaje continuo y resultados de
              calidad
            </p>
          </div>

          <div className="flex items-center gap-4">
            {information.socialMedia.map((social) => (
              <ButtonSocialMedia
                key={social.href}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
