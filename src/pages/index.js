import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Raul | Full-Stack Developer</title>
                <meta name="description" content="I'm a fulll-stack developer specializing in building (and occasionally designing) exceptional digital experiences." />
                <link rel="icon" href="/fav.png" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
