import { NavLink } from "react-router-dom";

export default function NavLinks({ to, name }) {
  return (
    <li className="list-none cursor-pointer mr-8">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "font-bold text-teal underline decoration-2 underline-offset-4"
            : "font-bold transition-all duration-300 hover:text-teal hover:underline hover:decoration-teal hover:decoration-2 hover:underline-offset-4"
        }
      >
        {name}
      </NavLink>
    </li>
  );
}
