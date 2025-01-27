import { useState } from 'react'
import { QRCodeCanvas } from "qrcode.react";
import { FaWhatsapp, FaInstagram,  FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




function TicketGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    contact: "",
    department: "",
    section: "",
    Name: "",
    faContact: "",
    question: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleNextStep = () => {
    if (step === 1) setStep(2);
  };

  const handleDownload = () => {
    setStep(3);
  };

  return (
    <div className=" min-h-screen  bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Navigation Steps */}
      <div className="flex space-x-55 mb-6 text-m text-gray-400">
        <span className={step === 1 ? "text-green-500" : ""}>Register</span>
        
        <span className={step === 2 ? "text-green-500" : ""}>Fill Personal Details</span>
        
        <span className={step === 3 ? "text-green-500" : ""}>Download Ticket</span>
  
      </div>

      {step === 1 && (
  <div className="w-full max-w-2xl bg-black p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold mb-6">Enter the Basic Details</h2>
    <form className="space-y-6">
      <div className="grid grid-cols-2 gap-5 ">
        <input
          type="email"
          name="email"
          placeholder="SRM Mail ID"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full  bg-black border border-white p-3 rounded-md text-white"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="w-full bg-black border border-white p-3 space-x-2  rounded-md text-white"
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleInputChange}
          className="w-full bg-black border border-white mt-4 p-3 rounded-md text-white"
        />
        <input
          type="text"
          name="section"
          placeholder="Section"
          value={formData.section}
          onChange={handleInputChange}
          className="w-full bg-black border border-white mt-4 p-3 rounded-md text-white"
        />
        <input
          type="text"
          name="Name"
          placeholder="Name"
          value={formData.Name}
          onChange={handleInputChange}
          className="w-full bg-black border border-white p-3 mt-4 rounded-md text-white"
        />
        <input
          type="text"
          name="faContact"
          placeholder="FA Contact No"
          value={formData.faContact}
          onChange={handleInputChange}
          className="w-full bg-black border border-white mt-4 p-3 rounded-md text-white"
        />
      </div>
      <textarea
        name="question"
        placeholder="Any questions for the speaker?"
        value={formData.question}
        onChange={handleInputChange}
        className="w-full bg-black border border-white p-3 rounded-md text-white"
      ></textarea>
    </form>
    <button
      onClick={handleNextStep}
      className="w-50 mt-6 bg-[#054234] py-2 ml-55 rounded-md hover:bg-green-700"
    >
      Generate Ticket
    </button>
  </div>
)}

      {/* Step 2: Ticket Preview */}
      {step === 2 && (
        
  <div className="w-full max-w-3xl p-6 rounded-lg shadow-lg text-center mt-10 bg-[#054234] text-white " >
    <h2 className=" text-3xl font-semibold mb-7">Ticket</h2>
    <div className="flex items-center justify-between">
      {/* Ticket Details */}
      <div className="flex-1 text-left ">
        <p className="text-2xl font-semibold mb-2 ">Event Name</p>
        <hr className="border-l border-gray-500" />
        <br />
        <p>Name: {formData.Name || "Your Name"}</p>
        <p>SRM Mil ID: {formData.email || "Your Email"}</p>
        <p>Contact: {formData.contact || "Your Contact"}</p>
        <p>Department: {formData.department || "Your Department"}</p>
        <p>Section: {formData.section || "Your Section"}</p>
        <div className="mt-4 mb-4 text-center ">
          
          <div className="h-10 w-full bg-white mx-auto">
          <p className="text-2sm text-gray-400 p-2 mb-2">BAR CODE</p>
          </div>
        </div>
      </div>
      

      {/* Vertical Line */}
      <hr className="h-55 border-l border-gray-500 mx-6" />

      {/* QR Code */}
      <div className="flex flex-col items-center">
        <div className="inline-block  ">
          <QRCodeCanvas
            value={JSON.stringify({
              name: formData.Name || "Your Name",
              email: formData.email || "Your Email",
              contact: formData.contact || "Your Contact",
              department: formData.department || "Your Department",
              section: formData.section || "Your Section",
            })}
            size={128}
            bgColor="transparent" // Transparent background
            fgColor="#000000" // Black QR code
          />
        </div>
      </div>
    </div>
    </div>
      )}
      {/* Download Button Outside */}
      {step === 2 && (
  <div className="mt-6 text-center">
    <button
      onClick={handleDownload}
      className="w-60 bg-[#054234] py-2 rounded-md hover:bg-green-700"
    >
      Download Ticket
    </button>
  </div>
)}


      {/* Step 3: Confirmation */}
      {step === 3 && (
  <div className="w-full max-w-2xl p-6 rounded-lg shadow-lg text-center text-white">
    <h2 className="text-3xl font-semibold mb-6">Ticket</h2>
    <div className="text-[#054234] text-6xl ml-70 mb-10 mt-10">
      <FaCheckCircle /> {/* Success Icon */}
    </div>
    <p className="text-lg mb-4">Your ticket has been downloaded!</p>
    <p className="text-gray-400 mb-6">
      Join our WhatsApp community and follow us on social media for the latest updates.
    </p>
    <div className="flex justify-center space-x-4 mt-4">
      {/* Social Media Icons */}
      <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-600">
        <FaWhatsapp className="text-green-500 text-xl" />
      </a>
      <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-600">
        <FaInstagram className="text-pink-500 text-xl" />
      </a>
      <a href="#" className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-600">
        <FaXTwitter  className="text-white-500 text-xl" />
      </a>
    </div>
  </div>
)}

    </div>
  );
}

export default TicketGenerator;