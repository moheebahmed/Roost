import Header from '../components/Header'
import LocationsHero from '../components/LocationsHero'
import LocationsSection from '../components/LocationsSection'
import Footer from '../components/Footer'

function Locations() {
    return (
        <div className="pt-16 md:pt-20">
            <Header />
            <LocationsHero />
            <LocationsSection />
            <Footer />
        </div>
    )
}

export default Locations
