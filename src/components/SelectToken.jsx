import React, { useState } from 'react';
import Assets from './Assets';

const SelectToken = ({ onCheckClick, setSelectedToken, setTokenAddress, setChainId, empty, setempty , buttonclick , setButtonclick }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const tokenChainMap = {
    ETH: 1,
    BSC: 56,
    POL: 137,
    Base: 8453,
  };

  const buttonColors = {
    ETH: '#000000',
    BSC: '#CA8A04',
    POL: '#8247E5',
    Base: '#1A54F4',
    SOL: '#300D5A',
  };

  const handleButtonClick = (buttonIndex, token) => {
    setSelectedButton(buttonIndex);
    setSelectedToken(token);
    setChainId(tokenChainMap[token]); // Set the chainId based on the selected token
    setButtonclick(false);
  };

  // const handleInputChange = (e) => {
  //   const inputValue = e.target.value;
  //   const lowercasedValue = selectedButton === 5 ? inputValue : inputValue.toLowerCase(); 
  //   setInputValue(lowercasedValue);
  //   setTokenAddress(lowercasedValue); 
  //   setempty(false);
  // };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTokenAddress(e.target.value); // Update token address
    setempty(false);
  }
    

  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter backdrop-blur-sm w-[250px] sm:w-[460px] mx-auto p-[15px] sm:p-[30px] jost"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <p className="text-white text-[18px] sm:text-[30px] text-center">Evaluate Any Token</p>
      <div className="mt-4 space-y-4">
        <div className="flex justify-center space-x-3">
          {['ETH', 'BSC', 'POL', 'Base', 'SOL'].map((token, index) => (
            <button
              key={token}
              className={` p-2 rounded-md flex justify-center items-center text-sm gap-0 sm:gap-1 w-[50px] sm:w-[72px] h-[36px] ${
                selectedButton === index + 1
                  ? 'text-white  font-normal'
                  : 'border border-white  text-white opacity-60 font-light'
              }`}
              onClick={() => handleButtonClick(index + 1, token)}
              style={{
                backgroundColor:
                  selectedButton === index + 1
                    ? buttonColors[token] // Active button background
                    : 'transparent', // Default background
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = buttonColors[token]) // Hover effect
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor =
                  selectedButton === index + 1
                    ? buttonColors[token] // Keep active color on selected
                    : 'transparent') // Reset color on hover leave
              }
            >
              <img className="h-4 w-auto" src={Assets[token]} alt={token} /><span className=' flex sm:hidden'></span>
            </button>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="bg-white w-full h-10 text-sm sm:text-base sm:h-12 rounded-[5px] text-black p-2 sm:p-4"
          placeholder="Enter token address"
        />
        {empty && (
          <div className="flex justify-center items-center text-red-500">
            Enter Valid Token address
          </div>
        )}
        {buttonclick && (
          <div className="flex justify-center items-center text-red-500">
            Select the chain
          </div>
        )}
        <div className="flex justify-end rounded-[20px] ">
          <button
            onClick={onCheckClick}
            className="bg-[#007AFF] hover:bg-[#007AFF]/70 rounded-[5px] text-white p-2 text-sm sm:text-lg w-[90px] sm:w-[120px] ml-auto border-y border-y-[#86AFFF]"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectToken;
