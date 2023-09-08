/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import { ThemeProvider } from 'next-themes'

import Navbar from '../components/navbar/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <Navbar />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
