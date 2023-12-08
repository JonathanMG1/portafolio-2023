import CardSkills from '@/components/ui/card-skills';
import { cn } from '@/libs/utils';

interface ListSkillsProps {
  className?: string;
}
const ListFeatureSkills = ({ className }: ListSkillsProps) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 py-4',
        className
      )}
    >
      <CardSkills />
    </div>
  );
};

export default ListFeatureSkills;
