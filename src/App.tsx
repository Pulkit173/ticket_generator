import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FaWhatsapp, FaInstagram, FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TicketGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    flight: "E-CELL101",
    fromCity: "AIRPORT",
    fromCode: "AIR",
    toCity: "CHENNAI",
    toCode: "SRM",
    terminal: "TP STAIRS",
    gate: "1",
    seat: "WISH",
    class: "TP 205",
    boardingTime: "4:45",
    departureTime: "5:00",
    duration: "1:30 hr",
    arrivalTime: "6:30",
    passenger: "",
    date: "TUE, 28 Jan 2025",
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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Navigation Steps */}
      <div className="flex space-x-55 mb-6 text-m text-gray-400">
        <span className={step === 1 ? "text-green-500" : ""}>Register</span>
        <span className={step === 2 ? "text-green-500" : ""}>
          Fill Personal Details
        </span>
        <span className={step === 3 ? "text-green-500" : ""}>
          Download Ticket
        </span>
      </div>

      {step === 1 && (
        <div className="w-full max-w-2xl bg-black p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">
            Enter the Basic Details
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
             
              <input
                type="text"
                name="passenger"
                placeholder="Passenger Name"
                value={formData.passenger}
                onChange={handleInputChange}
                className="w-full bg-black border border-white mt-4 p-3 rounded-md text-white"
              />
              <input
          type="email"
          name="email"
          placeholder="SRM Mail ID"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full  bg-black border border-white mt-4 p-3 rounded-md text-white"
        />
         <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleInputChange}
          className="w-full bg-black border border-white mt-4 p-3 rounded-md text-white"
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

      {/* Step 2: Boarding Pass Preview */}
      {step === 2 && (
        <div className="relative w-[350px] h-[455px] bg-white rounded-xl  text-gray-800 text-xs uppercase mx-auto my-6">
          {/* Header */}
          <header className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 flex justify-between items-center text-white">
          <img
              src="https://s3-alpha-sig.figma.com/img/c64c/8948/b0d57ef03e84484835d5a2bc1f5a2116?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lWRgc4wdnJgj2psXf2k2g9m2aM-0O3EyIn17WoCeD~vWuTZ8F5uAJUdUmxalFV4Kj1OAyQfsVE4FefB~Bxub6O1cJH5vdKiKygjBOBmvxWYW2JMvRO3-d9GQ-zX4tNnbVUZgtFNgtpo3i1SMlc9gQZO4XLIgtiqPyqCLC8byDis6hPwJt-teWKHhcXqKiEt-Q2P~ctV44Qt5XYNDSk4fucuSvlL0vnu6lkPHqwLdr8HbnVR-rsLaJxU2MqKrnsyzqU~aO2b3uE3tjaXWMvxH8NRj8d8Yt4ZP0pGzLIEbiZZvvqs31X5jrOoL510c5bJCjMNJXN7~pZC0iRYw9QWFSQ__" // Replace with the actual path to your image
              alt="Logo"
              className="w-16 h-8 object-contain"
            />
            <div className="text-right">
              <small className="block text-[8px] opacity-80">Flight</small>
              <strong className="text-lg">{formData.flight}</strong>
            </div>
          </header>

          {/* Cities */}
          <section className="relative">
            <div className="flex justify-between p-5">
              <div className="text-left">
                <small className="block text-gray-400">{formData.fromCity}</small>
                <strong className="text-4xl font-light">{formData.fromCode}</strong>
              </div>
              <div className="text-right">
                <small className="block text-gray-400">{formData.toCity}</small>
                <strong className="text-4xl font-light">{formData.toCode}</strong>
              </div>
            </div>
          </section>

          {/* Info Section */}
          <section className="flex border-t border-green-400">
            <div className="flex-1 bg-gray-100 border-r border-green-400 p-2">
              <div className="mb-2">
                <small className="text-gray-500">Terminal</small>
                <strong className="block text-green-600 italic">
                  {formData.terminal}
                </strong>
              </div>
              <div className="mb-2">
                <small className="text-gray-500">Gate</small>
                <strong className="block text-green-600 italic">
                  {formData.gate}
                </strong>
              </div>
              <div className="mb-2">
                <small className="text-gray-500">Seat</small>
                <strong className="block text-green-600">{formData.seat}</strong>
              </div>
              <div>
                <small className="text-gray-500">Class</small>
                <strong className="block text-green-600">{formData.class}</strong>
              </div>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-2">
                <small className="text-gray-500">Boarding</small>
                <strong className="block">{formData.boardingTime}</strong>
              </div>
              <div className="mb-2">
                <small className="text-gray-500">Departure</small>
                <strong className="block">{formData.departureTime}</strong>
              </div>
              <div className="mb-2">
                <small className="text-gray-500">Duration</small>
                <strong className="block">{formData.duration}</strong>
              </div>
              <div>
                <small className="text-gray-500">Arrival</small>
                <strong className="block">{formData.arrivalTime}</strong>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="relative border-t border-green-400">
            <div className="flex justify-between items-center p-3">
              <div>
                <div className="mb-2">
                  <small className="text-gray-500">Passenger Name</small>
                  <br />
                  <strong>{formData.passenger}</strong>
                </div>
                <div className="mb-2">
                  <small className="text-gray-500">SRM Mail ID</small>
                  <br />
                  <strong>{formData.email}</strong>
                </div>
                <div>
                  <small className="text-gray-500">Date </small>
                  <br />
                  <strong>{formData.date}</strong>
                </div>
              </div>
              <QRCodeCanvas
                value={JSON.stringify(formData)}
                size={64}
                bgColor="transparent"
                fgColor="#000000"
              />
            </div>
          </section>
        </div>
      )}

      {/* Download Button */}
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
            <FaCheckCircle />
          </div>
          <p className="text-lg mb-4">Your ticket has been downloaded!</p>
          <p className="text-gray-400 mb-6">
            Join our WhatsApp community and follow us on social media for the
            latest updates.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="#"
              className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-600"
            >
              <FaWhatsapp className="text-green-500 text-xl" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-600"
            >
              <FaInstagram className="text-pink-500 text-xl" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-600"
            >
              <FaXTwitter className="text-white text-xl" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketGenerator;
