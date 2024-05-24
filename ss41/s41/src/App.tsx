import React from "react";
import "tailwindcss/tailwind.css";

export default function App() {
  return (
    <div className="p-4">
      <div>
        <h2 className="mb-2"> bt1</h2>
        <h1 className="text-red-500 text-32px">Đây là tiêu đề 1</h1>
      </div>

      <div className="mt-8">
        <h2 className="mb-2">bt2</h2>
        <div className="h-50 w-50 bg-gray-300"></div>
      </div>

      <div className="mt-8">
        <h2 className="mb-2">bt3</h2>
        <div className="flex space-x-4">
          <div className="h-50 w-50 bg-blue-500 rounded-full">hình</div>
          <div className="h-50 w-50 bg-red-500 rounded-full"></div>
          <div className="h-50 w-50 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-2">bt4</h2>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Click me
        </button>
      </div>
    </div>
  );
}
