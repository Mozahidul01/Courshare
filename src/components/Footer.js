import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-white/50">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              to="/"
              className="text-base leading-6 text-gray-500 hover:text-teal"
            >
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="about"
              className="text-base leading-6 text-gray-500 hover:text-teal"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              to="terms"
              className="text-base leading-6 text-gray-500 hover:text-teal"
            >
              Terms & Condition
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://fb.me/mozahidulislam01/"
            target="_blank"
            className="text-blue-600 hover:text-gray"
            rel="noreferrer"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com/mozahidul01"
            target="_blank"
            className="text-pink-500 hover:text-gray"
            rel="noreferrer"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/mozahidul01"
            target="_blank"
            className="text-gray-900 hover:text-gray"
            rel="noreferrer"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkdin.com/in/mozahidul01"
            target="_blank"
            className="text-blue-700 hover:text-gray"
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
