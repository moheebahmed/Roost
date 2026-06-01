import Header from '../components/Header'
import QualityHero from '../components/QualityHero'
import QualityStandards from '../components/QualityStandards'
import NutritionalIndex from '../components/NutritionalIndex'
import QualityCTA from '../components/QualityCTA'
import Footer from '../components/Footer'

function Quality() {
    return (
        <div className="pt-16 md:pt-20">
            <Header />
            <QualityHero />
            <QualityStandards />
            <NutritionalIndex />
            <QualityCTA />
            <Footer />
        </div>
    )
}

export default Quality
