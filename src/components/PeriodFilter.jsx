import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import PeriodContainer from "./PeriodContainer";

const PeriodFilter = ({ period, setPeriod }) => {
  const [isToggleOpen, setIstoggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIstoggleOpen((prev) => !prev);
  };

  return (
    <div className="bg-transparent" onClick={handleToggleOpen}>
      {!isToggleOpen ? (
        <div className="flex items-center gap-5">
          <div>
            {period} {period > 1 ? "days" : "day"}
          </div>
          <FaAngleDown />
        </div>
      ) : (
        <div className="flex items-center gap-5 relative">
          <div>
            {period} {period > 1 ? "days" : "day"}
          </div>
          <PeriodContainer period={period} setPeriod={setPeriod} />
          <FaAngleUp />
        </div>
      )}
    </div>
  );
};

export default PeriodFilter;
