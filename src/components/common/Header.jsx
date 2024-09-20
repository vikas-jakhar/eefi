import React, { useEffect, useState } from 'react'
import { DROPDOWN_DATA, NAV_ITEMS_DATA } from '../../utils/Helper';
import logo from '../../assets/images/webp/logo.webp'
import Icons from './Icons';

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
                    <div className="flex justify-between items-center bg-transparent py-1.5">
                        <a href="/" className='-ml-2.5'>
                            <img loading='lazy' rel="preload" as="image" className='pointer-events-none w-[68px]' src={logo} alt="#" />
                        </a>
                        <div className={`flex flex-col lg:flex-row lg:pl-16 items-center gap-7 lg:gap-6 max-lg:fixed max-lg:justify-center duration-300 ease-linear top-0 max-lg:-right-full max-lg:backdrop-blur-md bg-medium-blue lg:bg-transparent max-lg:z-[90] max-lg:h-screen max-lg:w-full ${show ? "" : " !right-0"
                            }`}>
                            {NAV_ITEMS_DATA.map((items, index) => (
                                <a key={index} href={`${items.url}`} onClick={(e) => handleClick(e, items.url.substring(1))} className='font-medium lg:text-base text-lg leading-5 text-white duration-300 ease-linear after:[] after:absolute after:bg-white after:h-px after:w-0 after:right-0 after:bottom-0 after:rounded after:duration-300 after:ease-linear hover:after:w-full hover:after:right-auto hover:after:left-0 relative'>{items.text}</a>
                            ))}
                            <div className="relative">
                                <button
                                    onClick={toggleDropdown}
                                    className="font-medium lg:text-base text-lg leading-5 text-white flex items-center space-x-1">
                                    <span>More</span>
                                    <Icons iconName="downIcon" isDropdownOpen={isDropdownOpen} />
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute -left-2 mt-2 w-20 bg-white rounded-lg shadow-lg">
                                        {DROPDOWN_DATA.map((i, idx) => (
                                            <a key={idx}
                                                href={`/${i.text}`}
                                                className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 rounded-lg">
                                                {i.text}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <button className='sm:p-[13px_32px] p-[12px_24px] lg:hidden border lg:text-light-blue text-white lg:border-light-blue border-white rounded-lg font-medium text-base leading-4 before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 lg:before:bg-light-blue before:bg-white before:transition-all before:duration-500 lg:hover:text-white hover:text-light-blue hover:before:-rotate-180'>
                                <span className="relative z-10">Enter App</span>
                            </button>
                        </div>
                        <button className='sm:p-[13px_32px] p-[12px_24px] hidden lg:block border bg-white xl:bg-transparent lg:text-light-blue text-white lg:border-light-blue border-white rounded-lg font-medium text-base leading-4 before:ease relative overflow-hidden before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:-translate-y-full before:-top-2 before:-rotate-90 lg:before:bg-light-blue before:bg-white before:transition-all before:duration-500 lg:hover:text-white hover:text-light-blue hover:before:top-0 hover:before:translate-y-0 hover:before:-rotate-90'>
                            <span className="relative z-10">Enter App</span>
                        </button>
                        <button
                            aria-label='Toggle Navigation Menu'
                            className="cursor-pointer relative w-8 h-7 z-[90] lg:hidden"
                            onClick={() => setShow(!show)}>
                            {[...Array(3)].map((_, i) => (
                                <span key={i} className={`w-full h-1 rounded-xl bg-white block duration-300 ease-linear absolute ${i === 0 ? "top-0 left-0" : i === 1 ? "top-1/2 -translate-y-1/2" : "bottom-0 left-0"} ${i === 0 && !show ? "rotate-45 top-1/2 -translate-y-1/2" : ""} ${i === 2 && !show ? "-rotate-45 top-1/2 -translate-y-1/2 bottom-auto" : ""} ${i === 1 && !show ? "hidden" : "flex"}`}></span>
                            ))}
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