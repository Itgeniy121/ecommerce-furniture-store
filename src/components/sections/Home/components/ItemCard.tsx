"use client"
import Image from "next/image"
import { FC } from "react"
import { useRouter } from "next/navigation"
interface itemCardprops{
  name: string,
  description: string,
  price: number,
  id: number,
  count: number,
}
const ItemCard:FC<itemCardprops> = ({name, description, price, id}) => {
  const router = useRouter()
  const goToCurrentProduct = () =>{
    router.push(`/products/${id}`)
  }
  return (
    <div className="flex relative flex-col w-[285px] h-[446px] cursor-pointer mb-[32px] shadow-md hover:shadow-lg duration-300" onClick={goToCurrentProduct}>
      <div className="flex flex-col w-full h-full hover:z-0 z-50">
        <Image src={`/${id}.png`} width={100} height={100} alt="case" className="w-full h-full"/>
        <div className="flex flex-col bg-[#F4F5F7] h-[145px] pt-[16px] pl-[16px] pb-[30px] justify-between items-start">
          <h1 className="text-[24px] font-[600] text-[#2f2929] mont">{name}</h1>
          <p className="text-[13px] font-[500] text-[#898989] mont">{description}</p>
          <p className="text-[20px] font-[600] text-[#3A3A3A] mont">{`${price}₽`}</p>
         </div>
      </div>
</div>
  )
}

export default ItemCard