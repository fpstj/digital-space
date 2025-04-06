import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact: React.FC = () => {
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [messageError, setMessageError] = useState<string | null>(null);
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset error messages
    setNameError(null);
    setEmailError(null);
    setMessageError(null);

    let isValid = true;

    // Validate Name
    if (!formData.name) {
      setNameError("Name is required.");
      isValid = false;
    } else if (/[^a-zA-Z\s]/.test(formData.name)) {
      setNameError("Name must contain only letters.");
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

    // Validate Message
    if (!formData.message) {
      setMessageError("Message cannot be empty.");
      isValid = false;
    }

    // If the form is valid, handle the form submission (e.g., send email)
    if (!isValid) return;

    try {
      const result = await emailjs.send(
        "service_wiztl2n",
        "template_e5bewxr",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        "CpvU8edlEliPWLPPY"
      );

      console.log("Email successfully sent!", result.text);
      alert("Your message was sent successfully!");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    console.log("Opening link:", url);
  };

  return (
    <div className="relative h-screen w-full p-0 m-0">
      <div className="flex flex-col items-start justify-center h-screen px-8 sm:px-16 md:px-32 lg:px-50">
        <h1
          className="font-bold text-5xl sm:text-4xl md:text-6xl lg:text-7xl text-stone-50 mb-4"
          style={{ fontFamily: '"Montserrat", sans-serif' }}
        >
          Contact me
        </h1>

        <p
          className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 mb- leading-relaxed"
          style={{ fontFamily: '"DM Serif Text", serif' }}
        >
          I'd love to hear from you! Please fill out the form below.
        </p>

        <form className="w-full md:w-2xl" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder={nameFocused ? "" : "Your Name"}
              className="px-6 py-2 border text-stone-50 border-stone-50 bg-transparent rounded-sm"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              required
            />
            {nameError && (
              <span className="text-red-500 text-sm">{nameError}</span>
            )}
            <input
              type="email"
              name="email"
              placeholder={emailFocused ? "" : "Your Email"}
              className="px-6 py-2 border text-stone-50 border-stone-50 bg-transparent rounded-sm"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required
            />
            {emailError && (
              <span className="text-red-500 text-sm">{emailError}</span>
            )}
            <textarea
              name="message"
              placeholder={messageFocused ? "" : "Your Message"}
              className="px-6 py-2 border text-stone-50 border-stone-50 bg-transparent rounded-sm"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              required
            />
            {messageError && (
              <span className="text-red-500 text-sm">{messageError}</span>
            )}
            <button
              type="submit"
              className="px-6 py-2 border text-stone-50 border-stone-50 bg-transparent hover:bg-pink-600 active:bg-pink-600 hover:border-transparent active:border-transparent transition duration-300 rounded-sm"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="flex flex-row gap-4 mt-10">
          <div
            className="flex justify-center w-[2.5rem] h-[2.5rem] p-2 items-center rounded-sm bg-transparent hover:bg-pink-600 active:bg-pink-600 transition cursor-pointer"
            onClick={() => openLink("https://www.linkedin.com/in/fpstj/")}
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin-in"]}
              className="text-stone-50 fa-xl"
            />
          </div>
          <div
            className="flex justify-center w-[2.5rem] h-[2.5rem] p-2 items-center rounded-sm bg-transparent hover:bg-pink-600 active:bg-pink-600 transition cursor-pointer"
            onClick={() => openLink("https://www.github.com/fpstj")}
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="text-stone-50 fa-xl"
            />
          </div>
          <div
            className="flex justify-center w-[2.5rem] h-[2.5rem] p-2 items-center rounded-sm bg-transparent hover:bg-pink-600 active:bg-pink-600 transition cursor-pointer"
            onClick={() => openLink("https://www.stackoverflow.com/")}
          >
            <FontAwesomeIcon
              icon={["fab", "stack-overflow"]}
              className="text-stone-50 fa-xl"
            />
          </div>
          <div
            className="flex justify-center w-[2.5rem] h-[2.5rem] p-2 items-center rounded-sm bg-transparent hover:bg-pink-600 active:bg-pink-600 transition cursor-pointer"
            onClick={() => openLink("https://www.dev.to/")}
          >
            <FontAwesomeIcon
              icon={["fab", "dev"]}
              className="text-stone-50 fa-xl"
            />
          </div>
          <div
            className="flex justify-center w-[2.5rem] h-[2.5rem] p-2 items-center rounded-sm bg-transparent hover:bg-pink-600 active:bg-pink-600 transition cursor-pointer"
            onClick={() => openLink("https://www.medium.com/")}
          >
            <FontAwesomeIcon
              icon={["fab", "medium"]}
              className="text-stone-50 fa-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
