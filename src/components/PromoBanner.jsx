import React from "react";

function PromoBanner() {
  return (
    <div className="mb-4 overflow-x-auto scrollbar-hide">
      <div className="flex space-x-4 w-max pb-2 px-4">
        <img
          src="/IMAGE_b04c6ae8-68fc-4535-9786-9eb0e0d372b6.avif"
          alt="Paris Olympics 2024 events are LIVE"
          className="w-[280px] h-[140px] rounded-lg object-contain flex-shrink-0 "
        />
        <img
          src="/IMAGE_1efb7e68-7c5b-432f-9f2b-19d8e1b28e70.avif"
          alt="Master the art of trading"
          className="w-[280px] h-[140px] rounded-lg object-contain flex-shrink-0 "
        />
        <img
          src="/IMAGE_db74dd4a-0a02-46a0-a229-9d019323a06d.avif"
          alt="50% TDS Rebate up to 2500 INR on Monday"
          className="w-[280px] h-[140px] rounded-lg object-contain flex-shrink-0 "
        />
      </div>
    </div>
  );
}

export default PromoBanner;