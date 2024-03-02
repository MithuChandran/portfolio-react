import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
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
    <footer className="bg-[#12141e] pt-12">
      {/* =============== footer top section===============*/}
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Do you want to make projects with me?
            </h2>
            <a href="https://drive.google.com/file/d/1zxyM_6L6E6sJFc_M6VSmQORSs5YA71A5/view?usp=sharing">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                <i class="ri-mail-line"></i> Download CV
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0">
              Proven ability to learn new technologies quickly and apply them to
              real-world projects. Seeking an opportunity to contribute to a
              team building innovative and user-friendly applications.
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me:
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://github.com/MithuChandran"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.linkedin.com/in/mithuna-chandrasekaran/"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-linkedin-fill"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61554543767270&mibextid=ZbWKwL"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-facebook-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://www.instagram.com/mithu_chandran?igsh=dG9lbGE4emYyc3p5"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a
                  href="https://wa.me/qr/7AHLIM67FDP7F1"
                  className="text-gray-300 font-[500] text-[18px]"
                >
                  <i class="ri-whatsapp-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a
                onClick={handleClick}
                className="text-gray-400 font-[600]"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                className="text-gray-400 font-[600]"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                className="text-gray-400 font-[600]"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={handleClick}
                className="text-gray-400 font-[600]"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* =============== footer top end===============*/}
      {/* =============== footer bottom===============*/}
      <div className="bg-[#1b1e29] py-5 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] rounded-full bg-[#2b2d33] text-white font-[500] text-[18px] flex items-center justify-center">
                  M
                </span>
                <div className="leading-[20px]">
                  <h2 className="text-gray-200 font-[500] text-[18px]">
                    Mithuna
                  </h2>
                  <p className="text-gray-400 text-[14px] font-[500]">
                    Personal Website
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-gray-400 text-[14px]">
                Copyright {year} developed by Mithuna - All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* =============== footer bottom end===============*/}
    </footer>
  );
};

export default Footer;
