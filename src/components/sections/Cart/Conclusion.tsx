"use client"
import { useState } from "react"
import { useEffect } from "react"
import ProductItem from "./components/ProductItem"
import { useRouter } from "next/navigation"
import {getSummOfStorage} from "@/helpers/LocalStorageHelper"

const Conclusion = () => {
    const [products, setProducts] = useState<any>()
    const [summOfProducts, setSummOfProducts] = useState<any>()
    useEffect(() =>{
        setProducts(JSON.parse(localStorage.getItem('products') || "[]"))
        setSummOfProducts(getSummOfStorage())
    },[])
    const router = useRouter()
    const goToCheckout = () =>{
    router.push("/checkout")
  }
  const deleteFromCart = (value: any) =>{
        setProducts(JSON.parse(localStorage.getItem('products') || ""))
        setSummOfProducts(getSummOfStorage())
      
    
  }
  return (
    <div className="w-full py-[72px] px-[35px] flex flex-col xl:flex-row items-center xl:items-start justify-between">
        <div className="flex flex-col xl:mr-[30px]">
            <div className="w-[350px] h-[55px] flex flex-row justify-between items-center bg-[#F9F1E7] px-[20px] ssml:w-[395px] xsml:w-[520px] sml:w-[600px] mm:w-[770px] s:w-[817px]">
                <p className="text-[12px] sml:text-[14px] mont font-[500] text-[black] md:ml-[50px]">Продукт</p>
                <p className="text-[12px] sml:text-[14px] mont font-[500] text-[black]">Цена</p>
                <p className="text-[12px] sml:text-[14px] mont font-[500] text-[black]"> Качество</p>
                <p className="text-[12px] sml:text-[14px] mont font-[500] text-[black] mr-[20px]">Сумма</p>
            </div>
            <div className="relative h-[300px] xl:h-[400px] overflow-auto">{products && summOfProducts != 0 ? (products.map((item: any) => <ProductItem key={item.id} name={item.name} count={item.count} id={item.id} price={item.price} handleSubmit={deleteFromCart} />)) :
            <p className="absolute text-[14px] mt-[20px] text-[black] font-[400] top-[20%] left-[0%] xsml:left-[10%] text-center mm:left-[24%]">Корзина пока что пуста. Вы можете добавить товары из <a href="/shop" className="text-[#B88E2F] hover:underline">каталога</a></p>
            }</div>
        </div>
        <div className="w-[340px] ssml:w-[390px] h-[390px] bg-[#F9F1E7] mt-[72px] xl:mt-[0px] flex flex-col justify-start items-center py-[15px]">
            <h1 className="text-[32px] font-[600] text-black mont">Итог</h1>
            <div className="flex flex-row mt-[60px]">
                <p className="text-[16px] text-[black] mont font-[500] mr-[40px]">Промежуточный итог</p>
                <p className="text-[16px] font-[400] text-[#9F9F9F] mont">{summOfProducts}₽</p>
            </div>
            <div className="flex flex-row mt-[30px]">
                <p className="text-[16px] text-[black] mont font-[500] mr-[40px]">Итог</p>
                <p className="text-[18px] font-[500] text-[#B88E2F] mont">{summOfProducts}₽</p>
            </div>
            <div onClick={goToCheckout} className='flex flex-row justify-center items-center w-[223px] h-[64px] border border-[#000] rounded-[10px] mt-[40px] cursor-pointer'>
                <p className='mont text-[16px] font-[400] text-black'>К оплате</p>
            </div>
        </div>
    </div>
  )
}

export default Conclusion