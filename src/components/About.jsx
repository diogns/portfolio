import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../../public/assets/abaout.png'

function About() {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center py-[6rem]">
            <div className="px-[8%] md:px-[20%] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <div className="flex">
                        <h1 className=" tracking-widest text-[#5651e5] dark:text-[#81e6d9]">
                            About
                        </h1>
                        <div className="w-full h-[2.5px] bg-[#5651e5] dark:bg-[#81e6d9] m-auto ml-2" />

                    </div>
                    <div>
                        <p className="py-2">
                            Hello! I&#39;m Raul, a full-stack developer based in Lima, Peru.
                            I love to work on exciting projects that test what I&#39;ve learnt,
                            whilst being exposed to the power and potential of the ever-evolving
                            technologies around us. I&#39;m always looking for better, and more importantly,
                            ethical and accessible ways to solve the common problems we are faced with day-to-day.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-start pb-2">
                        <Link download href="https://drive.google.com/file/d/1P6BEUL3WfKCowzEwqIRyeF2MTGCdsUKW/view" alt="alt text" target="_blank" rel="noopener noreferrer">
                            <button
                                type="button"
                                className="py-2 px-4 text-[#5651e5] dark:text-[#81e6d9] border-4 border-[#5651e5] dark:border-[#81e6d9] rounded-none shadow-none hover:shadow-lg transition duration-300 ease-in-out"
                            >
                                Download Resume
                            </button>
                        </Link>
                    </div>

                </div>
                <div className="w-full h-auto m-auto flex justify-center items-center rounded-full p-0 border-[16px] border-[#d9d9d9] dark:border-[#3f3f3f]">
                    <div className="w-6/6 sm:w-4/4 rounded-full p-0 border-[16px] border-[#a6a6a6] dark:border-[#737373]">
                        <Image
                            src={AboutImg}
                            className="shadow rounded-full max-w-full h-auto align-middle border-none p-0"
                            alt="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
