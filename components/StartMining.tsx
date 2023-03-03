import React from 'react'

type Props = {}

const StartMining = (props: Props) => {
    return (
        <div className='mining py-[88px]'>
            <div className='container mx-auto'>
                <div className='flex  bg-[#3671E9] text-white p-[48px] rounded-[16px] relative'>
                    <div className='basis-[45%]'>
                        <h1 className='text-[32px] leading-[48px] font-bold mb-[16px]'>Start mining now</h1>
                        <p className='text-[16px] leading-[28px] font-normal max-w-[348px]'>Join now with CRAPPO to get the latest news and start mining now</p>
                    </div>
                    <div className='basis-[55%] flex items-center gap-[40px] justify-end'>
                        <div className=' w-[474px] h-[35px] border-[#FFFFFF66] border-b-[1px]'>
                            <input type="text" placeholder='Enter your email' className='bg-transparent placeholder:text-[white] placeholder:text-[16px] leading-[28px] font-normal outline-none' />
                        </div>
                        <button className='w-[152px] h-[55px] rounded-[32px] bg-white flex items-center justify-center text-[#0D0D2B] leading-[27px] font-medium'>Subscribe</button>
                    </div>

                    <img src="/../assets/diamond.png" className='absolute left-[40px] top-0' alt="" />
                    <img src="/../assets/bitcoin.png" className='absolute right-0 bottom-0' alt="" />
                </div>
            </div>
        </div>
    )
}

export default StartMining