import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 mt-12 bg-blue-600 body-font divide-x-2 ml-24 mr-24 mb-12 shadow-2xl rounded-2xl">
      <div className="container px-5 py-8 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-6">
          <CodeIcon className="mx-auto inline-block text-white w-10" />
          <h1 className="sm:text-4xl text-3xl font-bold font-serif title-font mb-6 text-blue-100">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed font-mono mb-6 text-white text-base">
            Projects that I have created using React, HTML and JavaScript.
          </p>
        </div>
        <div className="flex flex-wrap ml-40 w-4/5">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="">
              <div className="flex mx-auto relative mb-8 rounded-lg bg-blue-400 shadow-lg ">
                <img
                  alt="gallery"
                  className="relative ml-12 mt-8 rounded-lg shadow-lg inset-0 w-2/5 mb-12 object-cover object-center "
                  src={project.image}
                />
                <div className="ml-2 mt-8 w-3/4 rounded-lg shadow-lg mr-12 mb-12 bg-blue-300 ">
                  <h2 className="tracking-widest text-lg text-black font-medium mt-2 mb-1">
                    {project.subtitle}
                    <hr className="mt-4"/>
                  </h2>
                  <h1 className="title-font text-lg font-medium text-black mb-4">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-blue-900 word-break ml-4 mr-4">{project.description}</p>
                  <p className="leading-relaxed text-black mt-4 mb-4 font-bold">{project.technologies}</p>

                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}