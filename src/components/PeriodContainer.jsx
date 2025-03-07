import React from "react";

const PeriodContainer = ({ setPeriod }) => {
  const days = [1, 7, 30];

  return (
    <ul className="w-32 bg-gray-100 absolute -bottom-32 text-center shadow-md rounded-lg">
      {days.map((day) => (
        <li
          key={day}
          className="cursor-pointer px-4 py-2 hover:bg-blue-800 hover:text-white transition duration-200"
          onClick={() => setPeriod(day)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setPeriod(day)}
        >
          {day} {day > 1 ? "days" : "day"}
        </li>
      ))}
    </ul>
  );
};

export default PeriodContainer;
