import React, { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker({ date, setDate }) {
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="text-base text-white py-2 px-2 rounded-md bg-dark bg-opacity-40 border-1 border-primary"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  return (
    <ReactDatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
}
