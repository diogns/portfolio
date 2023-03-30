// @TODO - Add a link to the resume page

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import NavLogo from './NavLogo'
import SocialMedia from '../SocialMedia'

function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme()

    const navigations = [
        {
            label: 'Home', alt: '', target: '', rel: '', path: '/',
        },
        {
            label: 'About', alt: '', target: '', rel: '', path: '/#about',
        },
        {
            label: 'Skills', alt: '', target: '', rel: '', path: '/#skills',
        },
        {
            label: 'Projects', alt: '', target: '', rel: '', path: '/#projects',
        },
        {
            label: 'Contact', alt: '', target: '', rel: '', path: '/#contact',
        },
        {
            label: 'Resume', alt: 'alt text', target: '_blank', rel: 'noopener noreferrer', path: 'https://drive.google.com/file/d/1P6BEUL3WfKCowzEwqIRyeF2MTGCdsUKW/view',
        },
    ]

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if (currentTheme === 'dark') {
            return (
                <button
                    type="button"
                    className="shadow-inner"
                    onClick={() => setTheme('light')}
                >
                    <BsFillSunFill style={{ color: 'white' }} size={30} />
                </button>
            )
        }
        return (
            <button
                type="button"
                className="shadow-inner"
                onClick={() => setTheme('dark')}
            >
                <BsFillMoonFill size={30} />
            </button>
        )
    }

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handleShadow)
    }, [])

    return (
        <div
            className={
                shadow
                    ? 'bg-white dark:bg-[#232323] fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
                    : 'bg-white dark:bg-[#232323] fixed w-full h-20 z-[100]'
            }
        >
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <div>
                    <NavLogo theme={theme} />
                </div>

                <div className="order-first sm:order-first md:order-none">
                    <ul className="hidden md:flex">

                        {navigations.map((navItem) => (
                            <li key={navItem.label} className="ml-10 text-sm uppercase hover:border-b">
                                <Link href={navItem.path} alt={navItem.alt} target={navItem.target} rel={navItem.rel}>
                                    <p>{navItem.label}</p>
                                </Link>
                            </li>
                        ))}

                    </ul>
                    {/* Hamburger Icon */}
                    <button
                        type="button"
                        onClick={handleNav}
                        className="md:hidden shadow-inner"
                    >
                        <AiOutlineMenu className="text-[#232323] dark:text-[#fff]" size={40} />
                    </button>
                </div>

                <div>
                    {renderThemeChanger()}
                </div>

            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? 'bg-white dark:bg-[#232323] fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500'
                            : 'bg-white dark:bg-[#232323] fixed left-[-150%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <NavLogo theme={theme} />
                            <button
                                type="button"
                                onClick={handleNav}
                                className="p-3 shadow-none text-[#232323] dark:text-[#fff]"
                            >
                                <AiOutlineClose size={40} />
                            </button>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Let&#39;s build something great together.
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            {
                                navigations.map((navItem) => (
                                    <li key={navItem.path} onClick={() => setNav(false)} onKeyDown={() => setNav(false)} className="py-4 text-sm">
                                        <Link href={navItem.path} alt={navItem.alt} target={navItem.target} rel={navItem.rel}>
                                            <p>{navItem.label}</p>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-[#5651e5] dark:text-[#81e6d9]">
                                Let&#39;s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
