import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import Form from "./Form";
import Map from "./Map";

function Contact() {
  return (
    <>
      <div>
        <div className="pt-20">
          <div>
            <div className="grid grid-rows-3 xsm:grid-rows-none xsm:grid-cols-1 xsm:grid-flow-row sm:grid-rows-none sm:grid-cols-1 sm:grid-flow-row grid-flow-col gap-4 w-full">
              <div className="row-span-2 xsm:row-span-1 xsm:col-span-1 sm:row-span-1 sm:col-span-1 col-span-2">
                <p className="text-41xl xsm:text-3xl sm:text-3xl font-semibold text-ngl_black w-3/5 xsm:w-full sm:w-full">
                  Build better communication for better
                  <span className="text-ngl_orange "> Business</span>
                </p>
              </div>
              <div>
                <div className="pb-2">
                  <p className="text-ngl_black text-lg font-semibold">
                    Phone Call
                  </p>
                  <div className="flex flex-row text-lg font-semibold">
                    <BiSolidPhoneCall className="my-auto text-ngl_orange" />
                    <p className="text-ngl_black pl-2">+880 9638-232323</p>
                  </div>
                </div>
                <div className="pb-2">
                  <p className="text-ngl_black text-lg font-semibold">Email</p>
                  <p className="text-sm font-regular text-ngl_orange cursor-pointer underline">
                    hello@neoconinnovations.com
                  </p>
                </div>
                <div>
                  <p className="text-ngl_black text-lg font-semibold">
                    Address
                  </p>
                  <p className="text-ngl_gray_3 text-sm font-regular ">
                    Land View Commercial Center (Level 3), 28.{" "}
                    <br className="block xsm:hidden sm:hidden" />
                    Gulshan North C/A, Gulshan 2. Dhaka 1212
                  </p>
                </div>
              </div>
              <div className="row-span-3  xsm:row-span-1 sm:row-span-1">
                <Form />
              </div>
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
