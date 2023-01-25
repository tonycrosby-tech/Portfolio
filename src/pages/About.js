import React from 'react';
import img from './img/tony.jpg';

const About = () => {
  return (
    <>
      <section className="" id="about">
        <div className="hero bg-blue-300 mt-6 divide-x-2 ml-24 mr-24 shadow-2xl rounded-2xl">
          <div className="mx-auto flex px-10 py-20 md:flex-row flex-col items-center ml-64 ">
            <div className="bg-blue-200 rounded-lg md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left shadow-2xl md:mb-0 items-center text-center">
              <h1 className="mt-4 font-consolas mx-8 sm:text-4xl text-2xl font-bold text-gray-900">
                Hi, I'm Tony Crosby.
              </h1>
              <p className="text-blue-500 mx-8 break-words mt-4 text-xl">
                "I enjoy building applications, and I'm fascinated how they are
                created."
              </p>
              <p className="mb-4 mt-2 mx-8 bold font-menlo break-words text-blue-900 leading-relaxed">
                I'm a student studying computer science with experience in
                Front-End and Back-End development that loves watching Tutorials
                on Youtube, playing Video Games, and spending time with Family.
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
          <div className="flex flex-col ml-32 mb-6">
            <h1 className="sm:text-4xl py-4 px-4 text-4xl font-bold font-seriftitle-font mb-2 text-blue-500">
              Background
            </h1>
          </div>
          <div className='flex flex-row mb-6'>
            <div className="flex flex-col ml-32 items-center justify-center py-6 px-6 w-3/5 bg-blue-500 rounded-lg break-words mb-12">
              <p className="text-white font-medium text-2xl">
                My name is Tony Crosby and, I first got into coding when I was
                younger by developing plugins for my minecraft servers. I really
                enjoyed it but I didn't ever think I would actually start
                developing in other languages. Until I started messing around
                with Web Developing and I enjoyed that so much that I went and
                did a Full Stack Coding Bootcamp at the University of Kansas in
                2021. I graduated in March 2022 with a Certificate in Full Stack
                Web Development then I enjoyed doing Web Development so much
                that I started getting fluent with JavaScript and React, so then
                I was like if I can do JavaScript then I might as well try and
                learn a new language on my own, so I did I actually learned the
                basics of Python and C++. Now I'm studying to get my Bachelors
                in Computer Science, and i'm doing my first term at JCCC then
                i'm transferring to KU to finish my degree.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
