import React from 'react'
import Header from '../common/Header'
import heroImage from '../../assets/images/webp/hreo-image.webp'
import heroBg from '../../assets/images/webp/hero-bg.webp'
import heroVector from '../../assets/images/webp/hero-vector.webp'

const Hero = () => {
    return (
        <div className='relative'>
            <img className='max-w-[1210px] w-full absolute right-2 bottom-0' src={heroBg} alt="#" />
            <img className='absolute -top-4 left-0 xl:max-w-[1160px] lg:max-w-[900px] md:h-[810px] sm:h-[780px] h-[650px] w-[800px] max-md:object-cover md:w-full 2xl:hidden block' src={heroVector} alt="#" />
            <Header />
            <div className='container relative'>
                <div className='flex lg:flex-row flex-col xl:-mt-12 relative z-[1]'>
                    <div className='xl:pt-[182px] lg:pt-[118px] sm:pt-20 pt-14'>
                        <h1 className='text-white uppercase lg:text-custom-4xl font-medium sm:text-6xl text-5xl machina_regular max-w-[463px] lg:leading-[95px] leading-[60px] sm:leading-[75px]'>
                            Building
                            elastic
                            Protocol
                        </h1>
                        <p className='font-normal text-base leading-6 text-white max-w-[524px] md:my-6 my-4 capitalize'>
                            An ecosystem of unique yield strategies that help you earn yield, amplify, and stretch it across all market conditions
                        </p>
                        <a href="/" className='font-bold text-lg text-white leading-5 underline'>
                            Audited by Omniscia
                        </a>
                    </div>
                    <img className='xl:max-w-[635px] max-w-[536px] xl:h-[876px] w-full pointer-events-none lg:pt-0 pt-9' src={heroImage} alt="#" />
                </div>
                <img className='absolute -top-12 left-[-124px] xl:max-w-[1160px] h-[810px] w-full 2xl:block hidden' src={heroVector} alt="#" />
            </div>
        </div>
    )
}

export default Hero