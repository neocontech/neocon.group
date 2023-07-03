import React from "react";
import Link from "next/link";
import Image from "next/image";
import footerlogo from "../../public/footerlogo.png";
import tech from "../../public/assets/footer/tech.png";
import get from "../../public/assets/footer/gate.png";
import ino from "../../public/assets/footer/ino.png";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <div className="bg-ngl_black">
      <div className="px-10 xsm:px-5 sm:px-5">
        <div className="flex justify-between py-5 ">
          <div>
            <Link href="/">
              <Image
                src={footerlogo}
                alt="footer logo png"
                className="w-44 xsm:w-32 sm:w-32  h-auto"
              />
            </Link>
          </div>
          <div className="my-auto flex flex-row text-ngl_white">
            <Link href="/" className="mx-2">
              <FaInstagram className="w-6 xsm:w-4 sm:w-4 h-auto" />
            </Link>
            <Link href="/" className="mx-2">
              <FaLinkedin className="w-6 xsm:w-4 sm:w-4 h-auto" />
            </Link>
            <Link href="/" className="mx-2">
              <FaFacebookSquare className="w-6 xsm:w-4 sm:w-4 h-auto" />
            </Link>
            <Link href="/" className="mx-2">
              <FaTwitter className="w-6 xsm:w-4 sm:w-4 h-auto" />
            </Link>
            {/*  */}
          </div>
        </div>
        <div className="pt-5 pb-10 border-t border-b border-ngl_gray_2/30 border-dashed">
          <div className="grid grid-cols-3 xsm:grid-cols-1 sm:grid-cols-1 gap-20 xsm:gap-2 sm:gap-2">
            <div>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-ngl_white pb-3">
                  Comapny
                </p>
                <div className="flex flex-col text-base font-regular text-ngl_white">
                  <p className="pb-1">About Us</p>
                  <p className="pb-1">Contact Us</p>
                  <p className="pb-1">News Room</p>
                  <p className="pb-1">Faqs</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-ngl_white pb-3">
                  Concerns
                </p>
                <div className="grid grid-cols-2 xsm:grid-cols-1 sm:grid-cols-1 gap-4">
                  <Image
                    src={ino}
                    alt="company logo png"
                    className="w-auto xsm:w-40 sm:w-40 h-auto"
                  />
                  <Image
                    src={get}
                    alt="company logo png"
                    className="w-auto xsm:w-40 sm:w-40 h-auto"
                  />
                  <Image
                    src={tech}
                    alt="company logo png"
                    className="w-auto xsm:w-40 sm:w-40 h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="xsm:col-span-2 sm:col-span-2">
              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-ngl_white pb-3">
                  Address
                </p>
                <div className="flex flex-col text-base font-regular text-ngl_white">
                  <div className="flex flex-row  pb-1">
                    <div className="my-auto w-5">
                      <BiSolidPhoneCall />
                    </div>

                    <p className="pl-2">+880 9638 232323</p>
                  </div>
                  <div className="flex flex-row  pb-1">
                    <div className="my-auto w-5">
                      <IoMdMail />
                    </div>
                    <p className="pl-2">hello@neocon.tech</p>
                  </div>
                  <div className="flex flex-row  pb-1">
                    <div className="mt-1 w-5">
                      <ImLocation />
                    </div>
                    <p className="pl-2">
                      Land View Commercial Center (Level 3), 28.Gulshan North
                      C/A, Gulshan 2, Dhaka 1212Bangladesh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row xsm:flex-col-reverse sm:flex-col-reverse justify-between pt-5">
          <p className="text-base font-regular text-ngl_gray_2 ">
            © Copyright 2023 <span className="text-ngl_orange"> NEOCON</span>{" "}
            All rights reserved
          </p>
          <div className="text-base font-regular text-ngl_gray_2 flex flex-row xsm:pb-3 sm:pb-3">
            <p>Privacy Policy</p>
            <p className="mx-5">Terms & Condition</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
