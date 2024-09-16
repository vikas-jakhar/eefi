import React, { useEffect, useState } from 'react'
import { NAV_ITEMS_DATA } from '../../utils/Helper';
import logo from '../../assets/images/webp/logo.webp'

const Header = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const [show, setShow] = useState(true);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                document.body.style.overflow = show ? "" : "hidden";
            } else {
                document.body.style.overflow = "";
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.body.style.overflow = "";
        };
    }, [show]);
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        if (window.innerWidth < 992) {
            setShow(!show);
        } else {
            e.preventDefault();
        }
    };
    return (
        <>
            <div className='container relative z-[2]'>
                <div className={`${!show ? "min-h-screen" : ""} `}>
                    <div className="flex justify-between items-center bg-transparent py-[6px]">
                        <a href="/">
                            <img className='pointer-events-none w-[68px]' src={logo} alt="#" />
                        </a>
                        <div className={`flex flex-col lg:flex-row items-center gap-7 lg:gap-6 max-lg:fixed max-lg:justify-center duration-300 ease-linear top-0 max-lg:-right-full max-lg:backdrop-blur-md max-lg:bg-blue max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                            }`}>
                            {NAV_ITEMS_DATA.map((items, index) => (
                                <a key={index} href={`/${items.url}`} onClick={(e) => handleClick(e, items.url.substring(1))} className='font-medium lg:text-base text-lg leading-5 text-white duration-300 ease-linear after:[] after:absolute after:bg-white after:h-px after:w-0 after:right-0 after:bottom-0 after:rounded after:duration-300 after:ease-linear hover:after:w-full hover:after:right-auto hover:after:left-0 relative'>{items.text}</a>
                            ))}
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="font-medium lg:text-base text-lg leading-5 text-white flex items-center space-x-1">
                                    <span>More</span>
                                    <svg
                                        width="16"
                                        height="15"
                                        viewBox="0 0 16 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                                        <path
                                            d="M11.8027 6.20992C11.6712 6.06997 11.5037 6 11.3004 6C11.0972 6 10.9297 6.06997 10.7982 6.20992L8 9.18702L5.20179 6.20992C5.07025 6.06997 4.90284 6 4.69955 6C4.49626 6 4.32885 6.06997 4.19731 6.20992C4.06577 6.34987 4 6.52799 4 6.74427C4 6.96056 4.06577 7.13867 4.19731 7.27862L7.49776 10.7901C7.56951 10.8664 7.64723 10.9206 7.73094 10.9527C7.81465 10.9847 7.90433 11.0005 8 11C8.09566 11 8.18535 10.984 8.26906 10.9519C8.35277 10.9198 8.43049 10.8659 8.50224 10.7901L11.8027 7.27862C11.9342 7.13867 12 6.96056 12 6.74427C12 6.52799 11.9342 6.34987 11.8027 6.20992Z"
                                            fill="white"
                                        />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute -left-2 mt-2 w-20 bg-white rounded-lg shadow-lg">
                                        <a
                                            href="/"
                                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-lg">
                                            Service 1
                                        </a>
                                        <a
                                            href="/"
                                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200">
                                            Service 2
                                        </a>
                                        <a
                                            href="/"
                                            className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-lg">
                                            Service 3
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <button className='sm:p-[13px_32px] p-[12px_24px] border lg:text-blue text-white lg:border-blue border-white rounded-lg font-medium text-base leading-4 before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 lg:before:bg-blue before:bg-white before:transition-all before:duration-500 lg:hover:text-white hover:text-blue hover:before:-rotate-180'>
                            <span className="relative z-10">Enter App</span>
                        </button>
                        <button
                            aria-label="Toggle Navigation Menu"
                            className={`cursor-pointer relative z-[90] lg:hidden ${show ? "" : "cross"}`}
                            onClick={() => setShow(!show)}>
                            <span className="w-8 h-[3px] rounded-xl bg-white block duration-300 ease-linear"></span>
                            <span className="w-8 h-[3px] rounded-xl bg-white block duration-300 ease-linear my-[7px]"></span>
                            <span className="w-8 h-[3px] rounded-xl bg-white block duration-300 ease-linear"></span>
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header