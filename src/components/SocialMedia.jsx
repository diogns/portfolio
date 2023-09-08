import React from 'react'

import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter, BsGithub, BsInstagram } from 'react-icons/bs'

function SocialMedia() {
    const socialMedia = [
        { label: 'LinkedIn', icon: <FaLinkedinIn size={25} />, path: 'https://www.linkedin.com/in/raul-morales-taza/' },
        { label: 'Github', icon: <BsGithub size={25} />, path: 'https://github.com/diogns' },
        { label: 'Twitter', icon: <BsTwitter size={25} />, path: 'https://twitter.com/7RaulMoralesT' },
        { label: 'Instagram', icon: <BsInstagram size={25} />, path: 'https://www.instagram.com/raul_171297/' },
        { label: 'Contact', icon: <AiOutlineMail size={25} />, path: 'mailto:raulmoralestaza@gmail.com' },
    ]

    return (
        <>
            {
                socialMedia.map((social) => (
                    <Link
                        key={social.label}
                        href={social.path}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="shadow-none p-3 cursor-pointer hover:scale-105 ease-in duration-300 text-[#232323] dark:text-[#fff]">
                            {social.icon}
                        </div>
                    </Link>
                ))
            }
        </>
    )
}

export default SocialMedia
