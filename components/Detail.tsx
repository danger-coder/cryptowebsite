import React from 'react'

type Props = {}

const Detail = (props: Props) => {
    return (
        <div className='bg-[#2B076E] py-[100px] relative'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-[40px] leading-[60px] font-bold text-center max-w-[758px] text-white'>Market sentiments, portfolio, and run the infrastructure of your choice </h1>
                </div>
                <div className='grid grid-cols-2 mt-[100px]'>
                    <div>
                        <h1 className='text-white text-[32px] leading-[48px] font-bold mb-[24px]'>Invest Smart</h1>
                        <p className=' text-[#E0E0E0] text-[16px] leading-[28px] font-normal max-w-[508px]'>Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                        <button className='bg-[#3671E9] h-[59px] w-[161px] rounded-[32px] flex items-center justify-center text-white text-[18px] leading-[27px] font-medium mt-[32px]'>Learn More</button>
                    </div>
                    <div>
                        <img src="/../assets/Chart.png" alt="" />
                    </div>

                </div>

                <div className='grid grid-cols-2 mt-[120px] gap-[80px]'>
                    <div>
                        <img src="/../assets/Statistic.png" alt="" />
                    </div>
                    <div className='pt-[100px]'>
                        <h1 className='text-white text-[32px] leading-[48px] font-bold mb-[24px]'>Detailed Statistics</h1>
                        <p className=' text-[#E0E0E0] text-[16px] leading-[28px] font-normal max-w-[508px]'>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. </p>
                        <button className='bg-[#3671E9] h-[59px] w-[161px] rounded-[32px] flex items-center justify-center text-white text-[18px] leading-[27px] font-medium mt-[32px]'>Learn More</button>
                    </div>

                </div>
                <div className='grid grid-cols-2 mt-[120px] z-20'>
                    <div>
                        <h1 className='text-white text-[32px] leading-[48px] font-bold mb-[24px]'>Grow your profit and track your investments</h1>
                        <p className=' text-[#E0E0E0] text-[16px] leading-[28px] font-normal max-w-[508px]'>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments. </p>
                        <button className='bg-[#3671E9] h-[59px] w-[161px] rounded-[32px] flex items-center justify-center text-white text-[18px] leading-[27px] font-medium mt-[32px]'>Learn More</button>
                    </div>
                    <div>
                        <img src="/../assets/Table.png" className='' alt="" />
                    </div>

                </div>

            </div>

            <img src="/../assets/o.png" className='absolute top-0 left-[120px]' alt="" />
            <img src="/../assets/circle.png" className='absolute right-0 bottom-0 ' alt="" />
        </div>

    )
}

export default Detail