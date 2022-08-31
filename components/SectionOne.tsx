import React from 'react';

type SectionOneProps = {
    
};

const SectionOne:React.FC<SectionOneProps> = () => {
    
    return (
        <div className=' bg-gray-50 w-full gap-10 relative z-10 overflow-hidden pb-32 md:pb-60 -mt-[200px] pt-[200px] sm:-mt-[200px] sm:pt-[300px] md:-mt-[400px] md:pt-[300px] lg:-mt-[350px] lg:pt-[500px] 2xl:pt-[600px]'>
            <div className='space-y-8 md:space-y-16 '>
                <h2 className='text-3xl sm:text-4xl lg:text-5xl text-center font-bold '>
                    Because every developer
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500'> need</span>
                    <br className='hidden sm:block' />
                    to network and community support
                </h2>
            </div>
        </div>
    )
}
export default SectionOne;