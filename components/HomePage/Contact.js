import React from "react";
import Link from "next/link";
import { BiSquareRounded } from "react-icons/bi";
import { FaPaperPlane } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="px-10 2xl:px-80 xsm:px-5 sm:px-5">
        <div className="py-20">
          <div className="flex flex-row">
            <div className="w-5 block xsm:hidden sm:hidden">
              <BiSquareRounded size={20} className="text-ngl_orange mt-7 " />
            </div>

            <div className="w-full">
              <div className="px-5">
                <p className="text-text_51 text-ngl_black font-semibold xsm:text-32xl sm:text-32xl">
                  Contact With Us
                </p>
              </div>

              <div className="bg-ngl_white rounded-xl p-6 flex justify-between xsm:flex-col sm:flex-col w-full">
                <p className="text-40xl font-semibold text-ngl_black xsm:leading-tight sm:leading-tight xsm:pb-3 sm:pb-3">
                  Let’s Build Your
                  <span className="text-ngl_orange "> Future</span> with us.
                </p>
                <div className="my-auto">
                  <Link href="/contact-us">
                    <button className="flex flex-row bg-ngl_black py-3 px-10 rounded-xl xsm:mx-auto sm:mx-auto">
                      <p className="text-base font-regular text-ngl_white">
                        Contact With Us
                      </p>
                      <FaPaperPlane className="my-auto text-ngl_white pl-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
