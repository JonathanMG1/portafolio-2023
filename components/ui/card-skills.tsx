interface CardSkillsProps {
  href: string;
  image: string;
  title: string;
  description: string;
}

const CardSkills = () => {
  return (
    <section className="block group">
      <ul>
        <ul className="flex flex-3 items-center gap-10 flex-wrap md:grid-cols-2   ">
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            HTML - <span className="text-primary">Intermedio</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            CSS - <span className="text-primary">Basico</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            JavaScript - <span className="text-primary">Basico</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            React JS - <span className="text-primary">Basico</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            Next JS - <span className="text-primary">Basico</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            Git - <span className="text-primary">Basico</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            SQL - <span className="text-primary">Basico</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            Ofimatica - <span className="text-primary">Basico</span>
          </li>
          <li className="border border-gray-300/30 py-2 px-4 rounded-full text-white">
            PHP - <span className="text-primary">Basico</span>
          </li>
        </ul>
      </ul>
    </section>
  );
};

export default CardSkills;
