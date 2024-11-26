"use client"; // บอกให้ Next.js รู้ว่านี่คือ Client Component
import React, { useRef } from 'react';

const ReviewsSection = () => {
  const scrollContainer = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    const container = scrollContainer.current;
    container.scrollLeft -= e.movementX;
  };

  const enableDrag = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', disableDrag);
  };

  const disableDrag = () => {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', disableDrag);
  };

  return (
    <div className="w-4/5 mx-auto text-center my-6">
      {/* Section Reviews */}
      <section className="mb-12">
        <h5 className="text-lg font-bold mb-2 text-left text-gray-600">Clients Reviews</h5>
        <h2 className="text-4xl font-bold mb-6 text-left text-gray-900">What They Say</h2>

        <div
          ref={scrollContainer}
          onMouseDown={enableDrag}
          className="flex overflow-x-auto gap-6 scrollbar-hide cursor-grab"
        >
          {/* Review Cards */}
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="p-6 border border-gray-300 rounded-md shadow-md bg-white w-full sm:w-72 md:w-80 lg:w-96 xl:w-1/4 flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/48"
                  alt="Reviewer"
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">Reviewer Name {item}</h3>
                  <p className="text-sm text-gray-500">Position {item}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                This is an example review text. It can be customized for each reviewer.
              </p>

              {/* Star Ratings */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-5 h-5 ${i < item ? 'text-yellow-500' : 'text-gray-300'}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.342 7.222h7.617c.969 0 1.371 1.24.588 1.81l-6.168 4.48 2.342 7.222c.3.921-.755 1.688-1.54 1.11l-6.168-4.48-6.168 4.48c-.785.578-1.84-.189-1.54-1.11l2.342-7.222-6.168-4.48c-.783-.57-.38-1.81.588-1.81h7.617l2.342-7.222z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </section>
    </div>
  );
};

export default ReviewsSection;
