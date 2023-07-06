import React, { useEffect, useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // console.log("Submitting form data...");

    try {
      const requestData = { name, email, phoneNumber, inquiry, reason };
      // console.log("Form Data:", requestData);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/store`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (response.ok) {
        setSubmissionMessage("Form submitted successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setPhoneNumber("");
        setInquiry("");
        setReason("");
      } else {
        setSubmissionMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      setSubmissionMessage("An error occurred. Please try again.");
    }

    setSubmitting(false);
  };

  return (
    <>
      <form className="bg-ngl_white px-6 py-16 rounded-xl border border-ngl_orange w-full xsm:w-full sm:w-full ">
        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="name"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            placeholder="Enter your Full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="email"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            placeholder="Enter your Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="mobile"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Phone
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            pattern="[0-9]{10}"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            placeholder="Enter your Mobile number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="inquiry"
            className="text-xsm font-medium text-ngl_orange z-10 absolute top-0 -mt-2.5 bg-ngl_white ml-5"
          >
            Inquiry
          </label>

          <select
            id="inquiry"
            name="inquiry"
            className="px-4 py-2 border border-ngl_gray rounded-xl focus:outline-none text-sm"
            value={inquiry}
            onChange={(e) => setInquiry(e.target.value)}
          >
            <option value="" disabled>
              Select your inquiry
            </option>
            <option value="ksl">Kabir Securities Limited</option>
            <option value="technologies">Neocon Technologies Limited</option>
            <option value="innovations">Neocon Innovations Limited</option>
            <option value="gateway">Neocon Gateway Limited</option>
          </select>
        </div>

        <div className="flex flex-col relative mb-6">
          <label
            htmlFor="description"
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
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-6 text-center">
          <button
            className="bg-ngl_black text-ngl_white text-base font-medium p-4 rounded-xl "
            onClick={handleSubmit}
            disabled={submitting}
          >
            <p>{submitting ? "Submitting..." : "Submit your message"}</p>
          </button>
        </div>
        {/*  */}
        {submissionMessage && (
          <div
            className={
              submissionMessage.includes("error")
                ? "text-ngl_white bg-ngl_orange rounded-3xl p-4 text-center"
                : "text-ngl_white bg-ngl_black rounded-3xl p-4 text-center"
            }
          >
            {submissionMessage}
          </div>
        )}
      </form>
    </>
  );
}

export default Form;

{
  /* <div>
          <p className="text-sm text-ngl_gray_3 font-regular ">
            Neocon ipsum dolor sit amet consectetur. Dui amet tempor faucibus
            condimentum non viverra consequat sit. Diam sed nec egestas ut morbi
            rhoncus sed nec egestas ut morbi{" "}
            <strong className="underline text-ngl_black">
              {" "}
              Privacy Policy
            </strong>
            .
          </p>
        </div> */
}

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [phoneNumber, setPhoneNumber] = useState("");
// const [inquiry, setInquiry] = useState("");
// const [reason, setReason] = useState("");
// const [submitting, setSubmitting] = useState(false);
// const [submissionMessage, setSubmissionMessage] = useState("");

// useEffect(() => {
//   // Fetch CSRF token when the component mounts
//   fetchCsrfToken();
// }, []);

// const fetchCsrfToken = async () => {
//   try {
//     await axios.get(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`
//     );
//   } catch (error) {
//     console.log("Failed to fetch CSRF token:", error);
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setSubmitting(true);
//   console.log("Submitting form data...");
//   try {
//     const requestData = { name, email, phoneNumber, inquiry, reason };
//     console.log("Form Data:", requestData);

//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact/store`,
//       requestData
//     );

//     if (response.status === 200) {
//       setSubmissionMessage("Form submitted successfully!");
//       // Reset form fields
//       setName("");
//       setEmail("");
//       setPhoneNumber("");
//       setInquiry("");
//       setReason("");
//     } else {
//       setSubmissionMessage("An error occurred. Please try again.");
//     }
//   } catch (error) {
//     setSubmissionMessage("An error occurred. Please try again.");
//   }

//   setSubmitting(false);
// };
