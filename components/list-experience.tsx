import { cn } from '@/libs/utils';
import CardExperience from './ui/card-experience';

interface ListExperienceProps {
  className?: string;
}

const ListExperience = ({ className }: ListExperienceProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10',
        className
      )}
    >
      <CardExperience
        href="https://new.granlogia.cl/"
        image="https://img.freepik.com/vector-gratis/plantilla-logotipo-albanil-diseno-plano_23-2149242449.jpg?w=740&t=st=1701983581~exp=1701984181~hmac=b41c3dc453018855863411fdd23f09fde32d252ea97ee5b203a2c34db04d097a"
        title="Gran logia de Chile"
        description="Soporte a usuarios"
      />
      <CardExperience
        href=""
        image="https://img.freepik.com/vector-gratis/codigo-degradado-logotipo-desarrollo_23-2148809625.jpg?w=740&t=st=1701984312~exp=1701984912~hmac=06187f185253d394e641d980d25a326df845b32c7f771682d9165601cac47b25"
        title="Empresa X"
        description="Desarrollador Front End Junior"
      />
    </div>
  );
};

export default ListExperience;
