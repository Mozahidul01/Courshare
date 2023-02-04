import React from "react";

export default function FormInput({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired,
  placeholder,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={labelFor} className="block text-sm font-semibold">
        {labelText}
      </label>
      <input
        id={id}
        value={value}
        name={name}
        type={type}
        required={isRequired}
        className="form-input"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
