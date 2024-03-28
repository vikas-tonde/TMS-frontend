import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ modulesProps, setSelected, selected }) => {
  const [modules, setModules] = useState(modulesProps);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow appearance-none block bg-white rounded-md w-96 h-9 py-2 px-3 ring-1 ring-inset ring-gray-400 focus:text-gray-800 " >
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full flex items-center justify-between rounded ${!selected && "text-gray-700"
          }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Module Name"}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul className={`bg-white mt-4 overflow-y-auto absolute z-10 ${open ? "max-h-60 transition-max-height duration-300 ease-in-out border border-gray-400 rounded-sm" : "max-h-0 transition-max-height duration-300 ease-in-out border-none"
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
        {modules?.map((module) => (
          <li
            key={module}
            className={`p-2 text-sm hover:bg-sky-600 hover:text-sky
            ${module.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-sky"
              }
            ${module.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
              }`}
            onClick={() => {
              if (module.toLowerCase() !== selected.toLowerCase()) {
                setSelected(module);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {module}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;