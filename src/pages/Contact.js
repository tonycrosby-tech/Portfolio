import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-blue-700 mt-12 mb-12 divide-x-2 ml-24 mr-24 shadow-2xl rounded-2xl">
      {/* <div className="hero bg-blue-300 divide-x-2 ml-24 mr-24 border-dashed border-2 border-blue-900 shadow-2xl mt-12"> */}
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: 'opacity(0.7)' }}
            src="https://www.google.com/maps/embed/v1/place?q=97+4th+st+leavenworth+kansas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-blue-700 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 font-mono text-blue-300">
                Leavenworth, KS 66048
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:tonycrosby96@gmail.com"className="mt-1 font-mono text-blue-300">
                tonycrosby96@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="mt-1 font-mono text-blue-300">913-702-6906</p>
            </div>
          </div>
        </div>
        <form
          action="https://formsubmit.co/tonycrosby96@gmail.com"
          method="POST"
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white font-serif sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5 font-mono text-blue-300">
            Please feel free to contact me by email or phone.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-blue-300">
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
            <label htmlFor="email" className="leading-7 text-sm text-blue-300">
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
              className="leading-7 text-sm text-blue-300"
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
