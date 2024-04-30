import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.svg";
import Cart from "../public/cart-outline.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={Logo} width={60} />
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-lg font-semibold"></div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
              &#9776;
            </button>
          </div>
          <div
            className={`absolute md:relative w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out px-10 ${
              isOpen ? "top-16" : "top-[-490px]"
            } md:top-0 right-0 md:flex`}
          >
            <ul className="flex flex-col md:flex-row items-center md:space-x-8 text-center ">
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent hover:text-gray-300 hover:underline"
                  onClick={() => setIsOpen(false)}
                  legacyBehavior
                >
                  {/* Add child element */}
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-4 hover:bg-gray-700 md:hover:bg-transparent hover:text-gray-300 hover:underline"
                  onClick={() => setIsOpen(false)}
                  legacyBehavior
                >
                  {/* Add child element */}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Image src={Cart} width={30} />
      </div>
    </nav>
  );
};

export default Navbar;
