import React from 'react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-blue-300 mt-12 mb-12 ml-24 mr-24 shadow-2xl rounded-2xl"
    >
        <div className='flex flex-row items-center justify-center text-4xl py-8 text-white font-medium '>Contact Me </div>

      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap mb-6">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg mb-8 overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.9)' }}
            src="https://www.google.com/maps/embed/v1/place?q=97+4th+st+leavenworth+kansas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          
        </div>
        <form
          action="https://formsubmit.co/tonycrosby96@gmail.com"
          method="POST"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="flex flex-row text-white font-serif sm:text-4xl text-3xl mb-1 items-center justify-center font-medium title-font">
            Get in touch
          </h2>
          <p className="leading-relaxed mb-5 font-mono text-blue-600">
            Please feel free to contact me by email or on Github.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-blue-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-blue-500 rounded border border-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-blue-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-blue-500 rounded border border-gray-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-blue-500"
            >
              Message
            </label>
            <textarea
              required
              id="message"
              name="message"
              className="w-full bg-blue-500 rounded border border-blue-900 focus:border-blue-400 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-500 border border-gray-900 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
