import React, { useRef } from "react";

const Header = () => {
  const menuRef = useRef(null);

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

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center fixed top-0 bg-gray-200 z-10">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*=============== logo=============== */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              M
            </span>

            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Mithuna
              </h2>
              <p className="text-smallTextColor text-[18px] font-[500]">
                Personal
              </p>
            </div>
          </div>

          {/*=============== logo-end===============*/}
          {/*=============== menu start===============*/}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[750] hover:text-primaryColor"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[750] hover:text-primaryColor"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[750] hover:text-primaryColor"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[750] hover:text-primaryColor"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  className="text-smallTextColor font-[750] hover:text-primaryColor"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*=============== menu end===============*/}

          {/*=============== menu right===============*/}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTexColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i className="ri-send-plane-line"></i>{" "}
              <a onClick={handleClick} href="#contact">
                Let's Talk
              </a>
            </button>

            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
          </div>
          {/*=============== menu end===============*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
