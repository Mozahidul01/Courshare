import { RouterProvider } from "react-router-dom";
import { router } from "./Layouts/routes";

export default function App() {
  return (
    <div className="font-Poppins bg-solitude">
      <RouterProvider router={router} />
    </div>
  );
}
