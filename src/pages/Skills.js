import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import React from 'react';
import { skills } from '../data';

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-blue-200 mb-8 bg-transparent mt-12 divide-x-2 ml-24 mr-24 shadow-2xl rounded-2xl"
    >
      {/* <div className="hero bg-blue-300 divide-x-2 ml-24 mr-24 border-dashed border-2 border-blue-900 shadow-2xl mt-12"> */}
      <div className="container flex flex-col px-5 py-10 mx-auto items-center justify-center">
        <div className="text-center mb-8 bg-blue-600 rounded-lg w-2/3">
          <ChipIcon className="w-10 inline-block mb-2 mt-4 bg-blue-500 text-white mx-2" />
          <h1 className="sm:text-4xl text-3xl font-bold title-font font-serif text-white mb-2">
            Skills &amp; Technologies
          </h1>
          <p className="text-base font-mono mb-4  text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here are some of the technologies that I've been working with. I'm
            always looking to learn more and expand my knowledge. Some of these
            I've learned in school and some I've learned on my own.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-blue-700 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-blue-300 rounded w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium bg-blue-400 rounded py-2 px-2 w-full items-center justify-center text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
