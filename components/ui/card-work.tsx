import Image from 'next/image';
import Link from 'next/link';

interface CardWorkProps {
  href: string;
  image: string;
  category: string;
  title: string;
}

const CardWork = ({ href, image, category, title }: CardWorkProps) => {
  return (
    <Link href={href} className=" group">
      <div className="relative w-full h-80 mb-5 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="image"
          fill
          className="object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
          sizes="max-width: 600px"
        />
      </div>
      <h5 className="text-gray-500 uppercase tracking-widest font-medium">
        {category}
      </h5>
      <h3 className="text-xl text-white group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
    </Link>
  );
};

export default CardWork;
