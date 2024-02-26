import React from "react";

const Footer = () => {
  return (
    <section className="">
      <div className="container mx-auto py-9 px-4 md:px-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">
              <a href="#Hero">AN.</a>
            </h1>
          </div>
          <div className="flex items-center space-x-5">
            <p className="text-gray-300">
              Built by{" "}
              <b>
                <a href="https://github.com/Anchit-Nayak" className="text-white font-bold">
                  Anchit Nayak
                </a>
              </b>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
