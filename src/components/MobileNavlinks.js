import { NavLink } from "react-router-dom";

export default function MobileNavlinks({ to, name, setToggle }) {
  return (
    <li className="list-none cursor-pointer mr-8">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "font-bold underline decoration-2 underline-offset-4"
            : "font-bold transition-all duration-300  hover:underline hover:decoration-2 hover:underline-offset-4"
        }
        onClick={(prev) => setToggle(!prev)}
      >
        {name}
      </NavLink>
    </li>
  );
}
