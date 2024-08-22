import React from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  
   const workoutDetails = JSON.parse(localStorage.getItem('workoutData')) || [];
  
  return (
    <>
      
      <div className="bg-gray-50 sm:h-lvh flex align-middle p-6 md:pt-20">
      <div className="p-5 rounded shadow-2xl sm:w-5/6 w-full text-center bg-white m-auto">
      <h1 className="font-bold text-3xl mb-8  ">Progress Dashboard</h1>

       
        <table className="w-full text-center main-border">
          <thead>
            <tr className="text-left">
              <th className="main-border text-center py-3 md:text-2xl">Exercise type</th>
              <th className="main-border text-center py-3 md:text-2xl">Duration (m)</th>
              <th className="main-border text-center py-3 md:text-2xl">Calories burned</th>
            </tr>
          </thead>
          <tbody className="">
          {workoutDetails.map((element, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 main-border md:text-xl">{element[0]}</td>
                  <td className="px-6 py-4 main-border md:text-xl">{element[1]}</td>
                  <td className="px-6 py-4 main-border md:text-xl">{element[2]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div></div>
    </>
  );
}
