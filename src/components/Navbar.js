import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

export default function Navbar() {
  return (
    <div class="mx-auto">
      <nav class="flex items-center justify-center flex-wrap p-8">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 5 4 A 1.0001 1.0001 0 0 0 4 5 L 4 21 A 1.0001 1.0001 0 0 0 5 22 L 11.998047 22 L 11.998047 24 L 7.8300781 24 C 7.5760781 24 7.3314844 24.097484 7.1464844 24.271484 L 5.1582031 26.136719 C 4.8272031 26.445719 5.0489531 27 5.5019531 27 L 24.498047 27 C 24.951047 27 25.172797 26.444766 24.841797 26.134766 L 22.853516 24.269531 C 22.667516 24.096531 22.423922 24 22.169922 24 L 17.998047 24 L 17.998047 22 L 25 22 A 1.0001 1.0001 0 0 0 26 21 L 26 5 A 1.0001 1.0001 0 0 0 25 4 L 5 4 z M 6 6 L 24 6 L 24 20 L 6 20 L 6 6 z M 11.980469 8.9902344 A 1.0001 1.0001 0 0 0 11.292969 9.2929688 L 8.2929688 12.292969 A 1.0001 1.0001 0 0 0 8.2929688 13.707031 L 11.292969 16.707031 A 1.0001 1.0001 0 1 0 12.707031 15.292969 L 10.414062 13 L 12.707031 10.707031 A 1.0001 1.0001 0 0 0 11.980469 8.9902344 z M 17.990234 8.9902344 A 1.0001 1.0001 0 0 0 17.292969 10.707031 L 19.585938 13 L 17.292969 15.292969 A 1.0001 1.0001 0 1 0 18.707031 16.707031 L 21.707031 13.707031 A 1.0001 1.0001 0 0 0 21.707031 12.292969 L 18.707031 9.2929688 A 1.0001 1.0001 0 0 0 17.990234 8.9902344 z"></path>
          </svg>
          <span class=" text-xl tracking-tight font-bold text-blue-900 mx-2">
            Tony Crosby
          </span>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a
              href="/Portfolio"
              className="mr-5 text-gray-900 font-mono hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="mr-5 text-gray-900 font-mono hover:text-blue-500"
            >
              About
            </a>
            <a
              href="/Portfolio/projects"
              className="mr-5 text-gray-900 font-mono hover:text-blue-500"
            >
              Projects
            </a>
                        <a
              href="#skills"
              className="mr-5 text-gray-900 font-mono hover:text-blue-500"
            >
              Skills
            </a>
          </nav>
        </div>
      </nav>
    </div>
  );
}
