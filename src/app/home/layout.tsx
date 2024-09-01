import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Call Analytics Dashboard",
  description: "Landing Page for call analytics dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-[#ededed] flex-row gap-[1rem] h-screen px-[1.5rem] pt-[1rem] overflow-hidden">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Children Content with Scroll */}
            <div className="flex-1 overflow-y-auto rounded-[1.5rem] bg-[white] p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
