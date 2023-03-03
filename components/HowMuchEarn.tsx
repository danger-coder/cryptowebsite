import React from 'react'

type Props = {}

const HowMuchEarn = (props: Props) => {
    return (
        <div className='bg-[#0D0D2B]'>
            <div className='container mx-auto flex items-center justify-center pt-[100px] relative pb-[230px]'>


                <div>
                    <h2 className='text-white text-[40px] leading-[60px] font-bold mb-[24px]'>Check how much you can earn</h2>
                    <p className='text-[#E0E0E0] text-[18px] leading-[27px] font-normal max-w-[622px] text-center'>Let’s check your hash rate to see how much you will earn today, Exercitation veniam consequat sunt nostrud amet.</p>
                </div>

                <div className='bg-[#FBFCFE] absolute left-[50%] transform translate-x-[-50%] bottom-[-200px] pt-[62px]  rounded-[16px] shadow-lg'>
                    <div className='flex items-center gap-[48px] px-[48px] pb-[48px]'>
                        <div className='border-[#E0E0E0] border-b-[1px] w-[403px] h-[38px]'>
                            <input type="text" placeholder='Enter your hash rate' className='bg-transparent outline-none placeholder:text-black text-[20px] font-normal' />
                        </div>
                        <div className='border-[#E0E0E0] border-b-[1px] w-[200px] h-[38px]'>
                            <input type="text" placeholder='TH/s' className='bg-transparent outline-none placeholder:text-black text-[20px] font-normal' />
                        </div>
                        <button className='bg-[#3671E9] h-[59px] w-[147px] rounded-[32px] flex items-center justify-center text-[18px] leading-[27px] font-medium text-white'>Calculate</button>
                    </div>
                    <div className='bg-white p-[48px] rounded-[16px]'>
                        <h2 className='text-[#3671E9] text-[16px] leading-[24px] font-medium mb-[16px]'>ESTIMATED 24 HOUR REVENUE:</h2>
                        <h1 className='text-[#0D0D2B] text-[32px] leading-[48px] font-bold mb-[4px]'>0.055 130 59 ETH <span className='text-[#3671E9]'>($1275)</span></h1>
                        <p className='text-[#828282] text-[16px] leading-[28px] font-normal tracking-[0.01em]'>Revenue will change based on mining difficulty and Ethereum price.</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowMuchEarn