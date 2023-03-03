import React from 'react'

type Props = {}

const Whyus = (props: Props) => {
    return (
        <div className='bg-[#0D0D2B] pt-[176px] pb-[120px] relative'>
            <div className='container mx-auto grid grid-cols-2'>
                <div>
                    <img src="/../assets/illustion4.png" alt="" />
                </div>
                <div>
                    <h2 className='text-white text-[40px] leading-[60px] font-bold mb-[23.99px]'>Why you should choose CRAPPO</h2>
                    <p className='text-[#E0E0E0] text-[16px] leading-[28px] tracking-[0.01em] max-w-[408px] mb-[31px]'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.</p>
                    <button className='bg-[#3671E9] h-[59px] w-[145px] rounded-[32px] flex items-center justify-center text-white text-[18px] leading-[27px] font-medium'>Learn More</button>
                </div>

          
            </div>
            <img src="/../assets/why.png" className='absolute top-0 right-0' alt="" />
            <img src="/../assets/illustion5.png" className='absolute bottom-0 right-0' alt="" />


        </div>
    )
}

export default Whyus