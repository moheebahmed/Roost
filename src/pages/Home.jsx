import Header from '../components/Header'
import Hero from '../components/Hero'
import SignatureLineup from '../components/SignatureLineup'
import FarmToFryer from '../components/FarmToFryer'
import Testimonials from '../components/Testimonials'
import GetItHot from '../components/GetItHot'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className="pt-16 md:pt-20">
            <Header />
            <Hero />
            <SignatureLineup />
            <FarmToFryer />
            <Testimonials />
            <GetItHot />
            <Footer />
        </div>
    )
}

export default Home
