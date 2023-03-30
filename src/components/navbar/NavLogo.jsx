import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Image from 'next/image'
import Link from 'next/link'
import NavLogoDark from '../../../public/assets/navLogoDark.png'
import NavLogoLight from '../../../public/assets/navLogoLight.png'

function NavLogo(props) {
    const [mounted, setMounted] = useState(false)
    const { theme } = props

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderLogo = () => {
        if (!mounted) return null

        if (theme === 'dark') {
            return (
                <Link href="/">
                    <Image
                        src={NavLogoDark}
                        alt="/"
                        width="90"
                        height="50"
                        className="cursor-pointer"
                    />
                </Link>
            )
        }
        return (
            <Link href="/">
                <Image
                    src={NavLogoLight}
                    alt="/"
                    width="90"
                    height="50"
                    className="cursor-pointer"
                />
            </Link>
        )
    }
    return (
        <div>
            {renderLogo()}
        </div>
    )
}

NavLogo.propTypes = {
    theme: PropTypes.string.isRequired,
}
export default NavLogo
