import React from "react";

function Form() {
  return (
    <>
      <form className="bg-ngl_white px-6 py-16 rounded-xl border border-ngl_orange w-4/5 xsm:w-full sm:w-full ">
        <div className="flex flex-col relative mb-6">
          <label
            for="name"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col relative mb-6">
          <label
            for="email"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            placeholder="Enter your email address"
          />
        </div>
        <div className="flex flex-col relative mb-6">
          <label for="mobile" className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5">
          Phone
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            pattern="[0-9]{10}"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            placeholder="Enter your mobile number"
            required
          />
          
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            for="inquiry"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Inquiry
          </label>
          <select
            id="inquiry"
            name="inquiry"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
          >
            <option value="" disabled selected>
              Select your inquiry
            </option>
            <option value="inquiry1">Inquiry 1</option>
            <option value="inquiry2">Inquiry 2</option>
            <option value="inquiry3">Inquiry 3</option>
          </select>
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            for="description"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Describe your Inquiry!
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            placeholder="Describe your Inquiry!"
          ></textarea>
        </div>
        <div className="mb-6">
          <button className="bg-ngl_black text-ngl_white text-base font-medium p-4 rounded-xl">
            <p>Submit your message</p>
          </button>
        </div>
        <div>
          <p className="text-sm text-ngl_gray_3 font-regular ">Neocon ipsum dolor sit amet consectetur. Dui amet tempor faucibus condimentum non viverra consequat sit. Diam sed nec egestas ut morbi rhoncus sed nec egestas ut morbi <strong className="underline text-ngl_black"> Privacy Policy</strong>.</p>
        </div>
      </form>
    </>
  );
}

export default Form;
