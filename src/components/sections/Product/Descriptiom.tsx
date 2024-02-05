'use client'
import {allProducts} from "@/store/SotorageOfProducts"
import { useParams } from "next/navigation"
const Descriptiom = () => {
    const params: any = useParams().productId
    parseInt(params)
  return (
    <div className="w-full flex flex-col justify-center items-center mt-[115px] px-[20px] l:px-[200px]">
        <h1 className="text-[24px] mont font-[500] text-[black]">Внимание</h1>
        <p className="text-[16px] font-[400] text-[#9F9F9F] mont text-justify mt-[37px]">
        {allProducts[params - 1] && allProducts[params - 1]?.attention}
        </p>
    </div>
  )
}

export default Descriptiom