import React from "react";
import ContainerBox from "../components/ContainerBox";
import InputBox from "../components/InputBox";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let [input, setInput] = useState({
    name: "",
    email: "",
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
        autoClose: 1000,
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
      <div>
        <ContainerBox>
          <Heading
            as="h1"
            titel="Contact me"
            className="text-3xl font-dm text-center font-bold  mt-10 mb-10"
          />
          <div className=" flex justify-center flex-col items-center  gap-8">
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
            <InputBox
              onChange={handelinput}
              type="name"
              name="name"
              placeholder="Your Name "
              className="border border-[#f0f0f0] p-3 rounded-md  w-[30%]"
            />
            <InputBox
              onChange={handelinput}
              type="email"
              name="email"
              placeholder="Your email"
              className="border border-[#f0f0f0] p-3 rounded-md  w-[30%]"
            />
            <textarea
              onChange={handelinput}
              className="border border-[#f0f0f0] p-3 rounded-md  w-[30%]"
              id="w3review"
              name="msg"
              rows="4"
              cols="50"
              placeholder="write Details here"
            ></textarea>
            <Button
              onClick={handerSubmit}
              className=" bg-primery py-2 px-8 font-dm text-sm text-white w-[30%]"
              titel="Submite"
            />
          </div>
        </ContainerBox>
      </div>
    </>
  );
};

export default Contact;
