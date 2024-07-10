import React from 'react';

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-4">
      <div className="col-span-1 md:col-span-3 bg-gray-100 py-4 text-center">
        <h1 className="text-2xl font-bold">Header</h1>
        <p className="text-gray-600">Subtitle</p>
      </div>
      <div className="bg-gray-200 py-4 px-2">
        <ul className="space-y-2">
          <li className="hover:text-blue-600 cursor-pointer">Menu Item 1</li>
          <li className="hover:text-blue-600 cursor-pointer">Menu Item 2</li>
          <li className="hover:text-blue-600 cursor-pointer">Menu Item 3</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 col-span-1 md:col-span-2">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Item 1</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Read More</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Item 2</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Read More</button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Item 3</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Read More</button>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Item 4</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Read More</button>
        </div>
      </div>
      <div className="col-span-1 md:col-span-3 bg-gray-100 py-4 text-center">
        <p className="text-gray-600">Copyright © 2023</p>
      </div>
    </div>
  );
}

export default BentoGrid;