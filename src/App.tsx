import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FaWhatsapp, FaInstagram, FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function TicketGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    flight: "",
    fromCity: "",
    fromCode: "",
    toCity: "",
    toCode: "",
    terminal: "",
    gate: "",
    seat: "",
    class: "",
    boardingTime: "",
    departureTime: "",
    duration: "",
    arrivalTime: "",
    passenger: "",
    date: "",
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
                name="flight"
                placeholder="Flight"
                value={formData.flight}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="fromCity"
                placeholder="From City"
                value={formData.fromCity}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="fromCode"
                placeholder="From Code"
                value={formData.fromCode}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="toCity"
                placeholder="To City"
                value={formData.toCity}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="toCode"
                placeholder="To Code"
                value={formData.toCode}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="terminal"
                placeholder="Terminal"
                value={formData.terminal}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="gate"
                placeholder="Gate"
                value={formData.gate}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="seat"
                placeholder="Seat"
                value={formData.seat}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="class"
                placeholder="Class"
                value={formData.class}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="boardingTime"
                placeholder="Boarding Time"
                value={formData.boardingTime}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="departureTime"
                placeholder="Departure Time"
                value={formData.departureTime}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="arrivalTime"
                placeholder="Arrival Time"
                value={formData.arrivalTime}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="passenger"
                placeholder="Passenger"
                value={formData.passenger}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
              <input
                type="text"
                name="date"
                placeholder="Date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full bg-black border border-white p-3 rounded-md text-white"
              />
            </div>
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
        <div className="relative w-[350px] h-[420px] bg-white rounded-xl  text-gray-800 text-xs uppercase mx-auto my-6">
          {/* Header */}
          <header className="bg-gradient-to-b from-gray-800 to-gray-700 p-3 flex justify-between items-center text-white">
            <svg className="w-16 h-8">
              <use xlinkHref="#alitalia"></use>
            </svg>
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
                  <small className="text-gray-500">Passenger </small>
                  <br />
                  <strong>{formData.passenger}</strong>
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
