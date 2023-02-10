import React from "react";
import { Link } from "react-router-dom";

export default function FormExtra({ info, to, text }) {
  return (
    <p className="mt-8 text-sm text-center text-gray">
      {info}
      <Link to={to} className="font-medium text-base text-teal hover:underline">
        {text}
      </Link>
    </p>
  );
}
