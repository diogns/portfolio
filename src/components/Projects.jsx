import React from 'react'
import Image from 'next/image'
import CoverageImg from '../../public/assets/coverage.png'
import ThorImg from '../../public/assets/thor.png'
import PortfolioImg from '../../public/assets/portfolio.png'

function Projects() {
    return (
        <div id="projects" className="w-full items-center py-[6rem]">
            <div className="px-[8%] md:px-[20%] mx-auto flex flex-col justify-center h-full">
                <div className="flex">
                    <h1 className=" tracking-widest text-[#5651e5] dark:text-[#81e6d9]">
                        Projects
                    </h1>
                    <div className="w-full h-[2.5px] bg-[#5651e5] dark:bg-[#81e6d9] m-auto ml-2" />
                </div>
                <div className="flex justify-center">
                    <p className="py-4 md:text-xl">What I&apos;ve Build</p>
                </div>
                <div className=" p-5 border-2 border-[#232323] dark:border-[#fff] rounded-lg mb-10">
                    <div className="m-auto py-2 md:py-8 px-2 md:px-8">
                        <Image
                            src={CoverageImg}
                            alt="Picture of the author"
                            className="border-4 border-[#232323] dark:border-[#fff] rounded-lg m-auto"
                        />
                    </div>
                    <div className="m-auto py-2 md:py-8 px-2 md:px-8">
                        <h2 className="text-center">Coverage </h2>
                        <ul className="list-outside list-disc ml-6">
                            <li className="text-[#5651e5] text-3xl">
                                <p className="text-lg">This dashboard registers and updates mobile network objects. It has a module that generates reports with this information in PDF, Word and Excel formats.</p>
                            </li>
                            <li className="text-[#5651e5] text-3xl">
                                <p className="text-lg">Made in EJS, jQuery, Datatables and Bootstrap.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" p-5 border-2 border-[#232323] dark:border-[#fff] rounded-lg mb-10">
                    <div className="m-auto py-2 md:py-8 px-2 md:px-8">
                        <Image
                            src={ThorImg}
                            alt="Picture of the author"
                            className="border-4 border-[#232323] dark:border-[#fff] rounded-lg m-auto"
                        />
                    </div>
                    <div className="m-auto py-2 md:py-8 px-2 md:px-8">
                        <h2 className="text-center">Thor </h2>
                        <ul className="list-outside list-disc ml-6">
                            <li className="text-[#5651e5] text-3xl">
                                <p className="text-lg">An automated ticketing system, this system records, resolves and refers tickets. Metrics, data tables, and flow are displayed.</p>
                            </li>
                            <li className="text-[#5651e5] text-3xl">
                                <p className="text-lg">Made in React, Echartjs and Bootstrap.</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" p-5 border-2 border-[#232323] dark:border-[#fff] rounded-lg mb-10">
                    <div className="m-auto py-2 md:py-8 px-2 md:px-8">
                        <Image
                            src={PortfolioImg}
                            alt="Portfolio of the author"
                            className="border-4 border-[#232323] dark:border-[#fff] rounded-lg m-auto"
                        />
                    </div>
                    <div className="m-auto py-2 md:py-8 px-2 md:px-8">
                        <h2 className="text-center">This Website </h2>
                        <ul className="list-outside list-disc ml-6">
                            <li className="text-[#5651e5] text-3xl">
                                <p className="text-lg">A dynamic and responsive portfolio.</p>
                            </li>
                            <li className="text-[#5651e5] text-3xl">
                                <p className="text-lg">Made in NextJS and Tailwind.</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
