import { CodeIcon } from '@heroicons/react/solid';
import React from 'react';
import { projects } from '../data';
import Skills from './Skills';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
    <section
      id="projects"
      className="text-gray-400 mt-12 bg-blue-600 body-font divide-x-2 ml-24 mr-24 mb-12 shadow-2xl rounded-2xl"
    >
      <div className="container px-5 py-8 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-2">
          <CodeIcon className="mx-auto inline-block text-white w-10" />
          <h1 className="sm:text-4xl text-3xl font-bold font-serif title-font mb-2 text-blue-100">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-mono mb-4 text-white text-base">
            Projects that I have created using React, HTML and JavaScript.
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="lg:w-96 lg:h-100 mr-4 mb-4 rounded-lg bg-blue-400 shadow-lg "
            >
              <div>
                <img
                  alt="gallery"
                  className="rounded-lg w-5/6 h-48 mx-8 mt-4 mb-4 shadow-lg"
                  src={project.image}
                />
                <div className="rounded-lg mx-4 mt-6 shadow-lg h-48 mb-4 bg-blue-300 ">
                  <h2 className="text-lg text-black font-medium">
                    {project.subtitle}
                    <hr className="" />
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-blue-900 word-break mx-2">
                    {project.description}
                  </p>
                  <p className="leading-relaxed text-black font-bold">
                    {project.technologies}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mb-8">
          <Skills />
        </div>
      </div>
    </section>
    </>
  );
}
