import MainImage from "@/components/sections/About/MainImage"
import Description from "@/components/sections/About/Description"
import InfoAboutUs from "@/components/sections/About/InfoAboutUs"
import Pros from "@/layouts/Pros"
const page = () => {
  return (
    <div className="main__container">
      <MainImage/> 
      <Description/>
      <InfoAboutUs/>
      <Pros/>
    </div>
  )
}

export default page