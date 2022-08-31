import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion'

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return (
        <div className='relative z-50 w-11/12 max-w-6xl transition duration-1000 opacity-100 translate-y-[0%] mt-14 flex flex-col items-center text-center gap-y-6'>
            <motion.h1 className='text-4xl sm:text-5xl lg:text-7xl leading-none transition duration-1000 opacity-100 translate-y-[0%]  font-black'
            animate={{y:[0, 80, 50] }}    
            transition={{ ease: "easeOut", duration: 1 }}
            whileHover={{scale:1.05}}>
                <span className=' text-neutral-900'>
                One platform for all your
                </span>
                <br className='hidden sm:block' />
                <span className='text-transparent bg-clip-text gradient'> community needs</span>
            </motion.h1>
            <p className='text-xl transition duration-1000 delay-[400ms] opacity-100 mt-10 font-semibold'>
                Developer or not, you can easily create internal tools.
                <br className='hidden sm:block' />
                No SQL. No JavaScript. No IT request.
            </p>
            <motion.button className=' inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-neutral-900 hover:bg-neutral-700 mb-12'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}>
                Join Community
            </motion.button>
            <div className=' relative z-30 '>
                <motion.div className='relative flex justify-center w-full transition duration-[2000ms] delay-[1500ms] opacity-100 ' 
                animate={{y:[500, 80, -20] }} 
                transition={{ ease: "easeOut", duration: 1 }}
                whileHover={{scale:1.1}}>
                    <Image width={1384} height={734} src='/desktop.gif' className='lg:hidden z-20 relative' />
                </motion.div>
            </div>
        </div>
    )
}
export default Header;