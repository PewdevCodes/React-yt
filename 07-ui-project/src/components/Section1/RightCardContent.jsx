import React from 'react';

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center text-black">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-xl leading-relaxed text-white mb-14 drop-shadow-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          accusamus cupiditate voluptatibus mollitia alias tempora.
        </p>
        <div className="flex justify-between items-center">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium px-8 py-2.5 rounded-full"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-medium h-10 w-10 rounded-full flex items-center justify-center"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
