import React from "react";
import Factor from "./Factor";
import RangePicker from "../../shared/SelectDate";

function RoomReservation() {
  return (
    <div className="grid grid-cols-2 gap-16 my-10">
      <Factor />
      <div className="space-y-4">
        <div className="text-xl">هفت شب در استان مازندران</div>
        <div className="font-light text-gray-500">از 1402/1/2 تا 1402/1/9</div>
        <RangePicker />
      </div>
    </div>
  );
}

export default RoomReservation;
