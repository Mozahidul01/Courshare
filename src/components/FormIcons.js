import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";

export default function FormIcons() {
  return (
    <div className="flex mt-4 gap-x-2">
      <button type="button" className="icon-btn">
        <FaGoogle className="w-5 h-5" />
      </button>
      <button className="icon-btn">
        <FaFacebookF className="w-5 h-5" />
      </button>
      <button className="icon-btn">
        <FaGithub className="w-5 h-5" />
      </button>
    </div>
  );
}
