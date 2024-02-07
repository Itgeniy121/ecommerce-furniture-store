import About from "@/components/sections/Home/About"
import ForHome from "@/components/sections/Home/ForAllHome"
import OurProducts from "@/components/sections/Home/OurProducts"
import FurnitureSelection from "@/components/sections/Home/FurnitureSelection"
export default function Home() {
  return (
    <div className="main__container">
      <About/>
      <ForHome/>
      <OurProducts/>
      <FurnitureSelection/>
      
    </div>
  )
}
