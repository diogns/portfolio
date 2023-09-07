import React from 'react'

function Main() {
    return (
        <div id="contact" className="w-full h-screen text-center">
            <div className="px-[8%] md:px-[15%] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <div className="flex">
                        <h1 className=" tracking-widest text-[#5651e5] dark:text-[#81e6d9]">
                            Contact
                        </h1>
                        <div className="w-full h-[2.5px] bg-[#5651e5] dark:bg-[#81e6d9] m-auto ml-2" />
                    </div>
                    <p className="py-4 sm:max-w-[70%] m-auto font-medium md:text-xl">
                        I&#39;m currently open to freelance and actively looking for full-time job opportunties, so if you like what you&#39;ve seen
                        please don&#39;t hesitate to get in touch!
                    </p>
                    <br />
                    <button
                        type="button"
                        className="py-2 px-4 text-[#5651e5] dark:text-[#81e6d9] border-4 border-[#5651e5] dark:border-[#81e6d9] rounded-none shadow-none hover:shadow-lg transition duration-300 ease-in-out"
                    >
                        GET IN TOUCH
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main
