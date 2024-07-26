import React from 'react';

const categories = [
    { name: 'Cricket', icon: '/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.avif' },
    { name: 'Crypto', icon: '/IMAGE_894bd129-1053-49aa-ba76-e4e0f5b1dd25.avif' },
    { name: 'Economy', icon: '/IMAGE_6728274b-32ab-47e5-9f18-26d4c5e09a22.avif' },
  ];

function CategoryButtons() {
  return (
    <div className="flex justify-between mb-4 pt-[0.75rem] px-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className="flex flex-col items-center justify-center bg-gray-100 rounded-xl p-3 w-20 h-20"
        >
          <img 
            src={category.icon} 
            alt={`${category.name} icon`} 
            className="w-8 h-8 mb-2 object-contain"
          />
          <span className="text-xs font-medium text-gray-600">{category.name}</span>
        </button>
      ))}
      <button className="flex items-center justify-center bg-gray-100 rounded-xl p-3 w-20 h-20">
        <img 
          src="/arrow_up.5cfe61f7.svg"
          alt="Arrow down"
          className="w-8 h-8 object-contain transform rotate-180"
        />
      </button>
    </div>
  );
}

export default CategoryButtons;