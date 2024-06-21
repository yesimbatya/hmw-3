import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center py-4 px-[30px]">
      <div className="text-2xl font-bold">Morty Medium</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded"
        />
        <button className="text-blue-500">Become a patreon</button>
      </div>
    </div>
  );
}
