import React from "react";

export default function FormInput({ labelText, labelFor, ...rest }) {
  return (
    <div className="mb-4">
      <label htmlFor={labelFor} className="block text-sm font-semibold">
        {labelText}
      </label>
      <input className="form-input" {...rest} />
    </div>
  );
}
