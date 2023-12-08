'use client';

import { ReactNode, useState } from 'react';
import Sidebar from '@/components/shared/Sidebar';
import { RiMenu2Line } from 'react-icons/ri';
import Footer from '@/components/shared/footer';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />

      <button type="button" className="lg:hidden">
        <RiMenu2Line onClick={() => setShowMenu(true)} size={20} />
      </button>
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
