import React from "react";
import Heading from "../components/Heading";

const About = () => {
  return (
    <>
      <div>
        <Heading
          as="h1"
          titel="Our Stroy"
          className="text-3xl font-dm text-center font-bold  mt-10 mb-10"
        />
        <Heading
          as="h1"
          titel="Jewelry is one of the world’s leading Jewelry brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
          className="text-xl font-dm text-center font-medium  mt-10 mb-10"
        />
        <div>
          <div className="flex justify-evenly">
            <Heading
              className="w-[23%]"
              as="p"
              titel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <Heading
              className="w-[23%]"
              as="p"
              titel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <Heading
              className="w-[23%]"
              as="p"
              titel="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
