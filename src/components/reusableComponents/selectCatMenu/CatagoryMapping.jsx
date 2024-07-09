import React from "react";

const CatagoryMapping = ({
  cataObject,
  currentSelected,
  handleChange,
  isMultipleSelecter,
}) => {

  if (!isMultipleSelecter) {
    return (
      <>
        {cataObject.map((value, key) => (
          <label
            key={value.id}
            className={` border border-black cursor-pointer ${
              key === currentSelected ? "bg-black text-white " : ""
            } py-2 px-3 rounded select-none hover:bg-black hover:text-white transition-all duration-300`}
            onContextMenu={(e) => e.preventDefault()}
          >
            {value.name}
            <input
              type="checkbox"
              checked={key === currentSelected}
              onChange={() => handleChange(key)}
              className="hidden"
            />
          </label>
        ))}
      </>
    );
  }

  return (
    <>
      {cataObject.map((value, key) => (
        <label
          key={value.id}
          className={`border border-black cursor-pointer ${
            currentSelected.includes(key)
              ? "bg-black text-white hover:bg-slate-500"
              : ""
          } py-2 px-3 rounded select-none hover:bg-black hover:text-white transition-all duration-300`}
          onContextMenu={(e) => e.preventDefault()}
        >
          {value.name}
          <input
            type="checkbox"
            checked={currentSelected.includes(key)}
            onChange={() => handleChange(key)}
            className="hidden"
          />
        </label>
      ))}
    </>
  );
};

export default CatagoryMapping;
