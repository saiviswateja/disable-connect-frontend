import React from "react";

const Dashboard = () => {
  return (
    <div className="px-[10%] py-[15%] flex justify-between items-center">
      <div className="flex flex-col">
        <select>
          <option>Select Food</option>
          <option>Milk</option>
          <option>Butter</option>
          <option>Egg</option>
        </select>
      </div>
      <div className="flex flex-col">
        <div className="w-[300px] h-[300px] border border-orange-400 rounded-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-black">3000</h1>
          <span className="text-xl font-bold text-orange-400">Calories</span>
        </div>
      </div>
      <div className="flex flex-col">
        <select>
          <option>Select Exercise</option>
          <option>Cycle</option>
          <option>Swim</option>
          <option>Run</option>
        </select>
      </div>
    </div>
  );
};

export default Dashboard;
