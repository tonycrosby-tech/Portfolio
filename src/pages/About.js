import React from 'react';
import img from './img/tony.jpg'

const About = () => {
  return (
    <>
      <div className="hero bg-blue-300 mt-12 divide-x-2 ml-24 mr-24 shadow-2xl rounded-2xl">
        <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center ml-64 ">
          <div className="bg-blue-200 rounded-lg md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left shadow-2xl mb-16 md:mb-0 items-center text-center">
            <h1 className="mt-4 font-consolas mx-8 sm:text-4xl text-2xl font-bold text-gray-900">
              Hi, I'm Tony Crosby.
            </h1>
            <p className="text-blue-500 mx-8 break-words mt-4 text-xl" >"I enjoy building applications, and I'm fascinated how they are created."</p>
            <p className="mb-4 mt-2 mx-8 bold font-menlo break-words text-blue-900 leading-relaxed">
              I'm a student studying computer science with experience in Front-End
              and Back-End development that loves watching Tutorials on Youtube,
              playing Video Games, and spending time with Family.
            </p>
          </div>
          <div className="lg:max-w-sm ml-32 lg:w-half md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-full border-2 shadow-lg border-blue-200"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
