"use client"
import MainImage from "@/components/sections/Cart/MainImage"
import Conclusion from "@/components/sections/Cart/Conclusion"
import Pros from "@/layouts/Pros"
const page = () => {
  
  return (
    <div className="main__container">
      <MainImage/> 
      <Conclusion/>
      <Pros/>
    </div>
  )
}

export default page