import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 3,
      spacing: 10, // Increase spacing
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      spacing: 30, // Increase spacing
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      spacing: 30, // Increase spacing
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      spacing: 10,
    },
  };

  return (
    <section id="skills" className="pb-3  pt-5">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] text-center">
          Skills
        </h2>
        <p className="lg:max-w-[600px] text-center lg:mx-auto text-headingColor font-[500] text-[16px] leading-6">
          Passionate about front-end development, web design, and machine
          learning. Experience with Java, Python, HTML, and CSS. Also, I have
          knowledge of using Jupyter Notebook. Proven ability to learn new
          technologies quickly and apply them to real-world projects. Seeking an
          opportunity to contribute to a team building innovative and
          user-friendly applications.
        </p>
      </div>
      <div className="flex justify-center mb-45">
        <div className="w-3/5 h-30">
          <Carousel
            swipeable
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={999}
            keyBoardControl
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="p-20 "
            partialVisible
            //arrows={false}
          >
            <div className="flex items-center justify-center text-smallTextColor border-[4px] border-solid border-primaryColor rounded-full w-32 h-32 shadow-md shadow-primaryColor">
              <p className="text-center">Java</p>
            </div>
            <div className="flex items-center justify-center text-smallTextColor border-[4px] border-solid border-primaryColor rounded-full w-32 h-32 shadow-md shadow-primaryColor">
              <p className="text-center">Python</p>
            </div>
            <div className="flex items-center justify-center text-smallTextColor border-[4px] border-solid border-primaryColor rounded-full w-32 h-32 shadow-md shadow-primaryColor">
              <p className="text-center">HTML</p>
            </div>
            <div className="flex items-center justify-center text-smallTextColor border-[4px] border-solid border-primaryColor rounded-full w-32 h-32 shadow-md shadow-primaryColor">
              <p className="text-center">Flutter</p>
            </div>
            <div className="flex items-center justify-center text-smallTextColor border-[4px] border-solid border-primaryColor rounded-full w-32 h-32 shadow-md shadow-primaryColor">
              <p className="text-center">Machine Learning</p>
            </div>
            <div className="flex items-center justify-center text-smallTextColor border-[4px] border-solid border-primaryColor rounded-full w-32 h-32 shadow-md shadow-primaryColor">
              <p className="text-center">Web Development</p>
            </div>
            <div className="flex items-center justify-center text-smallTextColor border-[4px] border-solid border-primaryColor rounded-full w-32 h-32 shadow-md shadow-primaryColor">
              <p className="text-center">Dart</p>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Skills;
