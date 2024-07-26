import React, { useState } from 'react';

function PredictionCard() {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleYesNoClick = (option) => {
    setSelectedOption(option);
    setShowModal(true);
    setTimeout(() => {
      setModalVisible(true);
    }, 10);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setTimeout(() => {
      setShowModal(false);
      setSelectedOption(null);
    }, 300); // Match this duration with the animation duration
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const getYouPutValue = () => {
    const baseValue = selectedOption === 'yes' ? 6.9 : 3.1;
    return `₹${(baseValue * quantity).toFixed(1)}`;
  };
  const getYouGetValue = () => {
    return `₹${(10 * quantity).toFixed(1)}`;
  };

  return (
    <div className="relative bg-white rounded-lg p-4 shadow-sm min-h-[220px] flex flex-col justify-between">
      <div className="flex justify-between  items-center mb-2">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
          </svg>
          <span className="text-sm text-gray-500">5425 traders</span>
        </div>
        <img src="/IMAGE_3b17869a-8322-49de-bd64-5e9f7d18341a.avif" alt="Yellow Shirt" className="w-8 h-8 rounded-full" />
      </div>
      <h3 className="font-bold text-lg mb-2">Dindigul to win the match vs Madurai?</h3>
      <div className="flex items-start mb-2">
        <svg className="w-4 h-4 mt-1 mr-1 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
        </svg>
        <p className="text-sm text-gray-600">
          H2H last 5 T20 : Dindigul 3 , Madurai 2, DRAW 0
          <span className="text-blue-500 ml-1 cursor-pointer">Read more</span>
        </p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => handleYesNoClick('yes')}
          className="bg-blue-100 text-blue-800 px-4 py-2 rounded flex-1 font-semibold hover:bg-blue-200 transition"
        >
          Yes ₹6.9
        </button>
        <button
          onClick={() => handleYesNoClick('no')}
          className="bg-red-100 text-red-800 px-4 py-2 rounded flex-1 font-semibold hover:bg-red-200 transition"
        >
          No ₹3.1
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-end bg-black bg-opacity-50">
          <div className={`bg-white rounded-t-lg p-4 shadow-lg w-full max-w-md transition-transform duration-300 ease-in-out transform ${modalVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
            <div className="flex items-center mb-4">
              <img src="/IMAGE_3b17869a-8322-49de-bd64-5e9f7d18341a.avif" alt="Yellow Shirt" className="w-12 h-12 rounded-full mr-4" />
              <h3 className="font-bold text-lg">Dindigul to win the match vs Madurai?</h3>
            </div>
            <div className="flex space-x-2 mb-4">
              <button 
                className={`flex-1 py-2 rounded ${selectedOption === 'yes' ? 'bg-blue-500 text-white' : 'bg-white border border-gray-300'}`}
                onClick={() => setSelectedOption('yes')}
              >
                Yes
              </button>
              <button 
                className={`flex-1 py-2 rounded ${selectedOption === 'no' ? 'bg-red-500 text-white' : 'bg-white border border-gray-300'}`}
                onClick={() => setSelectedOption('no')}
              >
                No
              </button>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Quantity</span>
                <span className="text-sm text-gray-600">{quantity} <svg className="w-4 h-4 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/></svg></span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full"
              />
            </div>
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-lg font-bold">{getYouPutValue()}</p>
                <p className="text-sm text-gray-600">You Put</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-green-600">{getYouGetValue()}</p>
                <p className="text-sm text-gray-600">You Get</p>
              </div>
            </div>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold mb-4">
              Swipe for {selectedOption === 'yes' ? 'Yes' : 'No'}
            </button>
            <p className="text-sm text-gray-600 text-center">Available Balance: ₹0.11</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PredictionCard;
