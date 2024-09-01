import React from "react";
import { Search, Bell, Settings, Power } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full flex items-center mb-[2rem] rounded-[1.5rem] justify-between p-4 bg-[white] shadow-md  ">
      {/* Left side: User Management */}
      <div className="text-xl font-bold">User Management</div>

      {/* Right side: Icons */}
      <div className="flex items-center w-fit space-x-4">
        {/*  Search bar */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[100%]">
          <Search className="text-gray-500" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent flex-grow outline-none ml-2 text-gray-700"
          />
        </div>

        <div className="bg-gray-300 p-2 rounded-full">
          <Settings className="text-gray-600" size={24} />
        </div>

        <div className="bg-gray-300 p-2 rounded-full">
          <Bell className="text-gray-600" size={24} />
        </div>

        <div className="bg-gray-300 p-2 rounded-full">
          <Power className="text-gray-600" size={24} />
        </div>

        {/* Profile Picture */}
        <div className="h-10 w-10 rounded-full overflow-hidden">
          <Image
            src="/images/secondg.png"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
