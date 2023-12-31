import { cn } from '@/libs/utils';
import Link from 'next/link';
import { routes } from '@/assets/data';

const MainMenu = () => {
  return (
    <ul>
      <li>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'flex items-center gap-4 text-gray-500 py-5 px-8 border-b border-gray-500/30 hover:bg-gray-500/5 hover:text-white transition-colors duration-300'
            )}
          >
            <route.icon size={18} />
            {route.label}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default MainMenu;
