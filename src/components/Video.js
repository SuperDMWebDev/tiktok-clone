import React from 'react';
import { FaMusic } from 'react-icons/fa';

const videoInfo = () => {
  return (
    <div className="flex">
      <img
        className="w-[50px] h-[50px] rounded-full"
        src="https://cdn.devdojo.com/users/April2021/tnylea.jpg"
        alt="avatar"
      />
      <div className="ml-3 min-w-[80%]">
        <div>
          <a href="#" className="text-xl font-bold hover:underline">
            Minh
          </a>
          <a href="#" className="text-xl">
            Web development
          </a>
        </div>
        <div>Video for fun</div>
        <div className="flex flex-row items-center">
          <FaMusic />
          <span className="ml-3">bai hat dang phat</span>
        </div>
      </div>
      <div>
        <button className="p-2 pl-2 pr-2 border-2 border-red-300">
          Follow
        </button>
      </div>
    </div>
  );
};
const videoContent = () => {
  return <div></div>;
};
export default function Video() {
  return (
    <div className="max-w-[500px]">
      {videoInfo()}
      {videoContent()}
    </div>
  );
}
