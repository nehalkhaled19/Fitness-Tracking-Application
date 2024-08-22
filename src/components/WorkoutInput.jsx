import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from '../Images/img.png'
export default function WorkoutInput() {
const values = []
  let nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // استرجاع البيانات المخزنة مسبقاً من localStorage
    let storedData = JSON.parse(localStorage.getItem('workoutData')) || [];
    // جمع القيم من النموذج
    let values = [];
    for (let i = 0; i < 3; i++) {
        values.push(e.target[i].value);
    }
    // إضافة القيم الجديدة إلى البيانات المخزنة
    storedData.push(values);
    // تخزين البيانات المحدثة في localStorage
    localStorage.setItem('workoutData', JSON.stringify(storedData));
    // التوجيه إلى صفحة Dashboard مع تمرير البيانات الجديدة
    nav(`/dashboard`);
}


  return (
    <div className="bg-gray-50 sm:h-lvh flex align-middle p-6 md:pt-20">
      <form className="p-5 rounded shadow-2xl sm:w-3/6 w-full bg-white m-auto" onSubmit={handleSubmit}>
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl mb-8">Workout Log</h1>
        <img src={img1} className="w-1/3 md:w-1/4 m-auto" alt="hand hold weight" />
        </div>
        <div className="my-4 w-full ">
          <input
            type="text"
            placeholder="Enter exercise type
"
            className="border focus:bottom-0 rounded mb-1  w-full px-2  py-1"
            name="name"
            id="name"
          />
         
        </div>
        <div className="my-4 w-full ">
          <input
          
            type="text"
            placeholder="Enter duration (in minutes)"
            className="border focus:bottom-0 rounded mb-1  w-full px-2  py-1"
            name="name"
            id="name"
          />
         
        </div>
        <div className="my-4 w-full ">
          <input
          
            type="text"
            placeholder="Enter calories burned"
            className="border focus:bottom-0 rounded mb-1  w-full px-2  py-1"
            name="name"
            id="name"
          />
         
        </div>
   <button className="w-full py-3 font-semibold bg-blue-200">Add Workout </button>
      </form>
    </div>
  );
}
