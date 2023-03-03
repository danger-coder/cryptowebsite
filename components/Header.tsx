import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div className='bg-[#0D0D2B]'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between text-white pt-[60px]'>
                    <div className='flex items-center gap-[16px]'>
                        <img src="/../assets/logo.png" alt="" />
                        <h1 className='text-[32px] font-bold'>logo</h1>
                    </div>
                    <div>
                        <nav className='flex items-center gap-[44px]'>
                            <ul className='flex items-center gap-[52px] border-r-[1px] border-[#F2F2F2] pr-[44px]'>
                                <li><a href="" className='text-16px font-semibold' >Products</a></li>
                                <li><a href="" className='text-16px font-semibold'>Features</a></li>
                                <li><a href="" className='text-16px font-semibold'>About</a></li>
                                <li><a href="" className='text-16px font-semibold'>Contact</a></li>
                                <li><a href="" className='text-16px font-semibold'>Login</a></li>
                            </ul>
                            <button className='h-[52px] w-[130px] rounded-[32px] flex items-center justify-center text-[16px] leading-[24px] bg-[#3671E9] font-medium '>Register</button>
                        </nav>
                    </div>
                </div>



                <div className='grid grid-cols-2 mt-[131px]'>
                    <div className='text-white'>
                        <div className='bg-[#FFFFFF1A] h-[40px] w-[365px] rounded-[32px] flex items-center gap-[16px] pl-[3px]'>
                            <button className='h-[32px] w-[113px] rounded-[32px] bg-[#FFFFFF] text-[#0D0D2B] text-[16px] leading-[24px] font-medium flex items-center justify-center cursor-pointer'>75% SAVE</button>
                            <p className='text-[white] text-[16px] leading-[28px] font-normal tracking-[0.01em]'>For the Black Friday weekend</p>
                        </div>
                        <h1 className='text-[white] text-[64px] leading-[75.84px] font-bold max-w-[588px] mt-[24px]'>Fastest & secure platform to invest in crypto</h1>
                        <p className='text-[#E0E0E0] text-[16px] leading-[28px] font-normal tracking-[0.01em] mt-[24px] max-w-[435px]'>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                        <div className='bg-[#3671E9] h-[64px] w-[202px] rounded-[32px] flex items-center justify-center gap-[24px] mt-[32px]'>
                            <p className='text-white text-[18px] leading-[27px] font-medium'>Try for FREE</p>
                            <div className='cursor-pointer'>
                                <img src="/../assets/arrow1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="/../assets/illustration.png" alt="" />
                        <img src="/../assets/illustionbar2.png" className='absolute left-[-20px] bottom-[-110px]' alt="" />
                        <img src="/../assets/ilussionbar.png" className='absolute left-[-300px] bottom-[-180px]' alt="" />
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Header