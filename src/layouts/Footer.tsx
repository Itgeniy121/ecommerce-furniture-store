'use client'
import {useForm, SubmitHandler} from "react-hook-form"
import { useState } from "react"
type formTypes = {
  email: string
}
import Link from "next/link"
const Footer = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<formTypes>()
  const [email, setEmail] = useState("")
  const onSubmit: SubmitHandler<formTypes> = async (data, e) =>{
    reset()
  }
  return (
    <div className="main__container flex flex-col items-center justify-center mt-[50px]">
      <div className="w-full border-t border-t-[#0000002B] pt-[48px] flex flex-col px-[25px] med:flex-row med:justify-between ipad:px-[100px]">
        <div className="flex flex-col">
          <h1 className="text-[black] text-[21px] mont font-[700]">Фурнитура.ру</h1>
          <p className="text-[#9F9F9F] mont text-[16px] font-[400] mt-[35px]">
          Санкт-Петербург,<br></br> просп. Маршала Блюхера, 8к1,
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[#9F9F9F] text-[16px] mont font-[500] mt-[35px]">Ссылки</h1>
          <Link href="/" className="text-black mont text-[16px] font-[500] mt-[35px] hover:underline duration-300">Главная</Link>
          <Link href="/shop" className="text-black mont text-[16px] font-[500] mt-[35px] hover:underline duration-300">Товары</Link>
          <Link href="/about" className="text-black mont text-[16px] font-[500] mt-[35px] hover:underline duration-300">Контакты</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start justify-start">
          <h1 className="text-[#9F9F9F] text-[16px] mont font-[500] mt-[35px]">Связаться с нами</h1>
          <input
          type="email" 
            {...register("email", {
              required: "Введите Email",
              pattern: {
                value:
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: "Введите корректный Email",
              },
            })}
            onChange={e => setEmail(e.target.value)}
          placeholder="example@gmail.com" 
          className="border-b border-b-[black] w-[200px] mt-[15px] text-[#9F9F9F] text-[14px] mont font-[300] outline-none h-[40px]"/>
          {errors?.email && <div className='text-[red] text-[11px]'>{errors.email.message}</div>}
          <button className="bg-none mt-[10px] hover:underline">Отправить</button>
        </form>
      </div>
      <p className="text-[16px] font-[400] text-black my-[38px] border-t border-t-[#0000002B] w-[90%] pt-[35px]">2024 Фурнитура.ру</p>
    </div>
  )
}

export default Footer