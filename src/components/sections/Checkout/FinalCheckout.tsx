'use client'
import CheckoutForm from "./components/CheckoutForm"
import {getSummOfStorage} from "@/helpers/LocalStorageHelper"
import { useState } from "react"
const FinalCheckout = () => {
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products') || "[]"))
    const [summOfProducts, setSummOfProducts] = useState(getSummOfStorage())

  return (
    <div className="flex flex-col justify-center xl:justify-between items-center xl:items-start w-full xl:flex-row-reverse mb-[60px]">
        <div className="w-[360px] ssml:w-[420px] xsml:w-[555px] sml:w-[608px] xsml:px-[40px] flex flex-col items-start justify-center px-[10px] mt-[50px]">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="text-[22px] font-[500] text-[black]">Продукт</h1>
                <h1 className="text-[22px] font-[500] text-[black]">Сумма</h1>
            </div>
            {products && summOfProducts != 0 ? (
                products.map((it: any) => (
                    <div key={it.id} className="flex flex-row justify-between items-center w-full mt-[14px]">
                    <p className="mont text-[16px] text-[#9F9F9F] font-[400] ">{it.name} <span className="text-[black] text-[12px] font-[500] mont"> x{it.count}</span></p>
                    <p className="text-[black] mont text-[16px] font-[300]">{it.price * it.count}₽</p>
                </div>
                ))
            ) : (
                <p className="text-[#9F9F9F] text-[16px] font-[300] mt-[10px]">Ваша корзина пуста</p>
            )}
            <div className="flex flex-row justify-between items-center w-full mt-[22px]">
                <p className="text-[black] text-[16px] font-[500] mont">Промежуточный итог</p>
                <p className="text-[black] mont text-[16px] font-[300]">{summOfProducts}₽</p>
            </div>
            <div className="flex flex-row justify-between items-center w-full mt-[22px]">
                <p className="text-[black] text-[16px] font-[500] mont">Всего</p>
                <p className="text-[#B88E2F] mont text-[22px] font-[700]">{summOfProducts}₽</p>
            </div>
            <div className="w-full border-b border-b-[#D9D9D9] mt-[33px]"></div>
            <p className="text-[#9F9F9F] text-[16px] font-[300] mont justify-center mt-[23px]">Поосле отправки формы, мы получим её и постараемся связаться с вами, как можно скорее.</p>
        </div>
        <CheckoutForm/>
    </div>
  )
}

export default FinalCheckout