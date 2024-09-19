import { ROADMAP_DATA } from '../../utils/Helper';
import clouds from "../../assets/images/webp/clouds.webp";

const RoadMap = () => {
    const isRightAligned = (idx) => idx % 2 !== 0;
    const isIndented = (idx) => [0, 1, 3].includes(idx);

    return (
        <div className='bg-roadmap-layer bg-cover relative py-2 sm:py-10 lg:py-24 bg-fixed'>
            <div className="container my-12 relative z-[1]">
                <h2 data-aos='zoom-in' className='font-bold machina_bold text-center text-4xl lg:text-custom-xl text-white'>Roadmap</h2>
                <div className="max-w-[880px] w-full relative pl-10 sm:pl-24 md:pl-0 gap-4 flex flex-col lg:gap-0 mx-auto mt-5 sm:mt-14 md:mt-20 lg:mt-[117px]">
                    {ROADMAP_DATA.map((item, idx) => (
                        <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`}
                            key={idx}
                            className={`lg:max-w-[373px] md:max-w-[298px] max-w-[373px] relative w-full border border-light-blue py-5 sm:py-9 px-2 sm:px-4 rounded-lg lg:-mt-3 bg-off-blue ${isRightAligned(idx) ? 'md:ml-auto' : ''}`}
                        >
                            <p data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className='font-medium text-xl text-white font-plus'>{item.number}</p>
                            <div className='mt-4 text-white text-base font-normal'>
                                <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className="flex items-start">
                                    <span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span>
                                    <p className='font-normal '>{item.text}</p>
                                </div>
                                {item.heading && <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal '>{item.heading}</p></div>}
                                {item.title && <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal '>{item.title}</p></div>}
                                {item.items?.map((e, index) => (
                                    <div
                                        key={index}
                                        className={`text-white text-base font-normal ${isIndented(idx) ? 'pl-6' : ''}`}
                                    >
                                        <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal '>{e.title}</p></div>
                                        <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal '>{e.text}</p></div>
                                        {e.data && <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal '>{e.data}</p></div>}
                                    </div>
                                ))}
                                {item.data && <div data-aos={`${isRightAligned(idx) ? 'fade-left' : 'fade-right'}`} className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal '>{item.data}</p></div>}
                            </div>
                            <div
                                className={`absolute flex items-center top-0 ${isRightAligned(idx)
                                    ? 'md:-left-20 -left-[52px] sm:-left-[67.6px]'
                                    : 'md:-right-20 md:left-auto -left-[52px] sm:-left-[67.6px] md:flex-row-reverse'
                                    }`}
                            >
                                <div className="relative w-6 h-6">
                                    <span className='bg-white opacity-10 w-full rounded-full flex h-full'></span>
                                    <span className='w-3 h-3 absolute flex bg-medium-blue rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'></span>
                                </div>
                                <div className="w-8 hidden sm:flex justify-between -ml-px">
                                    <span className='flex bg-medium-blue h-0.5 w-1'></span>
                                    <span className='flex bg-medium-blue h-0.5 w-2'></span>
                                    <span className='flex bg-medium-blue h-0.5 w-1'></span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <span data-aos='fade-up' className='flex h-[99%] md:h-full w-0.5 bg-medium-blue absolute top-3 md:top-0 left-0 sm:left-10 md:left-1/2 md:-translate-x-1/2'></span>
                </div>
            </div>
            <img src={clouds} alt="clouds" className='w-full absolute top-0 left-0 -translate-y-1/2' />
        </div>
    );
};

export default RoadMap;