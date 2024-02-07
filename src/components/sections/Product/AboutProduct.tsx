"use client"
import InfoAboutProduct from "./components/InfoAboutProduct"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

const AboutProduct = () => {
  const [mainImage, setMainImage] = useState(1)
  const params: any = useParams().productId
  const setImageOne = () =>{
    setMainImage(1)
  }
  const setImageTwo = () =>{
    setMainImage(2)
  }
  const setImageThree = () =>{
    setMainImage(3)
  }
  parseInt(params)
  
  return (
    <div className="w-full flex ipad:flex-row flex-col xxl:px-[90px] mt-[32px] items-center ipad:justify-center">
        <div className="flex flex-col-reverse sml:flex-row ipad:mr-[30px] l2:mr-[105px]">
            <div className="flex justify-between sm:justify-start sm:gap-8 items-center flex-row sml:flex-col mt-[20px] sml:mt-[0px] mr-[31px]">
                <div onClick={setImageOne} className="w-[76px] h-[80px] flex items-center justify-center border-[2px] rounded-[10px] cursor-pointer"><Image src={`/${params}.png`} width={100} height={100} className="w-[95%] h-[95%]" alt="product"/></div>
                <div onClick={setImageTwo} className="w-[76px] h-[80px] flex items-center justify-center border-[2px] rounded-[10px] cursor-pointer"><Image src={`/${params}.1.png`} width={100} height={100} className="w-[95%] h-[95%]" alt="product"/></div>
                <div onClick={setImageThree} className="w-[76px] h-[80px] flex items-center justify-center border-[2px] rounded-[10px] cursor-pointer"><Image src={`/${params}.2.png`} width={100} height={100} className="w-[95%] h-[95%]" alt="product"/></div>
            </div>
            <div className="w-[350px] extrasml:w-[423px] h-[500px] flex items-center justify-center rounded-[10px]">
              {mainImage === 1 && <Image src={`/${params}.png`} width={1000} height={1000} className="w-full h-full" alt="product"/>}
              {mainImage === 2 && <Image src={`/${params}.1.png`} width={1000} height={1000} className="w-full h-full" alt="product"/>}
              {mainImage === 3 && <Image src={`/${params}.2.png`} width={1000} height={1000} className="w-full h-full" alt="product"/>}
            </div>
        </div>
        <InfoAboutProduct/>
    </div>
  )
}

export default AboutProduct