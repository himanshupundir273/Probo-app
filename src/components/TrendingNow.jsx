import React from 'react';

const trendingItems = [
  { name: 'DINvMAD', img: '/IMAGE_38d3d593-891e-47aa-b161-19d6d653dd94.avif' },
  { name: 'Youtube', img: '/IMAGE_5e949ff3-dd44-42b9-9892-5af1dd6cd017.avif' },
  { name: 'Expiring Soon', img: '/IMAGE_9e69b5b2-8187-455a-b674-b589fec089ee.avif', live: true },
  { name: 'Bitcoin', img: '/IMAGE_3a2a35f2-171d-46a1-a989-5c254eae97c4.avif', live: true },
  { name: 'Olympics 2024', img: '/IMAGE_c8cc86cf-44a7-4aeb-9871-9a9b84088abe.avif' },
  { name: 'IND-WV', img: '/IMAGE_103951bc-709f-4dc1-9075-0388dcacdc3d.webp' },
  { name: 'Sports News', img: '/IMAGE_79e461e8-0f3d-4de1-af81-214239ac5d29.avif' },
  { name: 'Ethereum', img: '/IMAGE_50dbba48-d2bc-41f5-8df5-38182ff19674.avif', live: true },
  { name: 'NOS-WTRT-W', img: '/IMAGE_e7191657-108d-4880-9f70-c84e7dd4569a.avif' },
  { name: 'NOSVTRT', img: '/IMAGE_e7191657-108d-4880-9f70-c84e7dd4569a.avif' },
  { name: 'Stocks-Dow Jones', img: '/IMAGE_00881261-d8fe-434b-ad00-2ea7d258150f.avif',live: true },
  { name: 'IREVZIM', img: '/IMAGE_25bd108c-6def-4dc5-ba2c-b229a89f25f3.webp' },
];

function TrendingNow() {
  return (
    <div className="mb-4">
      <h2 className="font-bold mb-2 px-4">Trending now</h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="grid grid-rows-2 grid-flow-col gap-3 p-2">
          {trendingItems.map((item) => (
            <div key={item.name} className="bg-gray-100 rounded-xl p-2 flex items-center space-x-3 shadow-sm whitespace-nowrap w-40">
              <div className="relative">
                <img src={item.img} alt={item.name} className="w-10 h-10 object-cover rounded-full" />
                {item.live && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded-full">LIVE</span>
                )}
              </div>
              <span className="text-sm font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingNow;