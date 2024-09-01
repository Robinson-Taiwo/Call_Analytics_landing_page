import Image from "next/image";
import React from "react";
import {
  Grid,
  Phone,
  MessageSquare,
  Users,
  Briefcase,
  Calendar,
  Settings,
  Bell,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="max-h-[100vh] bg-[#1c4724] items-center rounded-[1.5rem] flex flex-col w-[6rem] py-4 space-y-6">
      {/* Top Logo */}
      <div className="flex items-center justify-center">
        <div className="bg-white p-2 rounded-full">
          <Image src="/images/image.jpg" alt="Logo" width={32} height={32} />
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="flex flex-col items-center space-y-6 text-white">
        <Grid size={24} />
        <Phone size={24} />
        <MessageSquare size={24} />
        <Users size={24} className="bg-green-500 p-1 rounded-full" />
        <Briefcase size={24} />
        <Calendar size={24} />
        <Settings size={24} />
        <Bell size={24} />
      </div>
    </div>
  );
};

export default Sidebar;
