'use client'
import {allProducts} from "@/store/SotorageOfProducts"
import Image from "next/image"
import arrow from "./assets/arrow.svg"
import { useParams } from "next/navigation"
import Link from "next/link"
const Header = () => {
  const params: any = useParams().productId
  parseInt(params)
  return (
    <div className="flex flex-row w-full h-[100px] justify-between items-center bg-[#F9F1E7] px-[10px] l:px-[100px]">
        <div className="flex flex-row">
          <Link href="/" className="text-[16px] text-[#9F9F9F] font-[400] ml-[7px] extrasml:ml-[12px] mr-[5px] extrasml:mr-[14px] hover:underline mont">Главная</Link>
          <Image src={arrow} alt="icon" className="mr-[7px] extrasml:mr-[24px]"/>
          <Link href="/shop" className="text-[16px] text-[#9F9F9F] font-[400] ml-[12px] mr-[5px] extrasml:mr-[14px] mont hover:underline">Магазин</Link>
          <Image src={arrow} alt="icon" className="mr-[7px] extrasml:mr-[24px]"/>
          <div className="border-[#9F9F9F] border-r-[2px] mr-[10px] extrasml:mr-[30px]"></div>
          <p className="text-[16px] font-[400] text-black mont">{allProducts[params - 1]?.name && allProducts[params - 1]?.name}</p>
        </div>
    </div>
  )
}

export default Header