    import React from "react";
import { useNavigate } from "react-router-dom";

export default function Goals() {
  let nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    // استرجاع البيانات المخزنة مسبقاً من localStorage
    let goalsData = JSON.parse(localStorage.getItem('goalsData')) || [];
    // جمع القيم من النموذج
    let values = [];
    for (let i = 0; i < 3; i++) {
        values.push(e.target[i].value);
    }
    // إضافة القيم الجديدة إلى البيانات المخزنة
    goalsData.push(values);
    // تخزين البيانات المحدثة في localStorage
    localStorage.setItem('goalsData', JSON.stringify(goalsData));
    // التوجيه إلى صفحة Dashboard مع تمرير البيانات الجديدة
    nav(`/goalsDashboard`);
}
  return (
    <div className="bg-gray-50 sm:h-lvh flex align-middle p-6 md:pt-20">
      <form
        className="p-5 rounded shadow-2xl sm:w-3/6 w-full bg-white m-auto"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl mb-8">Goals</h1>
        </div>
        <div className="my-4 w-full ">
          <input
            type="text"
            placeholder="Enter your goal"
            className="border focus:bottom-0 rounded mb-1  w-full px-2  py-1"
            name="name"
            id="name"
          />
        </div>
        <div className="my-4 w-full ">
          <input
            type="text"
            placeholder="Enter duration"
            className="border focus:bottom-0 rounded mb-1  w-full px-2  py-1"
            name="name"
            id="name"
          />
        </div>
        <div className="my-4 w-full "></div>
        <button className="w-full py-3 font-semibold bg-blue-200">
          Add your goal
        </button>
      </form>
     
    </div>
  );
}
