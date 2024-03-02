import React, { useState, useEffect } from "react";
import heroImg from "../../assets/images/hero.svg";
import CountUp from "react-countup";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typedStrings = [
    "Web Developer",
    "Frontend Developer",
    "Data Analyst",
    "Freelancer",
  ];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (charIndex < typedStrings[index].length) {
        setTypedText(
          (prevTypedText) => prevTypedText + typedStrings[index][charIndex]
        );
        setCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTypedText("");
          setCharIndex(0);
          setIndex((prevIndex) => (prevIndex + 1) % typedStrings.length);
        }, 1000); // Delay before starting typing the next string
      }
    }, 99); // Typing speed (adjust as needed)

    return () => clearInterval(interval);
  }, [charIndex, index, typedStrings]);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location - 60,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-16" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-semibold text-sm"
            >
              Hello, Welcome
            </h5>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor text-2xl sm:text-4xl leading-9 sm:leading-12 mt-5 relative"
            >
              <h1 className="font-extrabold">
                I'm Mithuna Chandrasekaran <br />
              </h1>
              <span>
                <span className="font-extrabold">{typedText}</span>
                <span className="cursor-animation text-4xl">|</span>
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="https://drive.google.com/file/d/1zxyM_6L6E6sJFc_M6VSmQORSs5YA71A5/view?usp=sharing">
                <button className="bg-primaryColor text-white font-semibold flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-lg">
                  <i className="ri-mail-line"></i> Download CV
                </button>
              </a>
              <a
                onClick={handleClick}
                href="#portfolio"
                className="text-smallTextColor font-semibold text-base border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-10 font-normal text-base leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              passionate about Web design. Experience with HTML, CSS, and
              JavaScript. Also, I have knowledge of Figma and Adobe XD. Proven
              ability to learn new technologies quickly and apply them to
              real-world projects. Seeking an opportunity to contribute to a
              team building innovative and user-friendly applications.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-base font-semibold">
                Follow me:
              </span>

              <span>
                <a
                  href="https://github.com/MithuChandran"
                  className="text-smallTextColor text-2xl font-semibold"
                >
                  <i className="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/mithuna-chandrasekaran/"
                  className="text-smallTextColor text-2xl font-semibold"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/profile.php?id=61554543767270&mibextid=ZbWKwL"
                  className="text-smallTextColor text-2xl font-semibold"
                >
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/mithu_chandran?igsh=dG9lbGE4emYyc3p5"
                  className="text-smallTextColor text-2xl font-semibold"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a
                  href=" https://wa.me/qr/7AHLIM67FDP7F1"
                  className="text-smallTextColor text-2xl font-semibold"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </span>
            </div>
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure>
              <img src={heroImg} alt="Hero" />
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-semibold text-2xl">
                <CountUp start={0} end={100} duration={2} suffix="%" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base">
                Leadership
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-semibold text-2xl">
                <CountUp start={0} end={26} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base">
                Projects/Courses Completed
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-semibold text-2xl">
                <CountUp start={0} end={15} duration={3} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base">
                Attended Workshops
              </h4>
            </div>
            <div className="mb-10">
              <h2 className="text-headingColor font-semibold text-2xl">
                <CountUp start={0} end={6} duration={3} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-semibold text-base">
                Participated Competitions
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
