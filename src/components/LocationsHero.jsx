import VideoHero from './VideoHero'
import locationVideo from '../assets/images/location.mp4'

function LocationsHero() {
  return (
    <VideoHero
      src={locationVideo}
      badge="Find Your Roost"
      title="Our Locations."
      subtitle="Fresh, hand-breaded chicken — closer than you think. Find a Roost & Co. near you and come in hungry."
    />
  )
}

export default LocationsHero
