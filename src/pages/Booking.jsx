import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import "react-datepicker/dist/react-datepicker.css";
import ContainerBox from "../components/ContainerBox";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const [startDate, setStartDate] = useState(new Date());

  let [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    date: "1/2/3",
    BookingNumber: Math.random(),
    Status: "Pending",
  });

  let handelinput = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(input);
  };

  let handerSubmit = () => {
    if (input.name == "") {
      toast.warn("Please input your info", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("success full you Booking ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ContainerBox>
        <Heading
          titel="Booking Now"
          className="text-center font-dm text-3xl mt-8 font-bold "
        />
        <div className=" flex justify-center mt-5 gap-5 items-center ">
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
          <InputBox
            type="text"
            name="name"
            onChange={handelinput}
            placeholder=" FullName"
            className="border border-[#f0f0f0] p-3 rounded-md "
          />
          <InputBox
            type="email"
            name="email"
            onChange={handelinput}
            placeholder="Your Email"
            className="border border-[#f0f0f0] p-3 rounded-md "
          />
          <InputBox
            type="number"
            name="number"
            onChange={handelinput}
            placeholder="Phone Number"
            className="border border-[#f0f0f0] p-3 rounded-md "
          />
          <div>
            <DatePicker
              className="border border-[#f0f0f0] p-3 rounded-md "
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <Button
            onClick={handerSubmit}
            className=" bg-primery py-2 px-8 font-dm text-sm text-white"
            titel="Submite"
          />
        </div>
      </ContainerBox>
    </>
  );
};

export default Booking;
