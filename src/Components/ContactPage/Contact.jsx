import React from "react";
import { Mail, MapPin} from "lucide-react";
import { FaInstagram,FaTwitter  } from "react-icons/fa";
import CuteTreeWithFace from "./CuteTreeWithFace";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-green-50 flex flex-col lg:flex-row ">
      {/* Left: Animated Eyes + Dog Image */}
      <div className="lg:w-1/3 flex items-center  bg-green-50 justify-center relative">
        <CuteTreeWithFace/>
      </div>
      

      {/* Middle: Contact Form */}
      <div className="lg:w-1/3 flex items-center justify-center py-10">
        <div className="bg-[#699026] text-white rounded-3xl p-8 w-80 sm:w-96 text-center">
          <h3 className="text-2xl font-bold mb-4 font-sans tracking-wide">WRITE TO US</h3>
          <form action="/contact" method="post" className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="h-10 rounded-full px-4 text-mdOlive text-lg bg-white text-center"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="h-10 rounded-full px-4 text-mdOlive bg-white text-center text-lg"
              required
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="h-10 rounded-full px-4 text-mdOlive bg-white text-center text-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="h-24 rounded-3xl px-4 py-3 text-mdOlive bg-white  text-lg text-center"
              required
            />
            <button
              type="submit"
              className="bg-green-100 text-mdOlive font-semibold py-2 px-6 rounded-full mt-2 hover:bg-green-50 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Right: Contact Info */}
      <div className="lg:w-1/3 flex items-center  justify-center py-10">
        <div className="bg-white rounded-3xl w-80 sm:w-96 text-center">
          <h3 className="text-2xl font-bold text-green-700 font-sans pt-10">Contact Us</h3>
          <div className="px-6 py-4 text-left space-y-6 mt-6">
            <div className="flex items-center text- border-b pb-4">
              <Mail className="bg-green-700  text-white p-2 rounded-full mr-4" size={36} />
              <span className="text-lg text-green-700">Email</span>
            </div>
            <div className="flex items-center text-green-700 border-b pb-4">
              <MapPin className="bg-green-700 text-white p-2 rounded-full mr-4" size={36} />
              <span className="text-lg text-green-700">Address</span>
            </div>
            <div className="flex items-center DarkOlive border-b pb-4">
              <FaInstagram className="bg-green-700 text-white p-2 rounded-full mr-4" size={36} />
              <span className="text-lg text-green-700">Instagram</span>
            </div>
            <div className="flex items-center text-DarkOlive">
              <FaTwitter  className="bg-green-700 text-white p-2 rounded-full mr-4" size={36} />
              <span className="text-lg text-green-700">Twitter</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
