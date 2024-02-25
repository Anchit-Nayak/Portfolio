import React from "react";

const Navbar = () => {
  return (
    <section className="flex justify-center w-screen absolute top-0 left-0 z-50">
      <div className="flex items-center justify-between w-full py-4 px-6 lg:px-52">
        <div className="flex items-center gap-8">
          <h1 className="text-3xl font-bold mr-9">AN.</h1>
          <ul className="hidden md:flex gap-8">
            <li className="cursor-pointer hover:text-gray-500 transition-transform duration-100 transform hover:scale-110">
              <a href="#About">About</a>
            </li>
            <li className="cursor-pointer  hover:text-gray-500 transition-transform duration-100 transform hover:scale-110">
              <a href="#Works">Projects</a>
            </li>
            <li className="cursor-pointer hover:text-gray-500 transition-transform duration-100 transform hover:scale-110">
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>



        <div className="flex items-center gap-8">
          <a
            href=""
            target="_blank"
            className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-100 hover:text-gray-900 transition-transform duration-500 transform"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
