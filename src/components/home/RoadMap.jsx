import React from 'react';
import { ROADMAP_DATA } from '../../utils/Helper';

const RoadMap = () => {
    const isRightAligned = (idx) => idx % 2 !== 0;
    const isIndented = (idx) => [0, 1, 3].includes(idx);

    return (
        <div className='bg-roadmap-layer bg-cover py-24'>
            <div className="container my-12">
                <h2 className='font-bold machina_bold text-center text-custom-xl text-white'>Roadmap</h2>
                <div className="max-w-[880px] w-full relative pl-10 sm:pl-24 lg:pl-0 gap-4 flex flex-col lg:gap-0 mx-auto mt-5 sm:mt-16 md:mt-24 lg:mt-[117px]">
                    {ROADMAP_DATA.map((item, idx) => (
                        <div
                            key={idx}
                            className={`max-w-[373px] relative w-full border border-light-blue py-5 sm:py-9 px-2 sm:px-4 rounded-lg lg:-mt-3 bg-off-blue ${isRightAligned(idx) ? 'lg:ml-auto' : ''}`}
                        >
                            <p className='font-medium text-xl text-white font-plus'>{item.number}</p>
                            <div className='mt-4 text-white text-base font-normal'>
                                <div className="flex items-start">
                                    <span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span>
                                    <p className='font-normal font-raleway'>{item.text}</p>
                                </div>
                                {item.heading && <div className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal font-raleway'>{item.heading}</p></div>}
                                {item.title && <div className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal font-raleway'>{item.title}</p></div>}
                                {item.items?.map((e, index) => (
                                    <div
                                        key={index}
                                        className={`text-white text-base font-normal ${isIndented(idx) ? 'pl-6' : ''}`}
                                    >
                                        <div className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal font-raleway'>{e.title}</p></div>
                                        <div className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal font-raleway'>{e.text}</p></div>
                                        {e.data && <div className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal font-raleway'>{e.data}</p></div>}
                                    </div>
                                ))}
                                {item.data && <div className="flex items-start"><span className='mx-2.5 p-[1.9px] mt-2.5 bg-white rounded-full'></span><p className='font-normal font-raleway'>{item.data}</p></div>}
                            </div>
                            <div
                                className={`absolute flex items-center top-0 ${isRightAligned(idx)
                                    ? 'lg:-left-20 -left-[52px] sm:-left-[67.6px]'
                                    : 'lg:-right-20 lg:left-auto -left-[52px] sm:-left-[67.6px] lg:flex-row-reverse'
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
                    <span className='flex h-[99%] lg:h-full w-0.5 bg-medium-blue absolute top-3 lg:top-0 left-0 sm:left-10 lg:left-1/2 lg:-translate-x-1/2'></span>
                </div>
            </div>
        </div>
    );
};

export default RoadMap;