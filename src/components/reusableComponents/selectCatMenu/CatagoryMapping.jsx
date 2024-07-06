import React from 'react'

const CatagoryMapping = ({cataObject, currentSelected, handleChange}) => {

    
  return (<>
      {cataObject.map((value, key) => (
        <label
          key={value.id}
          className={` border border-black cursor-pointer ${key === currentSelected ? 'bg-black text-white' : ''} py-2 px-3 rounded select-none hover:bg-black hover:text-white transition-all duration-300`}
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
  </> )
}

export default CatagoryMapping