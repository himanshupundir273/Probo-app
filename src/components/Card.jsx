import React from 'react';

const Card = ({ title, traders, detail, yesVotes, noVotes, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-gray-500">{traders} traders</span>
        </div>
        {icon && <img src={icon} alt="Icon" className="w-6 h-6" />}
      </div>
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-xs text-gray-600 mb-1">{detail}</p>
      <a href="#" className="text-xs text-blue-500 mb-3 inline-block">Read more</a>
      <div className="flex justify-between">
        <button className="bg-blue-100 text-blue-600 px-6 py-3 rounded text-sm font-semibold w-[48%]">
          Yes ₹{yesVotes}
        </button>
        <button className="bg-red-100 text-red-600 px-6 py-3 rounded text-sm font-semibold w-[48%]">
          No ₹{noVotes}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-xl mx-auto mt-8 rounded-lg p-[1px] shadow-sm">
      <Card
        title="Bitcoin to be priced at 67644.01 USDT or more at 12:00 AM?"
        traders={176}
        detail="Bitcoin to be priced at 67432.00 USDT or more at 02:00 AM?"
        yesVotes={6}
        noVotes={4}
        icon="/IMAGE_e75356f6-0648-4b8d-810b-a950e5feb23d.webp"
      />
    </div>
  );
};

export default App;