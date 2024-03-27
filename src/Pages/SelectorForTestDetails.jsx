import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = () => {
  const [countries, setyear] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => {
        setyear(data);
      });
  }, []);
  return (
    <div className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800 " >
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full flex items-center justify-between rounded ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Module Name"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul className={`bg-white mt-4 overflow-y-auto absolute z-10 ${
        open ? "max-h-60 transition-max-height duration-300 ease-in-out border border-gray-400 rounded-sm" : "max-h-0 transition-max-height duration-300 ease-in-out border-none"
      }`}>



        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter Module Name "
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((Year) => (
          <li
            key={Year?.name}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-sky
            ${
                Year?.name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-sky"
            }
            ${
                Year?.name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (Year?.name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(Year?.name);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {Year?.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;