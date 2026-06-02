import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuHero from '../components/MenuHero'
import MenuSection from '../components/MenuSection'

function Menu() {
    return (
        <div className="pt-16 md:pt-20">
            <Header />
            <MenuHero />
            <MenuSection />
            <Footer />
        </div>
    )
}

export default Menu
