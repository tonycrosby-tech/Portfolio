import React from 'react';

const About = () => {
  return (
    <>
      <div className="hero bg-blue-300">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font font-mono sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Hi, I'm Tony Crosby.
              <br className="hidden lg:inline-block" />I love to build amazing
              apps.
            </h1>
            <p className="mb-8 italic font-mono text-black leading-relaxed">
              A Self-Motivated Software Engineer with Experience in Front-End
              and Back-End development! Loves watching tutorials on Youtube,
              playing video games, and spending time with family.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex font-serif font-bold text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 hover:text-white rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 font-serif inline-flex font-bold text-gray-100 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/187673322_3986375728122244_3188554850329111853_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=174925&_nc_ohc=7ed2zDKFIogAX_J-4ul&_nc_ht=scontent-hou1-1.xx&oh=00_AT8jfacVBgD6Qczy92HpwUtLbouZGRe1MFKCg7VBVkQp5w&oe=61FB7718"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
