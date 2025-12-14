import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-18 py-8">
      <h4 className="text-white bg-black px-6 py-2.5 uppercase rounded-full text-sm font-medium tracking-wide">
        Target Audience
      </h4>
      <button className="bg-gray-200 px-6 py-2.5 uppercase rounded-full tracking-wide text-sm font-medium text-black hover:bg-gray-300 transition-colors">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
