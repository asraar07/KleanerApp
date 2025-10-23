import React from "react";

const PageHeader = ({ subtitle, title, description, bgImage }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20  shadow-md overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left text-white">
        <p className="text-sm uppercase tracking-wider text-gray-200">
          {subtitle}
        </p>
        <h2 className="text-4xl font-extrabold mt-2">{title}</h2>

        {description && (
          <p className="mt-4 max-w-2xl text-gray-300 text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
