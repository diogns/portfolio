import React from 'react'
import SocialMedia from './SocialMedia'

function Main() {
    return (
        <div id="home" className="w-full h-screen text-center">
            <div className="px-[8%] md:px-[15%] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="tracking-widest font-medium md:text-xl">
                        Let&#39;s build something great together
                    </p>
                    <h1 className="py-4">
                        Hi, I&#39;m
                        {' '}
                        <span className="text-[#5651e5] dark:text-[#81e6d9]"> Raul</span>
                    </h1>
                    <h1 className="py-2">Full-Stack Developer</h1>
                    <p className="py-4 sm:max-w-[70%] m-auto font-medium md:text-xl">
                        I&#39;m focused on building responsive front-end web applications
                        integrating back-end technologies.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
