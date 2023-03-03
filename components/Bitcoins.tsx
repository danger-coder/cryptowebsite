import React from 'react'

type Props = {}

const Bitcoins = (props: Props) => {
    return (
        <div className='bg-[#F8F9FB] pt-[316px] pb-[100px]'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center'>

                    <h1 className='text-[#0D0D2B] text-[40px] leading-[60px] font-bold max-w-[741px] text-center'>Trade securely and market the high growth cryptocurrencies.</h1>
                </div>
                <div className='grid grid-cols-3 gap-[45px] text-white mt-[64px]'>
                    <div className='bg-[#2B076E] flex items-center justify-center flex-col py-[48px] rounded-[16px]'>
                        <img src="/../assets/bitcoin1.png" alt="" />
                        <h1 className='text-[32px] leading-[48px] font-bold mt-[48px] mb-[16px]'>Bitcoin <span className='text-[white]/[0.8] text-[18px] leading-[27px] font-medium'>BTC</span>  </h1>
                        <p className='text-[16px] leading-[28px] font-normal tracking-[0.01em] max-w-[322px] text-center'>Digital currency in which a record of transactions is maintained.</p>
                        <div className='bg-[#3671E9] h-[64px] w-[205px] rounded-[32px] mt-[25px] flex items-center justify-center gap-[24px]'>
                            <p className='text-white leading-[27px] text-[18px] font-medium'>Start mining</p>
                            <img src="/../assets/arrow1.png" alt="" />
                        </div>
                    </div>
                    <div className='bg-[#fff] flex items-center justify-center flex-col py-[48px] rounded-[16px]'>
                        <img src="/../assets/ethereum.png" alt="" />
                        <h1 className='text-[32px] leading-[48px] font-bold mt-[48px] mb-[16px] text-[#0D0D2B]'>Ethereum <span className='text-[#BDBDBD] text-[18px] leading-[27px] font-medium'>ETH</span>  </h1>
                        <p className='text-[16px] leading-[28px] font-normal tracking-[0.01em] max-w-[322px] text-center text-[#828282]'>Blockchain technology to create and run decentralized digital applications.</p>
                        <div className=' mt-[25px] cursor-pointer'>
                            <img src="/../assets/right.png" alt="" />
                        </div>
                    </div>
                    <div className='bg-[#fff] flex items-center justify-center flex-col py-[48px] rounded-[16px]'>
                        <img src="/../assets/litecoin.png" alt="" />
                        <h1 className='text-[32px] leading-[48px] font-bold mt-[48px] mb-[16px] text-[#0D0D2B]'>Litecoin <span className='text-[#BDBDBD] text-[18px] leading-[27px] font-medium'>LTC</span>  </h1>
                        <p className='text-[16px] leading-[28px] font-normal tracking-[0.01em] max-w-[322px] text-center text-[#828282]'>Cryptocurrency that enables instant payments to anyone in the world.</p>
                        <div className=' mt-[25px] cursor-pointer'>
                            <img src="/../assets/right.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bitcoins