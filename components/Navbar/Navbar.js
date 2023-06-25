import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiCircle, FiMenu, FiX } from "react-icons/fi";
import {HiMenuAlt3} from "react-icons/hi"
import NeoconGroup from "../../public/neocon-group.png";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="fixed z-50 w-full bg-white backdrop-blur-lg ">
        <div className="px-10">
          <div className="py-5">
            <div className="flex justify-between">
              <Link href="/" className="cursor-pointer">
                <Image
                  src={NeoconGroup}
                  alt="neocon group.png"
                  className="w-44  h-auto"
                />
              </Link>
              <div className="flex flex-row my-auto">
                <div className="flex md:hidden">
                  {isMobileMenuOpen ? (
                    <FiX
                      className="my-auto text-2xl text-ngl_black"
                      onClick={toggleMobileMenu}
                    />
                  ) : (
                    <HiMenuAlt3
                      className="my-auto text-2xl text-black"
                      onClick={toggleMobileMenu}
                    />
                  )}
                </div>
                <div className="hidden md:flex flex-row my-auto">
                  <Link href="/comapny" className="flex flex-row mx-5">
                    <FiCircle className="my-auto text-xs text-ngl_orange" />
                    <p className="pl-2 font-medium">Company</p>
                  </Link>
                  <Link href="/business" className="flex flex-row mx-5">
                    <FiCircle className="my-auto text-xs text-ngl_orange" />
                    <p className="pl-2 font-medium">Our Business</p>
                  </Link>
                  <Link href="/news" className="flex flex-row mx-5">
                    <FiCircle className="my-auto text-xs text-ngl_orange" />
                    <p className="pl-2 font-medium">News Room</p>
                  </Link>
                  <Link href="/contact" className="flex flex-row mx-5">
                    <FiCircle className="my-auto text-xs text-ngl_orange" />
                    <p className="pl-2 font-medium">Contact Us</p>
                  </Link>
                </div>
              </div>
            </div>
            {isMobileMenuOpen && (
              <div className="md:hidden">
                <Link href="/comapny" className="block my-3 mx-5">
                  <p className="font-medium">Company</p>
                </Link>
                <Link href="/business" className="block my-3 mx-5">
                  <p className="font-medium">Our Business</p>
                </Link>
                <Link href="/news" className="block my-3 mx-5">
                  <p className="font-medium">News Room</p>
                </Link>
                <Link href="/contact" className="block my-3 mx-5">
                  <p className="font-medium">Contact Us</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
