import React from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/teal.css";
//
const weekDays = ["ش", "ی", "د", "س", "چ", "پ", "ج"];
//
function RangePicker() {
  return (
    <div className="w-full [&_.rmdp-border]:border-0 [&_.rmdp-wrapper]:w-full [&_.rmdp-calendar]:w-full [&_.rmdp-day-picker]:justify-between [&_.rmdp-day]:w-10 [&_.rmdp-day]:h-10">
      <Calendar
        value={[
          new DateObject({ calendar: persian }).toFirstOfWeek(),
          new DateObject({ calendar: persian }).toLastOfWeek(),
        ]}
        weekDays={weekDays}
        calendar={persian}
        locale={persian_fa}
        range
        numberOfMonths={2}
        shadow={false}
        className="teal border-0"
      />
    </div>
  );
}

export default RangePicker;
