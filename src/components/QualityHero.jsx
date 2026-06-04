import VideoHero from './VideoHero'
import broastVideo from '../assets/images/broast.mp4'

function QualityHero() {
  return (
    <VideoHero
      src={broastVideo}
      badge="Uncompromising Standards"
      title="Nutrition & Quality."
      subtitle="We believe speed shouldn't sacrifice substance. Discover the clean, high-velocity fuel behind every Roost & Co. meal."
    />
  )
}

export default QualityHero
