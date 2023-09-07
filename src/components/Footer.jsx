import React from 'react'
import SocialMedia from './SocialMedia'

function Footer() {
    return (
        <footer className="my-[-90px]">
            <div className="flex items-center justify-between max-w-[330px] m-auto py-0">
                <SocialMedia />
            </div>
            <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
                <a href="https://flowbite.com/" className="hover:underline">
                    Designed & Coded by Raul Morales
                </a>
            </span>
        </footer>
    )
}

export default Footer
