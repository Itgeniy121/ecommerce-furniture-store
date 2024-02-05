'use client'
import {allProducts} from "@/store/SotorageOfProducts"
import Image from "next/image"
import arrow from "./assets/arrow.svg"
import { useParams } from "next/navigation"
const Header = () => {
  const params: any = useParams().productId
  parseInt(params)
  return (
    <div className="flex flex-row w-full h-[100px] justify-between items-center bg-[#F9F1E7] px-[10px] l:px-[100px]">
        <div className="flex flex-row">
          <p className="text-[16px] text-[#9F9F9F] font-[400] ml-[7px] extrasml:ml-[12px] mr-[5px] extrasml:mr-[14px] mont">Главная</p>
          <Image src={arrow} alt="icon" className="mr-[7px] extrasml:mr-[24px]"/>
          <p className="text-[16px] text-[#9F9F9F] font-[400] ml-[12px] mr-[5px] extrasml:mr-[14px] mont">Магазин</p>
          <Image src={arrow} alt="icon" className="mr-[7px] extrasml:mr-[24px]"/>
          <div className="border-[#9F9F9F] border-r-[2px] mr-[10px] extrasml:mr-[30px]"></div>
          <p className="text-[16px] font-[400] text-black mont">{allProducts && allProducts[params - 1].name}</p>
        </div>
    </div>
  )
}

export default Header