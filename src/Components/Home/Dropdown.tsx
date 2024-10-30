"use client";
import { useState } from "react";

export const Dropdown = () => {
  const drpDwn = [
    { title: "Invest" },
    { title: "Fundraise" },
    { title: "Professional help" },
  ];

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(drpDwn[0].title); // Initially "Invest"

  const handleSelect = (title: string) => {
    setSelectedItem(title);
    setOpen(false); // Close dropdown after selection
  };

  return (
    <div>
      <div className="relative inline-flex">
        <button
          onClick={() => setOpen(!open)}
          id="dropdown-toggle"
          type="button"
          className="gap-x-3.5 py-2 px-3 min-w-[360px] flex items-center justify-center text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none !text-2xl"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Dropdown"
        >
          {selectedItem} {/* Display selected item */}
          <svg
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {open && (
          <div
            className="absolute mt-2 min-w-[360px] bg-white shadow-md rounded-lg z-10"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-toggle"
          >
            <div className="">
              {drpDwn.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-2xl text-gray-800 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(item.title)}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
