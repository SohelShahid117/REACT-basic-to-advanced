import React from "react";
// import { name } from './../../node_modules/tar/dist/esm/types';
// import { Resolver } from './../../node_modules/lightningcss/node/index.d';

const MemberProfile = ({ name, role, imageLink }) => {
  //   console.log(m);
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 m-5 hover:-translate-y-2 transition-all duration-300 ease-in-out hover:ring-amber-600 hover:ring-4 cursor-pointer">
        {/* https://randomuser.me/photos */}
        <img
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
          //   src="https://randomuser.me/api/portraits/men/71.jpg"
          src={imageLink}
          alt=""
        />
        <h2 className="text-xl font-semibold text-gray-700 text-center">
          Name : {name}
        </h2>
        <p className="text-gray-500 text-center">{role}</p>
      </div>
    </div>
  );
};

export default MemberProfile;
