"use client"
import {allProducts} from "@/store/SotorageOfProducts"
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

const InfoAboutProduct = () => {
    const [count, setCount] = useState(1)
    let flag = false
    const params: any = useParams().productId
    parseInt(params)
    const addToCart = async () =>{
        const item = {
            name: allProducts[params-1].name,
            description: allProducts[params-1].description,
            price: allProducts[params-1].price,
            id: allProducts[params-1].id,
            count: count,
          }
          const arrayItem = [
            {
              name: allProducts[params-1].name,
              description: allProducts[params-1].description,
              price: allProducts[params-1].price,
              id: allProducts[params-1].id,
              count: count,
            }
          ]
          const arrayItemToString = JSON.stringify(arrayItem)
          const currentItems = JSON.parse(localStorage.getItem('products') || '[]')
          if(localStorage.getItem('products')){
            await currentItems.forEach((i: any)=>{
              if(i.id == item.id){
                flag = true
                i.count += 1
                console.log(flag)
                localStorage.setItem('products', JSON.stringify(currentItems))
              }else{
                i.count = i.count
              }
            })
            if(flag == false){
              console.log(flag, 'тут добавил')
              currentItems.push(item)
              localStorage.setItem('products', JSON.stringify(currentItems))
            }else{
              flag = !flag
            }
          }else{
            localStorage.setItem('products', arrayItemToString)
          }
          setCount(1)
    }
    const plusItemToCart = () =>{
        if(count <= 9){
            setCount(prevSatete => prevSatete + 1)
        }
    }
    const minusItemToCart = () =>{
        if(count >= 2){
            setCount(prevSatete => prevSatete - 1)
        }
    }
  return (
    <div className="flex flex-col w-[350px] extrasml:w-[450px] h-[500px] mt-[40px] ipad:mt-[0px] border-b-[#D9D9D9] border-b-[1px]">
            <h1 className="text-[42px] font-[400] text-[black] mont">{allProducts[params - 1].name}</h1>
            <h2 className="mont text-[#9F9F9F] text-[24px] font-[500]">{allProducts[params - 1].price} ₽</h2>
            <p className="text-[13px] font-[400] mont text-[black] mt-[13px]">
                {allProducts[params - 1].description}
            </p>
            <p className="mont text-[#9F9F9F] text-[14px] font-[400] mt-[22px]">Размер</p>
            <div className="flex flex-row justify-start mt-[12px]">
                <div className="size-[30px] bg-[#B88E2F] rounded-[5px] flex justify-center items-center mr-[16px]">
                    <p className="text-[13px] mont text-[black] font-[400]">XL</p>
                </div>
            </div>
            <div className='flex flex-row mt-[32px]'>
                <div className='flex flex-row justify-between items-center w-[123px] h-[64px] border border-[#9F9F9F] rounded-[10px] px-[12px]'>
                    <button onClick={minusItemToCart} className='mont text-[16px] font-[400] text-black'>-</button>
                    <p className='mont text-[16px] font-[400] text-black'>{count}</p>
                    <button onClick={plusItemToCart} className='mont text-[16px] font-[400] text-black'>+</button>
                </div>
                <div onClick={addToCart} className='flex flex-row justify-center items-center w-[123px] h-[64px] border border-[#000] rounded-[10px] ml-[18px]'>
                    <p className='mont text-[16px] font-[400] text-black hover:underline cursor-pointer'>В корзину</p>
                </div>
            </div>
        </div>
  )
}

export default InfoAboutProduct