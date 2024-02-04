import MainImage from "@/components/sections/Shop/MainImage"
import Filter from "@/components/sections/Shop/Filter"
import Items from "@/components/sections/Shop/Items"
import Pros from "@/layouts/Pros"
const page = () => {
  return (
    <div className="main__container">
      <MainImage/>
      <Filter/>
      <Items/>
      <Pros/>
    </div>
  )
}

export default page