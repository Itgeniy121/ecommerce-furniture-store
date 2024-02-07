"use client"
import AboutProduct from "@/components/sections/Product/AboutProduct"
import LikedProducts from "@/components/sections/Product/LikedProducts"
import Descriptiom from "@/components/sections/Product/Descriptiom"
import Header from "@/components/sections/Product/Header"

const page = () => {
    return (
      <div className="main__container">
        <Header/>
        <AboutProduct/>
        <Descriptiom/>
        <LikedProducts/>
      </div>
    )
  }
  
  export default page