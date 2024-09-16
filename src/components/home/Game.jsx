import React from 'react'
import Icons from '../common/Icons'
import { GAME_DATA } from '../../utils/Helper'

const Game = () => {
    return (
        <div className='py-16 bg-game-layer bg-cover -mt-1'>
            <div className="container">
                <div className="flex items-center gap-6 lg:flex-row flex-col justify-between">
                    <div className="max-w-[572px] w-full flex flex-col sm:items-center lg:items-start">
                        <h2 className='machina_bold font-extrabold leading-custom-xl text-3xl sm:text-custom-xl sm:text-center lg:text-left text-white'>(E,E) Game Theory: An UPGRADE from (3,3)</h2>
                        <p className='sm:mt-11 mt-6 text-white text-base font-normal sm:text-center lg:text-left font-raleway italic max-w-[515px]'>Remember (3,3) at its core was about social coordination. Or, people working together to achieve a common outcome or goal. (E,E) is the same. But with (E,E) people are working together not to grow a robust treasury that would back a decentralized stablecoin but instead to establish the first ever decentralized amplified yield token… $EEFI. A token that can produce yield in any market condition.</p>
                        <p className='mt-5 text-white text-base font-normal sm:text-center lg:text-left font-raleway italic max-w-[502px]'>To achieve this (E,E) has everyone work together by interacting with and supporting its ecosystem flywheel: Vaults, Bonds, Markets and other components. Interaction with the (E,E) Flywheel will help build a treasury of what we term high quality “growth assets”. Assets that are revenue bearing, interest bearing, Real Yield bearing or Rebase bearing. Where the ‘growth’ aka the yields of these assets are used to act as long term decentralized leverage on EEFI’s value. This is (E,E). This is sustainable. This is the UPGRADE.</p>
                    </div>
                    <div className="max-w-[530px] w-full mt-[54px] lg:mt-0">
                        <div className="mx-auto w-[114px] sm:w-[129px] bg-white rounded h-[93px] grid place-items-center">
                            <div className="sm:w-[116px] w-[102px] h-20 rounded bg-light-blue flex flex-col justify-center items-center">
                                <p className='machina_bold font-extrabold text-white text-xl sm:text-2xl text-center'>YOU</p>
                                <p className='font-normal font-raleway text-sm text-white text-center'>(Flywheel)</p>
                            </div>
                        </div>
                        <div className="sm:pt-10 pt-7 flex flex-wrap justify-between">
                            {GAME_DATA.map((i, idx) => (
                                <div key={idx} className={`mt-9 flex gap-3 sm:gap-6 items-start w-full ${idx === 2 || idx === 3 ? "justify-center gap-3 sm:gap-9" : "justify-between"}`}>
                                    {i.items.map((e, index) => (
                                        <div key={index} className="sm:max-w-[160px] max-w-[103px] h-full shadow-custom-xl w-full px-2 pb-2 min-h-[130px] bg-white pt-[18px] rounded-md flex flex-col items-center">
                                            <Icons iconName={e.icon} />
                                            <p className='mt-2 machina_bold font-extrabold text-black text-sm sm:text-base text-center'>{e.title}</p>
                                            <p className='font-raleway font-normal text-sm text-black max-w-[123px] text-center mt-1'>{e.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game