import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white">
      <button className="text-gray-600 hover:text-gray-800">
        <img src="/drawer-icon.3dd24632.svg" alt="Drawer menu" className="h-6 w-6" />
      </button>
      <img src="/ProboNewLogo.790e6c90.svg" alt="Probo" className="h-6" />
      <div className="flex rounded-full border border-[#becdda] px-3 py-1.5 justify-evenly cursor-pointer">₹ 0.11</div>
    </header>
  );
}

export default Header;
