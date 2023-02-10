import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-teal font-medium text-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              to="/"
              className="leading-6 hover:underline decoration-2 underline-offset-2"
            >
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="about"
              className="leading-6 hover:underline decoration-2 underline-offset-2"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="terms"
              className="leading-6 hover:underline decoration-2 underline-offset-2"
            >
              Terms & Condition
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://fb.me/mozahidulislam01/"
            target="_blank"
            className="hover:text-hummingBird"
            rel="noreferrer"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/mozahidul01"
            target="_blank"
            className="hover:text-hummingBird"
            rel="noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/mozahidul01"
            target="_blank"
            className="hover:text-hummingBird"
            rel="noreferrer"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 Courshare, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
}
