import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <>
      <div>
        <div className="pt-20">
          <div className="w-full">
            <div className="grid grid-rows-3 grid-flow-col gap-4 w-full">
              <div className="row-span-2">
                <p className="text-41xl xsm:text-3xl sm:text-3xl font-semibold text-ngl_black">
                  Build Better Communication For Better{" "}
                  <span className="text-ngl_orange "> Business</span>
                </p>
              </div>
              <div className="  ">02</div>
              <div className="row-span-3 ">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
