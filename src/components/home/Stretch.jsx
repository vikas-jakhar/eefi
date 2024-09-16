import React from 'react'
import bull from '../../assets/images/webp/bull.webp'
import bear from '../../assets/images/webp/bear.webp'
import men from '../../assets/images/webp/men.webp'

const Stretch = () => {
    return (
        <div className='bg-stretch-layer bg-no-repeat bg-center bg-cover lg:pt-5 lg:h-[825px] md:h-[640px] sm:h-[556px] h-[520px] relative'>
            <div className='container relative'>
                <div className='flex justify-center lg:pt-0 pt-3'>
                    <h2 className='font-plus text-white font-extrabold lg:text-custom-3xl md:text-4xl sm:text-3xl text-xl xl:leading-[62px] leading-10 md:left-8 text-center max-w-[726px]'>
                        Amplify and STRETCH GAINS
                    </h2>
                </div>
                <div className='flex justify-center items-center lg:mt-[325px] md:mt-[196px] sm:mt-[148px] mt-[110px] relative z-[1]'>
                    <p className='max-w-[554px] text-white text-sm leading-[22px] font-normal text-center'>
                        We take a different balanced approach to finding and creating yield opportunities in the everchanging crypto market. Our yield strategies help users stay protected and hedged during bear markets and amplify yield during bull markets without resorting to leverage or other dangerous techniques.
                    </p>
                </div>
                <img className='max-w-[649px] w-full absolute top-[60px] left-[50px] pointer-events-none 2xl:block hidden' src={bull} alt="bull" />
                <img className='max-w-[532px] w-full absolute top-[120px] right-[50px] pointer-events-none 2xl:block hidden' src={bear} alt="bear" />
            </div>
            <img className='xl:max-w-[649px] lg:max-w-[550px] md:max-w-[400px] sm:max-w-[300px] max-w-[250px] w-full absolute lg:top-[78px] md:top-[60px] top-[48px] xl:left-[180px] sm:left-[100px] left-0 pointer-events-none 2xl:hidden block' src={bull} alt="bull" />
            <img className='xl:max-w-[532px] lg:max-w-[450px] md:max-w-[300px] sm:max-w-[250px] max-w-[190px] w-full absolute lg:top-[131px] md:top-[118px] top-[72px] xl:right-[180px] sm:right-[100px] right-0 pointer-events-none 2xl:hidden block' src={bear} alt="bear" />
            <img className='lg:max-w-[100px] sm:max-w-[80px] max-w-[60px] w-full absolute bottom-[80px] right-[45%] pointer-events-none' src={men} alt="men" />
        </div>
    )
}

export default Stretch