import Image from 'next/image';

interface CardExperienceProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

const CardExperience = ({
  href,
  image,
  title,
  description,
}: CardExperienceProps) => {
  return (
    <a href={href} target="_blank" className="block group ">
      <div className="relative w-14 h-14 rounded-xl mb-5">
        <Image
          src={image}
          alt="experience-granlogia"
          fill
          className="object-cover rounded-xl"
          sizes="max-width: 600px"
        />
      </div>
      <h3 className="text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-500">{description} </p>
    </a>
  );
};

export default CardExperience;
