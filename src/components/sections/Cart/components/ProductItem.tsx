'use client'
import Image from "next/image"
import trashCart from "../assets/cart.svg"
import { FC, useState } from "react"
interface productItemProps {
    name: string,
    price: number,
    count: number,
    id: number,
    handleSubmit: ({}: any) => void
}
const ProductItem:FC<productItemProps> = ({name, price, count, id, handleSubmit}) => {
    const totalPrice = useState<any>(price * count)
    const deleteFromCart = () =>{
        if (typeof window !== 'undefined') {
            const items = JSON.parse(localStorage.getItem('products') || "")
            const newList = items.filter((i: any) => i.id !== id)
            localStorage.setItem('products', JSON.stringify(newList))
            handleSubmit({name, price, count, id})
          }
    }
  return (
    <div className="flex w-[350px] px-[5px] pr-[35px] flex-row  justify-between items-center mt-[55px] relative ssml:w-[395px] xsml:w-[520px] sml:w-[600px] mm:w-[770px] s:w-[817px]">
                <div className="flex flex-row justify-center items-center">
                    <div className=" hidden md:flex size-[60px] mr-[20px] justify-center items-center rounded-[10px] bg-[#F9F1E7]">
                        <Image src={`/${id}.png`} alt="aa" width={100} height={100}/>
                    </div>
                    <p className="text-[#9F9F9F] font-[400] text-[10px] sml:text-[13px]">{name}</p>
                </div>
                <p className="text-[#9F9F9F] font-[400] text-[10px] sml:text-[13px]">{price}₽</p>
                <p className="text-[#9F9F9F] font-[400] text-[10px] sml:text-[13px]">{count} шт.</p>
                <p className="text-[#9F9F9F] font-[400] text-[10px] sml:text-[13px] mr-[2%]">{totalPrice}₽</p>
                <Image onClick={deleteFromCart} src={trashCart} alt="icon" className="absolute size-[20px] mr-[2.5%] right-0 cursor-pointer"/>
            </div>
  )
}

export default ProductItem